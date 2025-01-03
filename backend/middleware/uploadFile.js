import multer from "multer";
import path from "path";

const __dirname = path.resolve();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
//   console.log('ID: ',req.params.id);
  
//     if (!req.params.id) {
//       return res.status(404).json({ message: "User not found" });
//     }
  
    cb(null, `${__dirname}/uploads`);
  },

  filename: function (req, file, cb) {
    cb(null, `${req.params.id}${'\\'}${file.originalname}`);
  },
});

export const upload = multer(
  { storage: storage },
  { limits: { fileSize: 1000000 } }
);
// export const upload = multer({ dest: "uploads/" }, { limits: { fileSize: 1000000 } });
