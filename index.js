import express from "express";
import fs from "fs";
import path from "path";
import url from "url";

const app = express();

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

app.use(express.static("public"));

app.listen(3002);
