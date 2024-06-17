import express from "express";
import multer from "multer";
import multerUpload from './utils/multer.js';
// import storage from './utils/storage.js'
import { port, apiKey } from "./config.js";
import bodyParser from "body-parser";

const app = express();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../public");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.originalname + "-" + uniqueSuffix);
//   },
// });

// const upload = multer({ storage: storage });
// upload.single("fileName")
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("./index.ejs");
});
app.post("/post", multerUpload, (req, res) => {
  console.log(req.file);
  return res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
