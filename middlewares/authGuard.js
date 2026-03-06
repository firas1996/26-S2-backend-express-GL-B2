exports.protectorMW = async (req, res, next) => {
  try {
    let token;
    // 1) bech nthabtou si el user logged in or not ( did he have a token ?)
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res.status(401).json({
        message: "You are not logged in !!!!",
      });
    }
    // 2) bech nthabtou si el token valid or not !
    // 3) bech nthabtou si el userr still exists !
    // 4) bech nthabtou si el token tsan3et 9bal wala ba3d e5er pass update !
  } catch (error) {
    res.status(400).json({
      message: "Fail",
      error: error,
    });
  }
};
