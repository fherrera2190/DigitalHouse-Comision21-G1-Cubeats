const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./public/img/users");
  },
  filename: (req, file, cb) => {
    return cb(
      null,
      `${Date.now()}_${req.params.username}_${file.fieldname}_${path.extname(
        file.originalname
      )}`
    );
  }
});

const extensionFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/jpg"
  ) {
    cb(null, true);
  } else {
    req.cualquiera = "Tipo de archivo no permitido";
    cb(null, false);
  }
};

const uploadUserImages = multer({
  storage,
  fileFilter: extensionFilter
});

module.exports = uploadUserImages;
