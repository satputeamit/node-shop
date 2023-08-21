import express from "express";
import cors from "cors";
import userRouter from "./routes/users";
import productRouter from "./routes/products";
import orderRouter from "./routes/orders";

const port = process.env.APP_PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);
app.listen(port, () => {
  console.log(`API Gateway service started on port:${port}`);
});
