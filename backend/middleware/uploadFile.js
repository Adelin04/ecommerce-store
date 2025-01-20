import multer from "multer";
import path from "path";
import fs from "fs";

const __dirname = path.resolve();

// User Image Storage
const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    if (!req.params.id) {
      return res.status(404).json({ message: "User not found" });
    }

    cb(null, `${__dirname}/uploads`);
  },

  filename: async function (req, file, cb) {
    const fileName = `${req.params.id}-${file.originalname}`;

    cb(null, fileName);
  },
});

// Product Images Storage
const productStorage = multer.diskStorage({
  destination: async function (req, file, cb) {
    req.files.map((image) => {
      console.log(image);
    })
    // console.log(file);


    // cb(null, `${__dirname}/uploads/products`);
  },

  // filename: async function (req, file, cb) {
  //   const fileName = `test`;

  //   cb(null, fileName);
  // }
});

export const upload = multer(
  { storage: storage },
  { limits: { fileSize: 1024 * 1024 * 25 /* Max file size 25MB */ } }
);
// export const upload = multer({ dest: "uploads/" }, { limits: { fileSize: 1000000 } });

export const uploadProductImage = multer(
  { storage: productStorage },
  { limits: { fileSize: 1024 * 1024 * 25 /* Max file size 25MB */ } }
);
