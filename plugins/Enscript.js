const Asena = require('../events');
const {MessageType, Mimetype} = require('cyber-king-web-api');
const Config = require('../config');

Asena.addCommand({pattern: 'btn', fromMe: true, desc: btn}, (async (message, match) => {
			    
			    var BUTTHANDLE = '';
			    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
			        BUTTHANDLE = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
			    } else {
			        BUTTHANDLE = '.';
			    }	
						
				const buttons = [
			        {buttonId: BUTTHANDLE + 'CYBER', buttonText: {displayText: '🌟 BOT FULL COMMAMD 🌟' }, type: 1},
			        {buttonId: BUTTHANDLE + 'alive', buttonText: {displayText: '❣️ Bot Online ❣️' }, type: 1}
			
			    ]
			    const buttonMessage = {
			        image: {url: 'https://telegra.ph/file/96ea4428b3e50a7764d8f.jpg'},    
			        contentText: 'BTNMSG',
			        footerText: 'ᴄᴏᴅᴇᴅ ʙʏ ᴄʏʙᴇʀ ᴅʀᴀxᴏ',
			        buttons: buttons,
			        headerType: 4
			    }
			  await message.client.sendMessage(message.user.jid, buttonMessage ,MessageType.buttonsMessage);  

     });