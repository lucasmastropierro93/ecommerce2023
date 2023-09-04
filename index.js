import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import morgan from "morgan";
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import cors from "cors";

dotenv.config();

const app = express();

// db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connect"))
  .catch((err) => console.log("DB error =>", err));

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// router middleware
app.use("/api", authRouter);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
/*
app.use((req, res, next) => {
    console.log("this is my own middleware");
    next();
});


app.get("/users", (req,res) => {
    res.json({
        data: "Lucas Matias Mastropierro",
    });
});
*/

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Node is running on port ${port}`);
});
