import http from "@/lib/http";
import {
  CreateProductBodyType,
  ProductResType,
} from "@/schemaValidations/product.schema";

const productApiRequest = {
  get: () => http.get("/product"),
  create: (data: CreateProductBodyType) =>
    http.post<ProductResType>("/product", data),
};

export default productApiRequest;
