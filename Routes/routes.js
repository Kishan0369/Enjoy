const express = require("express");
const login = require("../controller/login");
const signup = require("../controller/signup");
const validateEmail = require("../controller/validateEmail");


const getProducts=require("../controller/product");
const trendingProducts=require("../controller/trendingProducts");
const findProduct=require("../controller/findProduct");

const categoryScreen=require("../controller/categoryScreen");
const giftTrending = require("../controller/giftTrending");
const findGift=require("../controller/findGift");

const sportScreen = require("../controller/sportsScreen");
const trendingSports = require("../controller/trendingSports");
const findSports=require("../controller/findSports");

const travelScreen = require("../controller/travelScreen");
const trendingTravel = require("../controller/trendingTravel");
const findTravel=require("../controller/findTravel");

const searchProducts=require("../controller/searchProducts");

let routes = express.Router();

routes.route("/").get((req, res) => {
    res.status(200).json({ message: "Welcome to Enjoy", code: 200, body: req.body });
});

routes.route("/login").post(login);
routes.route("/signup").post(signup);
routes.route("/validateEmail").post(validateEmail);
routes.post('/FoodScreen/:categoryID', getProducts);
routes.post('/trendingProducts', trendingProducts);
routes.get('/findProduct', findProduct);
routes.get('/categoryScreen/:categoryID', categoryScreen);
routes.post('/giftTrending', giftTrending);
routes.get('/findGift', findGift);
routes.post('/sportsScreen/:categoryID',sportScreen);
routes.post('/trendingSports', trendingSports);
routes.get('/findSports', findSports);
routes.post('/travelScreen/:categoryID',travelScreen);
routes.post('/trendingTravel', trendingTravel);
routes.get('/findTravel', findTravel);
routes.get('/searchProducts',searchProducts);




module.exports = routes;
