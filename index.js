import express from "express";
import http from 'http';
import querystring from 'querystring';
import fs from "fs";
import path from "path";
import url from "url";
import handleUserRegistration from './userRegistration.js'

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

app.get("/registration-successful", (req, res) => {
    let pathToHtml = path.join(dirname, "public", "content", "registration-successful.html");
    const html = fs.readFileSync(pathToHtml, "utf8");
    res.send(html);
});

app.use(express.static("public"));

app.listen(3002);

const server = http.createServer((req, res) =>{
const pageUrl = url.parse(req.url);

    switch (pageUrl.pathname) {
        case '/registration-successful':
            renderView('registration-successful.html', '', dirname, res);
            break;
        case '/register':
            if (req.method === 'POST') {
                handleUserRegistration(req, res, () => {
                    renderView('register.html', dirname, res);
                });
            } else {
                renderView('register.html', '', dirname, res);
            }
            break;
    }
})