const util = require('util');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const dotenv = require('dotenv').config();
const { DB_HOST } = process.env;
var storage = new GridFsStorage({
  url: DB_HOST,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg'];
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-${file.originalname}`;
      return filename;
    }
    return {
      bucketName: photos,
      filename: `${Date.now()}-${file.originalname}`,
    };
  },
});
var uploadFiles = multer({ storage: storage }).single('file');
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
