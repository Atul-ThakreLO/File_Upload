import multer from "multer";
import upload from "./storage.js";

// const upload = multer({ storage: storage });
// const upload = multer({ dest: storage })

const multerUpload = upload.single("fileName");

export default multerUpload;
