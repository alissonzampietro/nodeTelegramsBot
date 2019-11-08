const req = require('request')
const jsdom = require('jsdom')
const {JSDOM} = jsdom;

function Bot(telegram) {
    this.telegram = telegram;
}

Bot.prototype.run = function run() {
    console.log('Your API Telegram Token: '+process.env.API_TELEGRAM_TOKEN)

    const url = process.env.URL_SERVICE;

    console.log(url)

    setInterval(() => {
        req(url, (err, res, body) => {
            dom = new JSDOM(body)
            console.log(dom);
            if(dom.window.document.getElementsByClassName('noresults').length == 0) {
                this.telegram.sendMessage({
                    chat_id:'@habitarlisb',
                    text: '<b> HÁ VAGAS</b> \n\n <a href="'+url+'" target="blank">'+url+'</a>',
                    parse_mode: 'html'
                })
            }
        })
    }, 300000);
}


module.exports = Bot;