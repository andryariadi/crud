const Product = require("../models/ProductSchema");
const User = require("../models/UserShema");

class Controller {
  // Users
  static async getUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getUserById(req, res) {
    const { slug } = req.params;
    try {
      const user = await User.findById(slug);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async createUser(req, res) {
    const { name, email, gender } = req.body;
    try {
      const user = await User.create({ name, email, gender });
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async updateUser(req, res) {
    const { slug } = req.params;
    try {
      const user = await User.findByIdAndUpdate(slug, req.body, { new: true });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async deleteUser(req, res) {
    const { slug } = req.params;
    try {
      const user = await User.findByIdAndDelete(slug);
      res.status(200).json({ message: `${user.name} successfully deleted` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async searchUser(req, res) {
    const { name } = req.query;
    try {
      const users = await User.find({ name: { $regex: name, $options: "i" } });
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }

  static async sortUser(req, res) {
    const { sort } = req.query;
    try {
      const users = await User.find().sort({ name: sort });
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }

  // Products
  static async getProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getProductById(req, res) {
    const { slug } = req.params;
    try {
      const product = await Product.findById(slug);
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async createProduct(req, res) {
    const { title, price, categories } = req.body;
    try {
      const product = await Product.create({ title, price, categories });
      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async updateProduct(req, res) {
    const { slug } = req.params;
    try {
      const product = await Product.findByIdAndUpdate(slug, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async deleteProduct(req, res) {
    const { slug } = req.params;
    try {
      const product = await Product.findByIdAndDelete(slug);
      res.status(200).json({ message: `${product.title} successfully deleted` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = Controller;
