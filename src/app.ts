import express from "express";

const app = express();

app.use(express.json());

const PORT : number = 4000 || 3000;

app.get("/", (req, res): any => {
  res.send("Hello from express");
});

app.listen(PORT, (): any => {
  console.log(`PORT: ${PORT}`); 
});
