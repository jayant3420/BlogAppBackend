const express = require("express");
const app = express();
const morgan = require("morgan");
const routerHome = require("./routes/home");
const routerBollywood = require("./routes/bollywood");
const routerReactBlog = require("./routes/reactblog");
const PORT = process.env.PORT || 3001;
const cors = require("cors");

//HTTP logger
// app.use((req, res, next) => {
//   res.setHeader("Allow-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/home", routerHome);
app.use("/bollywood", routerBollywood);
app.use("/reactblog", routerReactBlog);

app.get("/", (req, res) => {
  res.send("Welcome to BlogApp");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
