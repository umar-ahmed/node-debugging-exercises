const express = require("express");
const axios = require("axios");

const app = express();

const cardsUrl =
  "https://gist.githubusercontent.com/umar-ahmed/ae5c29f9a759a8877d14b700dc5c8f52/raw/26ff18f92b6dbcf417a1be1524fe847299c18dcd/cards.json";

app.get("/cards", (req, res) => {
  axios.get(cardsUrl).then(({ data }) => {
    console.log(data);
    res.status(200).json(data);
  });
});

app.get("/cards/:id", (req, res) => {
  const id = req.params.id;
  axios.get(cardsUrl).then(({ data }) => {
    for (const item of data) {
      if (item.id === id) {
        res.status(200).json(item);
      }
    }
  });
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
