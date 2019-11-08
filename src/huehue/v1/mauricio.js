function Mauricio(telegram) {
    this.telegram = telegram
}

Mauricio.prototype.run = function run() {
    console.log('running Mauricio');
}


module.exports = Mauricio