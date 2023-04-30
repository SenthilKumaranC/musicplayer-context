const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())
app.get("/playlist", (req, res) => {
  console.log("api called");
  res.send([
    {
      id: 100,
      songTitle: "hey",
      coverPhoto: "hey.jpg",
      songPath: "hey.mp3",
    },
    {
      id: 200,
      songTitle: "summer",
      coverPhoto: "summer.jpg",
      songPath: "summer.mp3",
    },
    {
      id: 300,
      songTitle: "ukulele",
      coverPhoto: "ukulele.jpg",
      songPath: "ukulele.mp3",
    },
  ]);
});

app.listen(4444, () => {
  console.log("server started");
});
