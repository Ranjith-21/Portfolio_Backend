const userData = require("./../Modals/userSchema");

let addUserData = async (req, res, next) => {
  let { userName, userComments, contactNum, email } = req.body;
  try {
    await userData.insertMany([{ userName, userComments, contactNum, email }]);
    res.json({
      error: false,
      message: "User Information Added Sucessfully",
      data: { userName, userComments, contactNum, email },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {addUserData};