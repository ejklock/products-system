import path from "path";
import crypto from "crypto";
import multer from "multer";
import { request } from "express";
import AppError from "../errors/AppError";

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "..", "..", "tmp"),

  filename(request, file, callback) {
    const fileHash = crypto.randomBytes(10).toString("hex");
    const fileName = `${fileHash}-${file.originalname}`;
    return callback(null, fileName);
  },
});

export const defaultUpload = {
  storage: storage,
};

export const productsUpload = multer({
  storage: storage,
  fileFilter(req, file, callback) {
    if (file.mimetype !== "application/json") {
      return callback(new AppError("O arquivo deve ser no formato JSON", 404));
    }
    callback(null, true);
  },
});
