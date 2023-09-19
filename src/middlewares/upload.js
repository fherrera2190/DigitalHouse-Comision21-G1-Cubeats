const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/jpg"
        ) {
            return cb(null, './public/img/products');
        }
        return cb(null, './public/audio/');
    },
    filename: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/jpg"
        ) {
            return cb(null, `${Date.now()}_avatar_beat_${path.extname(file.originalname)}`);
        }
        return cb(null, `${Date.now()}_beat_${path.extname(file.originalname)}`);
    }
});

const extensionFilter = (req, file, cb) => {
    if (
        file.mimetype == "audio/mpeg" ||
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/jpg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}


const upload = multer({
    storage,
    fileFilter: extensionFilter
});

module.exports = upload;