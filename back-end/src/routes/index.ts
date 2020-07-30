import { Router, Response } from "express";

import productRouter from "./product.route";

const routes = Router();

routes.get("/", (req, res: Response) => {
  return res.json("Product API");
});

routes.use("/product", productRouter);

export default routes;
