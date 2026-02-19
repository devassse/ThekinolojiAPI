const prisma = require('../config/prisma');

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
    const user = await prisma.user.create({
      data: { firstName, lastName, email, password, role },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsersPosts = async (req, res) => {
  const { userId } = req.params;

  try {
    const posts = await prisma.post.findMany({
      where: { authorId: parseInt(userId) },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUsersPosts,
};