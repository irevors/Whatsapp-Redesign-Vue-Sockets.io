const User = require('../../models/user.model');

const users = async () => {
  const users = await User.find();
  return users;
};
const userById = async (id) => {
  const user = await User.findById(id);
  return user;
};
const userFindOne = async (query) => {
  const user = await User.findOne(query);
  return user;
};
const userFindOneLean = async (query) => {
  const user = await User.findOne(query).lean();
  return user;
};
const usersLean = async () => {
  const users = await User.find().lean();
  return users;
};
const userByIdLean = async (id) => {
  const user = await User.findById(id).lean();
  return user;
};

module.exports = {
  users,
  userById,
  usersLean,
  userByIdLean,
  userFindOneLean,
  userFindOne,
};
