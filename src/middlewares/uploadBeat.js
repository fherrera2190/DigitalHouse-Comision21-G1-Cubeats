const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './public/audio/');
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_avatar_beat_${path.extname(file.originalname)}`);
    }
});

const uploadBeat = multer({ storage });

module.exports = uploadBeat;