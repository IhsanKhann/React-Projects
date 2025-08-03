import express from "express";
const router = express.Router();

import {getProducts,addProducts,updateProducts,deleteProducts} from "./controller.js" ;

// here we will have routes.
router.get("/", getProducts) ; // read
router.post("/", addProducts) ; // create
router.put("/:id", updateProducts) ; // update
router.delete("/:id", deleteProducts); // delete

export default router;