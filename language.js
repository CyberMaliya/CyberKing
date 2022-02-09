const Config = require('./config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./language/' + Config.LANG + '.json')) {
    console.log(
        chalk.green.bold('᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ᴋɪɴɢᬐ')
    );

    var json = JSON.parse(fs.readFileSync('./language/' + Config.LANG + '.json'));
} else {
    console.log(
        chalk.red.bold('᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ᴋɪɴɢᬐ')
    );

    var json = JSON.parse(fs.readFileSync('./language/SI.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}
