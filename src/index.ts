import express from "express";
import personRouter from "@/routers/person-router";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(personRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
