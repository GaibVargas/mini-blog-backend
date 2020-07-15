const { Post, User, Tag } = require('../database/models');

module.exports = {
  async create(req, res) {
    const { id_author, title, content, tags } = req.body;

    const user = await User.findByPk(id_author);

    if(!user) {
      return res.json({ message: "User not found!" });
    }

    let allTags = [];
    for(let i = 0; i < tags.length; i++) {
      const [ tag ] = await Tag.findOrCreate({
        where: { description: tags[i] }
      });

      allTags.push(tag);
    }

    const post = await Post.create({
      title, content, id_author
    }, {
      include: [{
        association: 'author'
      }]
    });

    for(let i = 0; i < allTags.length; i++) {
      await post.addTags(allTags[i]);
    }
    
    return res.json(post);
  },

  async show(req, res) {
    const posts = await Post.findAll({
      include: [{
        association: 'author',
        attributes: ['name']
      }, {
        association: 'tags',
        attributes: ['description'],
        through: { attributes: [] }
      }
    ]
    });

    return res.json(posts);
  },

  async index(req, res) {
    const { id } = req.params;

    const post = await Post.findByPk(id, {
      include: [{
        association: 'author',
        attributes: ['name']
      }, {
        association: 'tags',
        attributes: ['description'],
        through: { attributes: [] }
      }]
    });

    if(!post) return res.json({ message: 'Post not found!' });

    return res.json(post);
  },

  async delete(req, res) {
    const { post_id, user_id } = req.body;

    const post = await Post.findByPk(post_id);

    if(post.id_author !== user_id) {
      return res.json({ message: "User cannot delete this post." });
    }

    await Post.destroy({
      where: { id: post_id }
    });

    return res.json({ message: "Post deleted!" });
  },

  async update(req, res) {
    const { post_id, user_id, title, content } = req.body;

    const [post] = await Post.update({
      title, content
    }, {
      where: {
        id: post_id,
        id_author: user_id
      }
    });

    if(post === 0) return res.json({ message: "It cannot be updated" });

    return res.json({ message: "Post updated!" });
  },
}