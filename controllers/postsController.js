// controllers/postsController.js
import { Post } from "../db/models/index.js";

const postsController = {
  // Create a new post
  async createPost(req, res) {
    try {
      const { title, content } = req.body;
      const post = await Post.create({ title, content });
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Retrieve all posts
  async getAllPosts(req, res) {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Retrieve a single post by ID
  async getPostById(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a post by ID
  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      await post.update({ title, content });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a post by ID
  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      await post.destroy();
      res.status(204).json({
        message: "Post deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default postsController;
