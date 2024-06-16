const express = require("express");
const login = require("../controller/login");
const signup = require("../controller/signup");
const validateEmail = require("../controller/validateEmail");

const getProducts = require("../controller/product");
const trendingProducts = require("../controller/trendingProducts");
const findProduct = require("../controller/findProduct");

const categoryScreen = require("../controller/categoryScreen");
const giftTrending = require("../controller/giftTrending");
const findGift = require("../controller/findGift");

const sportScreen = require("../controller/sportsScreen");
const trendingSports = require("../controller/trendingSports");
const findSports = require("../controller/findSports");

const travelScreen = require("../controller/travelScreen");
const trendingTravel = require("../controller/trendingTravel");
const findTravel = require("../controller/findTravel");

const searchProducts = require("../controller/searchProducts");
const searchGifts = require("../controller/giftSearch");
const searchSports = require("../controller/sportSearch");
const searchTravel = require("../controller/travelSearch");

const getPhotos = require("../controller/getPhotos");
const getOffers = require("../controller/food_offer"); // Import the getOffers function
const getGiftOffers = require("../controller/giftOffer"); // Import the getGiftOffers function
const getSportOffers = require("../controller/sportsOffer"); // Import the getGiftOffers function
const getTravelOffers = require("../controller/travelOffer"); // Import the getGiftOffers function

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

routes.post('/sportsScreen/:categoryID', sportScreen);
routes.post('/trendingSports', trendingSports);
routes.get('/findSports', findSports);

routes.post('/travelScreen/:categoryID', travelScreen);
routes.post('/trendingTravel', trendingTravel);
routes.get('/findTravel', findTravel);

routes.get('/searchProducts', searchProducts);
routes.get('/searchGifts', searchGifts);
routes.get('/searchSports', searchSports);
routes.get('/searchTravel', searchTravel);

routes.post('/getPhotos', getPhotos);

// Correct usage of getOffers and getGiftOffers
routes.get('/getOffers/:categoryID', getOffers.getOffers); // Assuming getOffers has a method getOffers
routes.get('/giftOffer/:categoryID', getGiftOffers.giftOffer); // Assuming getGiftOffers has a method giftOffer
routes.get('/sportOffer/:categoryID', getSportOffers.sportOffer); // Assuming getGiftOffers has a method giftOffer
routes.get('/travelOffer/:categoryID', getTravelOffers.travelOffer); // Assuming getGiftOffers has a method giftOffer

module.exports = routes;