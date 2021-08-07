const express = require("express");
const app = express();
const morgan = require("morgan");
const routerHome = require("./routes/home");
const routerBollywood = require("./routes/bollywood");
const routerReactBlog = require("./routes/reactblog");
const PORT = process.env.PORT || 3001;
const cors = require("cors");

//HTTP logger
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/home", routerHome);
app.use("/bollywood", routerBollywood);
app.use("/reactblog", routerReactBlog);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
