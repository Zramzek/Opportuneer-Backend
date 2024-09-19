const {user} = require('../models/user');

exports.getUser = async (userId) => {
  try {
    const dataUser = await user.findByPk(userId);

    if (!dataUser) {
      return {
        status: 404,
        message: 'User not found',
      };
    }

    return {
      status: 200,
      message: `Welcome, ${dataUser.username}!.`,
      data: {
        username: dataUser.username
      }
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: 'Internal server error',
    };
  }
};
