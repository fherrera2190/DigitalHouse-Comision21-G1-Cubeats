const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './public/img/products')
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_avatar_beat_${path.extname(filename.orignalname)}`);
    }
});

const uploadImage = multer({ storage });

module.exports = uploadImage;