const prisma = require('../config/prisma');

const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  const { title, content, authorId } = req.body;

  try {
    const post = await prisma.post.create({
      data: { title, content, authorId },
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPosts,
  createPost,
};