import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  productPhotoController,
  singleProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// routes

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable,
  createProductController
);

//get products
router.get("/get-product", getProductController);

//get single products
router.get("/get-product/:slug", singleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

// delete product controller
router.delete("/delete-product/:pid", deleteProductController);

// update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable,
  updateProductController
);
export default router;
