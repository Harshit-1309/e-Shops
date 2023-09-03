import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs";

export const createProductController = async (req, res) => {
  try {
    const { name, description, slug, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;

    //validation
    switch (true) {
      case !name:
        return req.status(500).send({ error: "Name is required" });
      case !description:
        return req.status(500).send({ error: "Description is required" });
      case !price:
        return req.status(500).send({ error: "Price is required" });
      case !category:
        return req.status(500).send({ error: "Category is required" });
      case !quantity:
        return req.status(500).send({ error: "Quantity is required" });
      case !photo && photo.size > 1000000:
        return req
          .status(500)
          .send({ error: "Photo is required & should be less than 1mb" });
    }
    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Sucessfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while creating product",
    });
  }
};

// get all products

export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    req.status(200).send({
      success: true,
      totalCount: products.length,
      message: "All Products List",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all products",
    });
  }
};

//get single product contorller

export const singleProductController = async (req, res) => {
  try {
    // const { slug } = req.params;
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Get Product Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting Product",
    });
  }
};

// get photo controller

export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      error,
      message: "Error while gettinh photo",
    });
  }
};

// delete Product Controller
export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while deleting",
    });
  }
};

// update Product Controller
export const updateProductController = async (req, res) => {
  try {
    const { name, description, slug, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;

    //validation
    switch (true) {
      case !name:
        return req.status(500).send({ error: "Name is required" });
      case !description:
        return req.status(500).send({ error: "Description is required" });
      case !price:
        return req.status(500).send({ error: "Price is required" });
      case !category:
        return req.status(500).send({ error: "Category is required" });
      case !quantity:
        return req.status(500).send({ error: "Quantity is required" });
      case !photo && photo.size > 1000000:
        return req
          .status(500)
          .send({ error: "Photo is required & should be less than 1mb" });
    }
    const products = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Updated Sucessfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating product",
    });
  }
};
