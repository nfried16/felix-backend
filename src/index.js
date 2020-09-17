const express = require("express");
const cors = require("cors")
require("./db/mongoose");
const countRouter = require("./routes/count");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

// // Does express.json replace this middlewear?
// const morgan = require("morgan");
// app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use("/count", countRouter);
// // Is this just not needed?
// const server = http.createServer(app);
// server.listen(port);

// Is this needed for CORS?
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === "OPTIONS") {
//       // inclusive of everything
//       res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//       return res.status(200).json({});
//     }
//     next();
//   });

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

