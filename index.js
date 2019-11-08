require('dotenv').config();
const telegram = require('telegram-bot-api');
const botHabitar = require("./src/habitar/v1/bot");
const Mauricio = require("./src/huehue/v1/mauricio");

var api = new telegram({
    token: process.env.API_TELEGRAM_TOKEN
});

const Habitar = new botHabitar(api);
const Hue = new Mauricio(api);

Habitar.run();
Hue.run();