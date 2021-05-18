const users = [];

const addUser = ({ id, name, room }) => {
  name.trim().toLowerCase();
  room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (existingUser) return { error: 'User exists' };

  const user = { id, name, room };

  users.push(user);
  return {
    user
  }

};

const removeUser = (id) => {
  const u = users.filter(user => user.id !== id);
  users = u;
};

const getUser = (id) => users.find(user => user.id === id);

const getUsersInRoom = (room) => {
  users.filter(user => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
