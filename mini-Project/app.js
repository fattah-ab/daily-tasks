const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const router = require("./routes");

//Middlewares
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(router);


app.listen(PORT, () => {
	console.log(`Server is running at port : ${PORT}`);
});
