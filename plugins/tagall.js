/* Copyright (C) 2022 NICO

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

var _0x1643da=_0x1d26;(function(_0xfcf14f,_0x312da2){var _0x16ab76=_0x1d26,_0x2d12aa=_0xfcf14f();while(!![]){try{var _0x11bd15=parseInt(_0x16ab76(0x120))/0x1*(parseInt(_0x16ab76(0x130))/0x2)+-parseInt(_0x16ab76(0x13c))/0x3*(-parseInt(_0x16ab76(0x121))/0x4)+parseInt(_0x16ab76(0x12d))/0x5+parseInt(_0x16ab76(0x13d))/0x6*(-parseInt(_0x16ab76(0x127))/0x7)+-parseInt(_0x16ab76(0x129))/0x8+-parseInt(_0x16ab76(0x11f))/0x9+-parseInt(_0x16ab76(0x11e))/0xa*(-parseInt(_0x16ab76(0x132))/0xb);if(_0x11bd15===_0x312da2)break;else _0x2d12aa['push'](_0x2d12aa['shift']());}catch(_0xdbf5ab){_0x2d12aa['push'](_0x2d12aa['shift']());}}}(_0x301c,0x62b4d));function _0x1d26(_0x5cbf7f,_0x10a34f){var _0x301c8f=_0x301c();return _0x1d26=function(_0x1d262e,_0x356997){_0x1d262e=_0x1d262e-0x11e;var _0x2def69=_0x301c8f[_0x1d262e];return _0x2def69;},_0x1d26(_0x5cbf7f,_0x10a34f);}const Asena=require(_0x1643da(0x123)),{MessageType}=require('cyber-king-web-api'),Config=require(_0x1643da(0x12e)),Language=require(_0x1643da(0x12f)),Lang=Language[_0x1643da(0x136)](_0x1643da(0x125)),SLang=Language['getString'](_0x1643da(0x13a));async function checkImAdmin(_0x8c0b7f,_0x2bd805=_0x8c0b7f[_0x1643da(0x133)][_0x1643da(0x12b)][_0x1643da(0x137)]){var _0x2e0c0c=_0x1643da,_0x5f0297=await _0x8c0b7f[_0x2e0c0c(0x133)][_0x2e0c0c(0x143)](_0x8c0b7f['jid']),_0x5a8ed1=_0x5f0297[_0x2e0c0c(0x12a)]['map'](_0x51ca85=>{var _0xbe135c=_0x2e0c0c;if(_0x51ca85['jid'][_0xbe135c(0x140)]('@')[0x0]===_0x2bd805['split']('@')[0x0]&&_0x51ca85[_0xbe135c(0x12c)])return!![];else;return![];});return _0x5a8ed1[_0x2e0c0c(0x122)](!![]);}Asena['addCommand']({'pattern':_0x1643da(0x13e),'fromMe':!![],'desc':Lang[_0x1643da(0x134)]},async(_0xe87abc,_0x2f4ace)=>{var _0x535388=_0x1643da,_0x472bd7=await checkImAdmin(_0xe87abc);if(!_0x472bd7)return await _0xe87abc[_0x535388(0x133)][_0x535388(0x138)](_0xe87abc['jid'],Lang['ADMİN'],MessageType[_0x535388(0x13b)]);if(!_0xe87abc[_0x535388(0x13f)]){if(_0x2f4ace[0x1]!==''){grup=await _0xe87abc[_0x535388(0x133)][_0x535388(0x143)](_0xe87abc[_0x535388(0x137)]);var _0x373b40=[];mesaj='',grup[_0x535388(0x12a)]['map'](async _0x157915=>{var _0x4a3d50=_0x535388;mesaj+='@'+_0x157915['id'][_0x4a3d50(0x140)]('@')[0x0]+'\x20',_0x373b40[_0x4a3d50(0x144)](_0x157915['id'][_0x4a3d50(0x142)](_0x4a3d50(0x128),_0x4a3d50(0x126)));}),await _0xe87abc[_0x535388(0x133)][_0x535388(0x138)](_0xe87abc[_0x535388(0x137)],''+_0x2f4ace[0x1],MessageType['extendedText'],{'contextInfo':{'mentionedJid':_0x373b40},'previewType':0x0});}else{if(_0x2f4ace[0x1]==''){grup=await _0xe87abc[_0x535388(0x133)]['groupMetadata'](_0xe87abc[_0x535388(0x137)]);var _0x373b40=[];mesaj='',grup[_0x535388(0x12a)][_0x535388(0x139)](async _0xaf2647=>{var _0xf093e3=_0x535388;mesaj+='▫️\x20@'+_0xaf2647['id'][_0xf093e3(0x140)]('@')[0x0]+'\x0a',_0x373b40[_0xf093e3(0x144)](_0xaf2647['id']['replace']('c.us',_0xf093e3(0x126)));}),await _0xe87abc['client']['sendMessage'](_0xe87abc[_0x535388(0x137)],mesaj,MessageType['extendedText'],{'contextInfo':{'mentionedJid':_0x373b40},'previewType':0x0});}}}else{if(_0xe87abc[_0x535388(0x13f)]){grup=await _0xe87abc[_0x535388(0x133)]['groupMetadata'](_0xe87abc['jid']);var _0x373b40=[];mesaj='',grup[_0x535388(0x12a)][_0x535388(0x139)](async _0x4570b0=>{var _0x4382d9=_0x535388;mesaj+='@'+_0x4570b0['id'][_0x4382d9(0x140)]('@')[0x0]+'\x20',_0x373b40[_0x4382d9(0x144)](_0x4570b0['id'][_0x4382d9(0x142)](_0x4382d9(0x128),_0x4382d9(0x126)));});var _0x57bfe3=_0xe87abc[_0x535388(0x13f)][_0x535388(0x13b)];await _0xe87abc[_0x535388(0x133)][_0x535388(0x138)](_0xe87abc[_0x535388(0x137)],_0x57bfe3,MessageType[_0x535388(0x141)],{'contextInfo':{'mentionedJid':_0x373b40},'previewType':0x0});}}});var stag_dsc='';if(Config[_0x1643da(0x135)]=='SI')stag_dsc=_0x1643da(0x124);if(Config[_0x1643da(0x135)]=='EN')stag_dsc=_0x1643da(0x124);Asena['addCommand']({'pattern':_0x1643da(0x145),'fromMe':!![],'desc':stag_dsc},async(_0x4c38f8,_0x2dd60d)=>{var _0xc4b01c=_0x1643da;if(!_0x4c38f8[_0xc4b01c(0x13f)])return await _0x4c38f8[_0xc4b01c(0x133)][_0xc4b01c(0x138)](_0x4c38f8['jid'],SLang[_0xc4b01c(0x131)],MessageType[_0xc4b01c(0x13b)]);grup=await _0x4c38f8[_0xc4b01c(0x133)][_0xc4b01c(0x143)](_0x4c38f8[_0xc4b01c(0x137)]);var _0x3d68b3=[];mesaj='',grup['participants']['map'](async _0x42a00a=>{var _0x3ddf45=_0xc4b01c;await _0x4c38f8['client']['sendMessage'](_0x42a00a[_0x3ddf45(0x137)],_0x4c38f8[_0x3ddf45(0x13f)][_0x3ddf45(0x13b)],MessageType[_0x3ddf45(0x13b)]);});});function _0x301c(){var _0x5347af=['stam$','10RFMhEj','7194195QNPsAI','90901JRdRmg','12236vcXdGh','includes','../events','කණ්ඩායමේ\x20සියලුම\x20සාමාජිකයින්ට\x20මෙන්ශන්\x20දුන්\x20පණිවිඩය\x20යවයි.','tagall','s.whatsapp.net','105OcdZdG','c.us','6251432ZFnLvT','participants','user','isAdmin','785045YRMYOs','../config','../language','4kgzpEV','NEED_REPLY','16383004TTBVTZ','client','TAGALL_DESC','LANG','getString','jid','sendMessage','map','scrapers','text','780eYruBW','255372hIwvfN','tagall\x20?(.*)','reply_message','split','extendedText','replace','groupMetadata','push'];_0x301c=function(){return _0x5347af;};return _0x301c();}
