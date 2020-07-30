import { Router, Request, Response, response } from "express";
import { productsUpload } from "../config/upload";
import GetAllProductsService from "@services/GetAllProductService";
import GetProductService from "@services/GetProductService";
import ProcessProductFileService from "@services/ProcessProductFileService";
import CreateProductService from "@services/CreateProductService";
import DeleteProductService from "@services/DeleteProductService";
import UpdateProductService from "@services/UpdateProductService";

const productRouter = Router();

productRouter.get("/", async (req: Request, res: Response) => {
  const getAllProductService = new GetAllProductsService();
  const result = await getAllProductService.execute();
  return res.json(result);
});

productRouter.get(
  "/:productId",
  async ({ params: { productId } }: Request, res: Response) => {
    const getProductService = new GetProductService();
    const result = await getProductService.execute(productId);
    return res.json(result);
  }
);

productRouter.put("/:productId", async (req: Request, res: Response) => {
  const {
    body,
    params: { productId },
  } = req;
  const updateProductService = new UpdateProductService();
  const result = await updateProductService.execute({ id: productId, ...body });
  return res.json(result);
});

productRouter.delete(
  "/:productId",
  async ({ params: { productId } }: Request, res: Response) => {
    const deleteProductService = new DeleteProductService();
    await deleteProductService.execute(productId);
    return res.json({ message: "Produto deletado com sucesso" });
  }
);

productRouter.post(
  "/createMany",
  productsUpload.single("products"),
  async ({ file }: Request, res: Response) => {
    const processProductFileService = new ProcessProductFileService();
    const createProductService = new CreateProductService();
    const products = await processProductFileService.execute(file);
    const result = await createProductService.execute(products);
    return res.json({
      message: `${result.length} produtos criados com sucesso`,
    });
  }
);

export default productRouter;
