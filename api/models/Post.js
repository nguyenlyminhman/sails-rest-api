/**
 * Post.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: { type: 'string' },
    post: { type: 'string' },
    _user: {
      model: 'user',
      columnName: 'user_id',
      required: true
    },
    _category: {
      model: 'category',
      columnName: 'category_id',
      required: true
    }
  },
};

