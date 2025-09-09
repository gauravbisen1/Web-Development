const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({//by default this will set in key to set REMEMBER
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({//means we create folder and create file inside folder inside cloudinary
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',//in which folder files will save
      allowedFormats: ["png" , "jpg" , "jpeg" ],
    },
  });

  module.exports = {
    cloudinary , storage
  }