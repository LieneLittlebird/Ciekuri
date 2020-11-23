import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";

import saveUser from "./userRegistration.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const filename = new URL(import.meta.url).pathname;
const dirname = path.dirname(filename);

app.get("/index", (req, res) => {
    let pathToHtml = path.join(dirname, "public", "content", "index.html");
    const html = fs.readFileSync(pathToHtml, "utf8");
    res.send(html);
});

app.get("/categories", (req, res) => {
    let pathToHtml = path.join(dirname, "public", "content", "categories.html");
    const html = fs.readFileSync(pathToHtml, "utf8");
    res.send(html);
});

app.get("/products", (req, res) => {
    let pathToHtml = path.join(dirname, "public", "content", "products.html");
    const html = fs.readFileSync(pathToHtml, "utf8");
    res.send(html);
});
app.get("/product2", (req, res) => {
    let pathToHtml = path.join(dirname, "public", "content", "product2.html");
    const html = fs.readFileSync(pathToHtml, "utf8");
    res.send(html);
});
app.get("/buy", (req, res) => {
    let pathToHtml = path.join(dirname, "public", "content", "buy.html");
    const html = fs.readFileSync(pathToHtml, "utf8");
    res.send(html);
});
app.get("/register", (req, res) => {
    let pathToHtml = path.join(dirname, "public", "content", "register.html");
    const html = fs.readFileSync(pathToHtml, "utf8");
    res.send(html);
});

app.get("/registration-successful", (req, res) => {
    let pathToHtml = path.join(
        dirname,
        "public",
        "content",
        "registration-successful.html"
    );
    const html = fs.readFileSync(pathToHtml, "utf8");
    res.send(html);
});

app.get("/newsletter", (req, res) => {
    let pathToHtml = path.join(dirname, "public", "content", "newsletter.html");
    const html = fs.readFileSync(pathToHtml, "utf8");
    res.send(html);
});

app.use(express.static("public"));

app.post("/register", (req, res) => {
    saveUser(req.body);
    let pathToHtml = path.join(
        dirname,
        "public",
        "content",
        "registration-successful.html"
    );
    const html = fs.readFileSync(pathToHtml, "utf8");
    res.send(html);
});

app.listen(3002);
