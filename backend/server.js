require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./config/db");

const hospitalRouter = require("./router/hospitalrouter");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message: "Hospital Management API is running"
    });
});

app.use("/hospitals", hospitalRouter);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
