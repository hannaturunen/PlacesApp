const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.static("../frontend/build"))
server.use(express.json());
server.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   next()
}); 

const placesRouter=require("./routers/places");
server.use("/api/places",placesRouter);

const usersRouter=require("./routers/users");
server.use("/api/users",usersRouter);

const loginRouter=require("./routers/login");
server.use("/api/login",loginRouter);

const yaml=require("yamljs"); 
const doc=yaml.load("./doc.yml");
const swaggerUi=require("swagger-ui-express");
server.use("/api/doc",swaggerUi.serve,swaggerUi.setup(doc));

module.exports = server
