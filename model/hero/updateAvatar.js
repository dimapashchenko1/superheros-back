const { Superheros } = require("../../schema/superheroModel");
const multer = require('multer');
const express = require('express')
const app = express();


const updateAvatar = async (body) => {
  
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
const upload = multer({ storage: storage });
}
module.exports = updateAvatar;