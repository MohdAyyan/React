import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//get a list of five jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A first joke",
      joke: "Why did the chicken cross the road?",
    },
    {
      id: 2,
      title: "A second joke",
      joke: "What do you call a belt made of watches?",
    },
    {
      id: 3,
      title: "A third joke",
      joke: "What do you call fake spaghetti?",
    },
    {
      id: 4,
      title: "A fourth joke",
      joke: "Why did the tomato turn red?",
    },
    {
      id: 5,
      title:"A fifth joke",
      joke: "What do you call a belt made of watches?",
    },
  ];
  res.send(jokes);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

