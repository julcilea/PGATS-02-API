const users = [];

exports.create = (user) => {
  users.push(user);
};

exports.findByUsername = (username) => {
  return users.find(u => u.username === username);
};

exports.getAll = () => {
  return users;
};
