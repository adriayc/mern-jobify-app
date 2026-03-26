import multer from 'multer';
import DataURIParser from 'datauri/parser.js';
import path from 'path';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/uploads');
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname;
//     cb(null, fileName);
//   },
// });

// const upload = multer({ storage });

// Upload Image as Buffer
const storage = multer.memoryStorage();

const upload = multer({ storage });

const parser = new DataURIParser();

export const formatImage = (file) => {
  // console.log(file);
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};

export default upload;
