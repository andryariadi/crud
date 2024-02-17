const User = require("../models/UserShema");

class Controller {
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
}

module.exports = Controller;
