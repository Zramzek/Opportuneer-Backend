const { user } = require('../models');

const updateProfileServices = async (idUser, updatedData) => {
  try {
    const updatedUser = await user.update(updatedData, {
      where: { idUser }
    });

    if (updatedUser[0] === 0) {
      return { status: 404, message: "User not found" };
    }

    return { status: 200, message: "Profile updated successfully" };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal server error" };
  }
};

module.exports = { updateProfileServices };
