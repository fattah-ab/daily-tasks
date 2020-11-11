const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const router = require("./routes");
const cors = require('cors')
//Middlewares
// app.set("view engine", "ejs");
app.use(cors())
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(router);


app.listen(PORT, () => {
	console.log(`Server is running at port : ${PORT}`);
});
