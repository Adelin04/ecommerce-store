import multer from "multer";
import path from "path";
import fs from "fs";

const __dirname = path.resolve();

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

export const upload = multer(
  { storage: storage },
  { limits: { fileSize: 1000000 } }
);
// export const upload = multer({ dest: "uploads/" }, { limits: { fileSize: 1000000 } });
