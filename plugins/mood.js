/*
░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝
░█████╗░███╗░░░███╗██████╗░██╗
██╔══██╗████╗░████║██╔══██╗██║
███████║██╔████╔██║██║░░██║██║
██╔══██║██║╚██╔╝██║██║░░██║██║ █▀█ █▀▀█ █▀█ ▄█─ 
██║░░██║██║░╚═╝░██║██████╔╝██║ ─▄▀ █▄▀█ ─▄▀ ─█─ 
╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═════╝░╚═╝ █▄▄ █▄▄█ █▄▄ ▄█▄
🅴🆇🆃🅴🆁🅽🅰🅻 🅿🅻🆄🅶🅸🅽🆂
Copyright (C) 2021 Black Amda.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const QueenAmdi = require('queenamdi-public');
const Amdi = QueenAmdi.events
const Build = QueenAmdi.build
const { MessageType } = require('@blackamda/queenamdi-web-api');


const DESC_SI = "ඔබ ප්‍රතිචාර දක්වන කෙනෙකුගේ mood එක මොනවාදැයි සොයා ගනී."
const DESC_EN = "Find out what the mood of the person you are responding to is."

const PROC_SI = " *😁 මම මෙම පරිශීලකයාගේ mood එක සොයමි...* "
const PROC_EN = " *😁 I am Searching This User’s Mood...* "

let LAN_DES = Build.LANG == 'EN' ? DESC_EN : DESC_SI
let LAN_PROC = Build.LANG == 'EN' ? PROC_EN : PROC_SI

//----Plugin Begin----
if (Build.LANG === 'SI') {
    Amdi.operate({pattern: 'mood ?(.*)', fromMe: true, desc: LAN_DES }, (async (message, match) => {
        function _0x3865(_0x3943cd,_0x589bfe){var _0x4179fa=_0x4179();return _0x3865=function(_0x38658b,_0x49ff71){_0x38658b=_0x38658b-0x1ca;var _0x566b74=_0x4179fa[_0x38658b];return _0x566b74;},_0x3865(_0x3943cd,_0x589bfe);}(function(_0x22322f,_0x174ac6){function _0x4d49b0(_0x28f530,_0x5f46c9){return _0x3865(_0x28f530- -0x184,_0x5f46c9);}function _0x31d1e4(_0x4d4c03,_0x10d184){return _0x3865(_0x10d184-0x34b,_0x4d4c03);}var _0x30d1e7=_0x22322f();while(!![]){try{var _0x41c24c=parseInt(_0x31d1e4(0x4ed,0x518))/0x1+-parseInt(_0x4d49b0(0x75,0x67))/0x2+parseInt(_0x4d49b0(0x61,0x4b))/0x3*(parseInt(_0x31d1e4(0x542,0x529))/0x4)+-parseInt(_0x31d1e4(0x552,0x51d))/0x5+parseInt(_0x31d1e4(0x565,0x53b))/0x6+parseInt(_0x31d1e4(0x533,0x559))/0x7*(-parseInt(_0x31d1e4(0x57f,0x597))/0x8)+parseInt(_0x31d1e4(0x568,0x537))/0x9*(parseInt(_0x31d1e4(0x553,0x52d))/0xa);if(_0x41c24c===_0x174ac6)break;else _0x30d1e7['push'](_0x30d1e7['shift']());}catch(_0x584ce9){_0x30d1e7['push'](_0x30d1e7['shift']());}}}(_0x4179,0x57a82),await QueenAmdi[_0x4f802b(0x26,-0xa)](),await message[_0x4f802b(0x41,0x4)]['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message['\x6a\x69\x64'],'\x40'+message[_0x28b6aa(0x2dc,0x315)+_0x4f802b(0x3d,0x6d)]['\x6a\x69\x64'][_0x4f802b(0x6a,0x63)]('\x40')[0x0]+LAN_PROC,MessageType[_0x4f802b(0x10,0x2e)],{'\x71\x75\x6f\x74\x65\x64\x4d\x65\x73\x73\x61\x67\x65':message[_0x28b6aa(0x2dc,0x2a5)+_0x28b6aa(0x2e5,0x2f1)][_0x4f802b(0x33,0x2d)],'\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f':{'\x6d\x65\x6e\x74\x69\x6f\x6e\x65\x64\x4a\x69\x64':[message[_0x4f802b(0x34,0x32)+_0x28b6aa(0x2e5,0x31d)][_0x28b6aa(0x2eb,0x2cb)][_0x28b6aa(0x2fe,0x32f)]('\x63\x2e\x75\x73','\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70'+_0x4f802b(0x23,0x3d))]}}),await new Promise(_0x4611c2=>setTimeout(_0x4611c2,0xfa0)));var r_text=new Array();r_text[0x0]=_0x4f802b(0x6c,0x50)+_0x28b6aa(0x319,0x2f3)+_0x28b6aa(0x323,0x2ec)+_0x4f802b(0x18,0x3)+_0x4f802b(0x13,0x29),r_text[0x1]=_0x28b6aa(0x301,0x2f6)+'\u0dba\u0dd6\x20\u0db4\u0dab\u0dd2\u0dc0\u0dd2\u0da9\x20'+_0x28b6aa(0x2c2,0x2e3)+_0x28b6aa(0x2e3,0x304)+_0x28b6aa(0x2c5,0x28d),r_text[0x2]=_0x28b6aa(0x326,0x358)+_0x28b6aa(0x318,0x31d)+'\u0da9\x20\u0dc3\u0ddc\u0dba\u0db8\u0dd2\x2e\x2e\x2a'+'\x20',r_text[0x3]=_0x28b6aa(0x2dd,0x315)+_0x28b6aa(0x306,0x32b)+_0x28b6aa(0x2ea,0x31a)+_0x4f802b(0x12,-0x17)+'\u0dc4\x20\u0d9a\u0dbb\u0db8\u0dd2\x2e\x2e\x2a\x20',r_text[0x4]='\x20\x2a\u0db8\u0db8\x20\u0d8b\u0dad\u0dca\u0dc3\u0dcf'+_0x28b6aa(0x2fc,0x2c8)+_0x4f802b(0x65,0x6c)+_0x4f802b(0x42,0xb)+_0x4f802b(0x55,0x88);var i=Math[_0x28b6aa(0x300,0x334)](0x5*Math[_0x28b6aa(0x329,0x327)]());await message[_0x28b6aa(0x309,0x32f)+'\x65'](''+r_text[i]),await new Promise(_0x3ec237=>setTimeout(_0x3ec237,0xe74));var r_text=new Array();r_text[0x0]='\x20\x2a\x57\x6f\x77\x2c\x20\u0db8\u0db8\x20'+_0x28b6aa(0x2ed,0x2e9)+_0x4f802b(0x6e,0x30)+_0x28b6aa(0x328,0x32f),r_text[0x1]='\x20\x2a\x57\x68\x6f\x61\x2c\x20\u0d94\u0db6'+_0x28b6aa(0x2b4,0x2aa)+_0x4f802b(0x7f,0x4b)+_0x4f802b(0x50,0x37)+_0x4f802b(0x11,0x26),r_text[0x2]=_0x4f802b(0x48,0xe)+_0x4f802b(0x8,0x42)+_0x28b6aa(0x2ef,0x2da),r_text[0x3]='\x20\x2a\u0db8\u0db8\x20\u0d85\u0db8\u0dd4\u0dad\u0dd4'+_0x28b6aa(0x2f9,0x2e5)+'\u0db8\u0dd2\x2a\x20\ud83d\ude33',r_text[0x4]=_0x28b6aa(0x303,0x2ca)+'\x20\u0db8\u0d9c\u0dda\x20\u0d87\u0dc3\u0dca\x20\u0d85'+_0x4f802b(0x83,0x59)+_0x4f802b(0x5f,0x6c),r_text[0x5]='\x20\x2a\u0db8\u0dd9\u0db8\x20\u0db4\u0dab\u0dd2\u0dc0'+'\u0dd2\u0da9\x20\u0db8\u0ddc\u0db1\u0dc0\u0dcf\u0daf\x3f'+_0x28b6aa(0x30f,0x2f0),r_text[0x6]=_0x4f802b(0x28,-0x13)+_0x4f802b(0x3e,0x1d);function _0x4179(){var _0x1f640c=['\u0ddb\u0db1\u0dd2\u0d9a\x20\u0db4\u0dab\u0dd2\u0dc0\u0dd2','\u0dad\u0dd2\u0db1\u0dca\x20\u0dbd\u0dd0\u0db6\u0dd4\u0db1','\u0db1\u0dd3\u0db8\u0da7\x20\u0d85\u0dc0\u0dc1\u0dca\u0dba','\u2728\x20\x2a\u0db4\u0dbb\u0dd2\u0db4\u0dd6\u0dbb\u0dca','\u0dc0\u0dc3\u0db1\u0dca\x2e\x2a\x20','\u0db1\u0dd0\u0dad\x2a\x20\ud83d\ude36','\u0dca\u0dc3\u0dcf\u0dc4\x20\u0d9a\u0dbb\u0db1\u0dc0\u0dcf','\x2e\x2a\x20','\u0dd4\x20\u0daf\u0dd0\u0db1\u0d9c\u0dad\u0dca\u0dad\u0dcf','\u0dd0\u0db1\u0dca\x2c\x20','\x20\u0dc4\u0dd0\u0d9a\u0dd2\u0dba\x2a\x20','\u0dd4\x20\u0db4\u0dd0\u0dbb\u0dab\u0dd2\x20\u0db4\u0dab','\u0d9f\u0dd3\u0db8\u0dca\x20\u0db4\u0dcf\u0dbd\u0db1\u0dba','\u0d91\u0db4\u0dcf\x20\u0dc0\u0dd9\u0dbd\u0dcf\x2a\x20','\x20\x2a\u0db8\u0db8\x20\u0d94\u0db6\u0dda\x20\u0daf','\u0dd2\x20\u0db4\u0dab\u0dd2\u0dc0\u0dd2\u0da9\x20\u0daf','\u0dcf\x2a\x20\ud83e\udd2d\x20','\x72\x61\x6e\x64\x6f\x6d','\x20\ud83d\ude1e','\u0daf\u0dc4\u0dcf\u0d9c\u0db1\u0dca\u0db1\x20\u0db6\u0dd1','\ud83e\udd2c\x20\x2a\u0dc4\u0dbb\u0dd2\u0db8\x20\u0dad\u0dbb','\u0db1\u0dc3\u0dda\x20\u0db6\u0dbd\u0dba\x20\u0db7\u0dcf','\u0dba\u0dd2\x2a\x20\ud83d\ude34','\x20\ud83d\ude0e','\ud83e\udd14\x20\x2a\u0db8\u0dd2\u0db1\u0dd2\u0dc3\u0dd4\u0db1','\x35\x35\x32\x76\x70\x45\x44\x44\x6f','\u0dbb\u0dd0\u0dc3\u0dca\x20\u0d9a\u0dc5\u0dcf\x2e\x2a','\x20\u0d87\u0dad\u0dd2\x20\u0daf\u0dda\x20\u0db6\u0dbd','\x20\u0dc0\u0dd9\u0dbd\u0dd9\u0db1\u0dc0\u0dcf\x2a\x20','\x31\x39\x37\x32\x31\x30\x41\x79\x49\x42\x42\x59','\u0dd2\u0dbb\u0dd3\u0db8\u0dca\x20\u0dc0\u0dbd\u0da7\x20','\x20\u0d94\u0db6\u0d9c\u0dda\x20\u0db4\u0dd0\u0dbb\u0dab','\u2709\ufe0f\x20\x2a\u0dc0\u0dd2\u0dc1\u0dda\u0dc2\x20\u0d9a','\u0db6\x20\u0d9c\u0dd0\u0db1\x20\u0d85\u0daf\u0dc4\u0dc3','\x32\x36\x35\x32\x31\x38\x35\x4d\x4e\x72\x54\x5a\x59','\x74\x65\x78\x74','\ud83d\ude2f\x20','\u0db1\u0dd3\u0db8\u0da7\x20\u0d8b\u0dad\u0dca\u0dc3\u0dcf','\u0dbd\u0db8\u0dd2\x2e\x2e\x2a\x20','\u0dab\x20\u0db6\u0dc0\u0d9a\u0dca\x20\u0daf\u0dd0\u0db1','\ud83d\udeac\x20\x2a\u0da2\u0dd3\u0dc0\u0dd2\u0dad\u0dba\x20','\u0db6\u0dd4\u0dab\u0dcf\x2e\x20\x52\x65\x73\x75','\u0dd9\u0db1\u0dca\x20\u0db6\u0dd0\u0daf\u0dd2\u0dbd\u0dcf','\u0dd2\u0dc0\u0dd2\u0da9\x20\u0daf\u0dd9\u0dc3\x20\u0db6','\ud83d\ude0d\x20\x2a\u0d86\u0daf\u0dbb\u0dba\u0dd9\u0db1\u0dca','\u0dad\u0dda\u0dbb\u0dd4\u0db8\u0dca\x20\u0d9c\u0dd0\u0db1','\x31\x31\x31\x33\x34\x34\x30\x44\x51\x64\x52\x70\x4a','\x20\u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0da7\x20\u0d8b\u0dad','\x20\u0d9a\u0dbb\u0db8\u0dd2\x2e\x2e\x2a\x20','\u0dca\x20\u0dad\u0dda\u0dbb\u0dd4\u0db8\u0dca\x20\u0d9c','\x31\x33\x33\x32\x39\x34\x38\x30\x72\x64\x6a\x6e\x6a\x51','\u0dd3\u0db8\x2e\x2a\x20\ud83d\udd79\ufe0f','\u0db4\u0dab\u0dd2\u0dc0\u0dd2\u0da9\u0dba\u0d9a\u0dca\x20','\x33\x6e\x56\x52\x64\x4d\x41','\x2e\x6e\x65\x74','\ud83d\ude11\x20\x2a\u0d9a\u0dd2\u0dc3\u0dd2\u0dc0\u0d9a\u0dca','\u0dad\u0ddc\u0dbb\u0dad\u0dd4\u0dbb\u0dd4\x20\u0dbd\u0dd0','\x61\x6d\x64\x69\x5f\x73\x65\x74\x75\x70','\u0dc0\u0dd2\u0dad\u0dcf\x20\u0d9a\u0dbb\u0db8\u0dd2\x2a','\x20\x2a\u0dc4\u0dbb\u0dd2\x20\u0d85\u0db8\u0dd4\u0dad','\x39\x77\x62\x71\x48\x61\x41','\u0dda\x2a\x20\ud83d\udcaf','\ud83d\udc9e\x20\x2a\u0d94\u0db6\u0dda\x20\u0dc3\u0dd2\u0dc4','\x20\u0dc3\u0dad\u0dd4\u0da7\u0dd2\u0db1\u0dca\x2a\x20','\x37\x38\x31\x36\x37\x34\x48\x58\x50\x6a\x79\x4a','\u0dd0\u0db1\u0dd3\u0db8\u0da7\x20\u0d8b\u0dad\u0dca\u0dc3','\x6c\x74\x20\u0d91\u0d9a\x20\u0daf\u0dd0\u0d9a\u0dd3','\x20\ud83d\ude35\x20\x2a\u0d94\u0db6\u0dda\x20\u0dc4\u0dd0','\u0d91\u0dc4\u0dd2\x20\x72\x65\x73\x75\x6c\x74','\u0db1\u0dca\x20\u0d91\u0d9a\u0d9a\u0dca\x20\u0db8\u0dd9','\x64\x61\x74\x61','\x72\x65\x70\x6c\x79\x5f\x6d\x65\x73\x73','\x20\x2a\u0db8\u0db8\x20\u0d94\u0db6\x20\u0d91\u0dc0','\x31\x31\x34\x32\x38\x34\x38\x72\x70\x6c\x4d\x65\x5a','\u0db4\u0dad\u0dca\u0dc0\x20\u0d87\u0dad\x2a\x20\ud83d\ude29','\ud83d\udde8\ufe0f','\u0dca\u0db1\x2a\x20\u26b0\ufe0f','\ud83c\udff3\ufe0f','\u0dd3\u0db8\u0da7\x20\u0d8b\u0dad\u0dca\u0dc3\u0dcf\u0dc4','\x20\x2a\u0db8\u0da7\x20\u0d85\u0dc0\u0dc1\u0dca\u200d\u0dba\x20','\x61\x67\x65','\u0dd4\u0dba\u0dd2\x2a\x20\ud83e\udd14','\x2a\x20\ud83d\ude2c','\u0db8\u0da7\x20\u0d9a\u0dcf\u0dbd\u0dba\u0dba\u0dd2\x2e','\x63\x6c\x69\x65\x6e\x74','\x20\u0dad\u0dda\u0dbb\u0dd4\u0db8\u0dca\x20\u0d9c\u0dd0','\x6a\x69\x64','\x20\x2a\u0db8\u0db8\x20\u0db8\u0d9c\u0dda\x20\u0db8','\u0d85\u0db8\u0dd4\u0dad\u0dd4\x20\u0daf\u0dd9\u0dba\u0d9a','\u0db1\u0dba\x20\u0d9a\u0dd2\u0dbb\u0dd3\u0db8\x20\u0d85','\u0db8\u0dd4\x2a\x20\ud83d\ude1d\x20','\x20\x2a\u0d85\u0db4\u0da7\x20\u0dbd\u0dd0\u0db6\u0dd3','\u0dcf\u0dc4\x20\u0d9a\u0dbb\u0db1\u0dc0\u0dcf\x2a\x20','\u0db1\u0dd9\u0db1\u0dca\x20\u0db4\u0dd9\u0dc5\u0dd9\u0db1','\x34\x38\x34\x38\x32\x7a\x72\x51\x61\x6e\x64','\ud83d\ude2a\x20\x2a\u0dc0\u0dd9\u0dc4\u0dd9\u0dc3\u0da7\x20','\ud83d\ude22\x20\x2a\u0daf\u0dd4\u0d9a\u0dd2\u0db1\u0dca\x2a','\x20\x2a\x42\x69\x70\x20\x42\x6f\x70\x2e','\x20\ud83e\udd17','\u0dd9\u0dc3\x20\u0db6\u0dbd\u0db1\u0dca\u0db1\x2a\x20','\x20\u0daf\u0dda\u0dc0\u0dbd\u0dca\x20\u0daf\u0d9a\u0dd2','\x20\ud83d\udcfd\ufe0f','\u0db1\u0dca\x20\u0dc0\u0dd0\u0da7\u0dd3\u0db8\x2a\x20','\u0dc4\x20\u0d9a\u0dbb\u0db1\u0dca\u0db1\u0dda\x20\u0d94','\u0db1\u0dd3\u0db8\u0da7\u0dba\u0dd2\x2e\x2e\x2a\x20','\x72\x65\x70\x6c\x61\x63\x65','\x20\u0d85\u0db1\u0dd4\u0db8\u0dcf\u0db1\x20\u0d9a\u0dc5','\x66\x6c\x6f\x6f\x72','\x20\x2a\u0db8\u0db8\x20\u0d94\u0db6\x20\u0dbd\u0dd2','\x20\u0d9a\u0dbb\u0db1\u0dc0\u0dcf\x2a\x20\u263a\ufe0f','\x20\x2a\u0daf\u0dd9\u0dba\u0dd2\u0dba\u0db1\u0dda\x21','\u0dba\u0dd9\u0db1\u0dca\x2c\x20\u0db8\u0da7\x20\u0d94','\u0db6\u0dbd\u0dcf\u0db4\u0ddc\u0dbb\u0ddc\u0dad\u0dca\u0dad','\u0db1\x20\u0dbd\u0daf\x20\u0d89\u0db8\u0ddd\u0da2\u0dd2','\x2e\x2a\x20\ud83d\ude31','\x20\x2a\u0db8\u0db8\x20\u0d94\u0db6\x20\u0d9c\u0dd0','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\ud83d\udc94\x20\x2a\u0db6\u0dd2\u0db3\u0dd4\u0dab\u0dd4\x20','\ud83d\ude0c\x20\x2a\u0dc3\u0dad\u0dd4\u0da7\u0dd4\x20\u0dc0','\x2e\x2a\x20\ud83e\udd16','\u0db6\u0dda\x20\x6d\x6f\x6f\x64\x20\u0d91\u0d9a','\u0dd9\u0dbd\u0dca\u0dbd\u0db8\u0dca\x20\u0d9a\u0dd2\u0dbb','\x3f\x2a\x20\ud83e\udd2f','\u0db1\x20\u0dad\u0ddc\u0dbb\u0dad\u0dd4\u0dbb\u0dd4\x20','\ud83d\uddd1\ufe0f\x20\x2a\u0dc4\u0dd2\u0dc3\u0dca\x20\u0d9a\u0dd1','\x73\x70\x6c\x69\x74','\x20\ud83e\udd2a','\x20\x2a\u0db8\u0db8\x20\u0d94\u0db6\x20\u0dc0\u0dd9','\ud83e\udd71\x20\x2a\u0db1\u0dd2\u0daf\u0dcf\x20\u0d9c\u0dd0','\u0dca\x20\u0dc3\u0ddc\u0dba\u0dcf\u0d9c\u0dad\u0dca\u0dad','\u0d9a\u0dca\x20\u0dbd\u0dd0\u0db6\u0dd4\u0dab\u0dd2\x2a'];_0x4179=function(){return _0x1f640c;};return _0x4179();}var i=Math[_0x4f802b(0x58,0x27)](0x7*Math[_0x28b6aa(0x329,0x2f9)]());await message['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](''+r_text[i]),await new Promise(_0x37154e=>setTimeout(_0x37154e,0x7d0));var r_text=new Array();r_text[0x0]=_0x4f802b(0x60,0x82)+_0x28b6aa(0x310,0x32e)+_0x4f802b(0x7,0xa)+'\x20\u2705',r_text[0x1]=_0x28b6aa(0x2e4,0x2dc)+_0x4f802b(0x25,-0xc)+_0x28b6aa(0x2be,0x2b6)+_0x28b6aa(0x2d7,0x2a5)+_0x28b6aa(0x2e8,0x2e4)+_0x4f802b(0x77,0x92),r_text[0x2]=_0x28b6aa(0x2ec,0x2e0)+_0x4f802b(0x85,0x71)+_0x4f802b(0x27,0x2d)+_0x4f802b(0x87,0x8d),r_text[0x3]='\x20\x2a\u0db8\u0da7\x20\u0daf\u0dd0\u0db1\u0dca\x20'+_0x28b6aa(0x2d9,0x2ee)+_0x28b6aa(0x2ff,0x301)+_0x28b6aa(0x322,0x311),r_text[0x4]=_0x4f802b(0x4e,0x51)+'\x20\u0db8\u0db8\x20\u0dad\u0ddc\u0dbb\u0dad\u0dd4\u0dbb'+_0x28b6aa(0x320,0x2de)+_0x28b6aa(0x30c,0x30b),r_text[0x5]='\x20\x2a\x42\x6f\x73\x73\x2c\x20\u0d9c\u0dab'+_0x28b6aa(0x2ee,0x2e3)+_0x4f802b(0x74,0x61),r_text[0x6]='\x20\x2a\u0d85\u0dc0\u0dc3\u0dcf\u0db1\x20\u0dc0\u0dc1'+_0x28b6aa(0x304,0x2e3)+_0x28b6aa(0x2b6,0x279)+_0x28b6aa(0x317,0x2de)+'\x20';var i=Math[_0x4f802b(0x58,0x6d)](0x7*Math['\x72\x61\x6e\x64\x6f\x6d']());await message['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](''+r_text[i]),await new Promise(_0x47f8d4=>setTimeout(_0x47f8d4,0x834));var r_text=new Array();r_text[0x0]='\ud83e\udd29\x20\x2a\u0d94\u0db6\x20\u0daf\u0dd0\u0db1\u0dca'+_0x4f802b(0x2c,0x31)+'\ud83d\ude0e',r_text[0x1]=_0x28b6aa(0x30b,0x349)+_0x4f802b(0x3b,0x5d)+_0x28b6aa(0x302,0x2fc),r_text[0x2]=_0x28b6aa(0x31b,0x342)+_0x4f802b(0x14,-0x27)+_0x28b6aa(0x2d2,0x303),r_text[0x3]=_0x28b6aa(0x30a,0x33b)+'\u0dc4\u0daf\u0dc0\u0dad\u0d9a\u0dca\x20\u0d87\u0dad\u0dd2'+'\x20\u0d85\u0dba\u0dd9\u0d9a\u0dca\x2a\x20\ud83d\ude23',r_text[0x4]=_0x4f802b(0x24,-0xc)+'\x20\u0daf\u0dd0\u0db1\u0dd9\u0db1\u0dca\u0db1\u0dda\x20'+_0x4f802b(0x75,0x70),r_text[0x5]=_0x4f802b(0x4d,0x6f)+_0x4f802b(0x82,0xab),r_text[0x6]=_0x4f802b(0x88,0xa6)+_0x28b6aa(0x2c6,0x298)+_0x28b6aa(0x2d6,0x2c5)+_0x28b6aa(0x2f1,0x319)+'\ud83d\ude2e',r_text[0x7]=_0x4f802b(0x69,0x86)+_0x28b6aa(0x2da,0x2ae)+_0x28b6aa(0x2fb,0x2de)+_0x4f802b(0x38,0x3a),r_text[0x8]='\ud83d\ude0b\x20\x2a\u0d9a\u0dd4\u0dc3\u0d9c\u0dd2\u0db1\u0dca'+_0x28b6aa(0x2f2,0x2e7)+_0x28b6aa(0x2e1,0x309),r_text[0x9]='\ud83e\udd12\x20\x2a\u0d85\u0dc3\u0db1\u0dd3\u0db4\x2a\x20'+'\ud83e\udd22',r_text[0xa]=_0x28b6aa(0x2d8,0x2f1)+_0x4f802b(0x7c,0x9e)+_0x28b6aa(0x2c4,0x29f)+_0x4f802b(0x76,0x40)+_0x4f802b(0x3f,0x1a),r_text[0xb]='\ud83d\ude24\x20\x2a\u0d9a\u0ddd\u0db4\u0dba\x2a\x20\ud83d\uddef\ufe0f',r_text[0xc]=_0x28b6aa(0x32c,0x322)+'\u0dc4\u0dd2\u0db1\u0dca\x2a\x20\ud83d\udd2a',r_text[0xd]='\ud83d\udc95\x20\x2a\u0d8b\u0db1\u0db1\u0dca\u0daf\u0dd4\u0dc0'+'\u0d9a\u0dca\x20\u0daf\u0dd0\u0d9a\u0dca\u0dc0\u0dd3\u0db8'+'\u0da7\x20\u0d85\u0dc0\u0dc1\u0dca\u0dba\u0dba\u0dd2\x2a'+_0x28b6aa(0x2f7,0x32a),r_text[0xe]=_0x28b6aa(0x2c1,0x2ef)+_0x28b6aa(0x2b1,0x2cd)+'\u2665\ufe0f',r_text[0xf]=_0x4f802b(0xd,0x43)+'\u0dd9\u0db1\u0dd9\u0d9a\u0dd4\u0d9c\u0dd9\u0db1\u0dca\x20'+_0x4f802b(0x21,-0x3)+_0x28b6aa(0x305,0x2f5)+'\u0dd4\u0dc0\u0dd9\u0db1\u0dca\x2a\x20\ud83d\udcab',r_text[0x10]='\ud83d\udc7b\x20\x2a\u0db4\u0dd2\u0dc3\u0dca\u0dc3\u0dd4\x2a'+_0x4f802b(0x6b,0x99),r_text[0x11]=_0x4f802b(0x6d,0x72)+_0x4f802b(0x72,0x4f)+_0x4f802b(0x86,0x75);function _0x4f802b(_0x408775,_0x29bfb7){return _0x3865(_0x408775- -0x1c3,_0x29bfb7);}r_text[0x12]=_0x4f802b(0x4c,0x51)+_0x4f802b(0x37,-0x4),r_text[0x13]=_0x28b6aa(0x2bd,0x293)+_0x28b6aa(0x325,0x2f9)+_0x4f802b(0x3a,0x32),r_text[0x14]='\ud83c\udfad\x20\x2a\x4d\x6f\x76\x69\x65\x20\u0d91'+'\u0d9a\u0d9a\u0dca\x20\u0db6\u0dbd\u0db1\u0dc0\u0dcf\x2a'+_0x4f802b(0x52,0x66);function _0x28b6aa(_0x22f65f,_0x22aa04){return _0x3865(_0x22f65f-0xe5,_0x22aa04);}r_text[0x15]=_0x4f802b(0x2b,0x41)+'\u0dd2\u0db1\x20\u0dc3\u0db8\u0d9f\x20\u0d86\u0daf\u0dbb'+_0x4f802b(0x17,0x45)+'\x2a\x20\ud83d\udd25',r_text[0x16]='\ud83c\udfae\x20\x2a\x47\x61\x6d\x65\x73\x20\u0dc3'+_0x4f802b(0x66,0x56)+_0x4f802b(0x20,0x62);var i=Math[_0x4f802b(0x58,0x8a)](0x17*Math[_0x4f802b(0x81,0x60)]());await message['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65']('\u0db8\u0d9c\u0dda\x20\u0d9c\u0dab\u0db1\u0dba\x20\u0d9a'+_0x28b6aa(0x2b3,0x2b3)+'\u0d85\u0db1\u0dd4\u0dc0\ud83e\uddd0\x0a\u0d94\u0db6\x20\u0daf'+_0x4f802b(0x79,0x8e)+r_text[i]);
    }));
}
else {
    Amdi.operate({pattern: 'mood ?(.*)', fromMe: true, desc: LAN_DES }, (async (message, match) => {
        (function(_0x53161a,_0x38073b){var _0x4b1369=_0x53161a();function _0x4a28cb(_0x2d2d03,_0x23fa8e){return _0x100b(_0x23fa8e- -0x1e9,_0x2d2d03);}function _0x1ca2c2(_0x4f927a,_0x4e077c){return _0x100b(_0x4e077c- -0x191,_0x4f927a);}while(!![]){try{var _0x405a86=-parseInt(_0x1ca2c2(-0x3e,-0x15))/0x1+parseInt(_0x1ca2c2(-0x5c,-0x50))/0x2+-parseInt(_0x4a28cb(-0xfc,-0xd3))/0x3+parseInt(_0x4a28cb(-0x91,-0x85))/0x4*(parseInt(_0x1ca2c2(-0x71,-0x3e))/0x5)+-parseInt(_0x1ca2c2(-0x4e,-0x80))/0x6+parseInt(_0x4a28cb(-0x6e,-0xa2))/0x7+parseInt(_0x4a28cb(-0x8a,-0x95))/0x8;if(_0x405a86===_0x38073b)break;else _0x4b1369['push'](_0x4b1369['shift']());}catch(_0x3a4d85){_0x4b1369['push'](_0x4b1369['shift']());}}}(_0x5e1c,0x9aa43),await QueenAmdi[_0x42e968(-0xa5,-0x6f)](),await message[_0x42e968(-0xd3,-0xb5)][_0x5cd720(0xef,0xe4)+'\x65'](message['\x6a\x69\x64'],'\x40'+message['\x72\x65\x70\x6c\x79\x5f\x6d\x65\x73\x73'+_0x42e968(-0xe1,-0x10b)][_0x5cd720(0x5c,0x83)][_0x42e968(-0xc8,-0xb0)]('\x40')[0x0]+LAN_PROC,MessageType[_0x5cd720(0xa0,0x76)],{'\x71\x75\x6f\x74\x65\x64\x4d\x65\x73\x73\x61\x67\x65':message[_0x5cd720(0x92,0xa2)+'\x61\x67\x65'][_0x42e968(-0x7a,-0x92)],'\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f':{'\x6d\x65\x6e\x74\x69\x6f\x6e\x65\x64\x4a\x69\x64':[message[_0x42e968(-0xb1,-0xc7)+_0x42e968(-0xe1,-0xb8)][_0x5cd720(0x9e,0x83)][_0x5cd720(0x94,0xb1)]('\x63\x2e\x75\x73',_0x42e968(-0xcc,-0xb1)+_0x42e968(-0x89,-0x5f))]}}),await new Promise(_0x1c39ad=>setTimeout(_0x1c39ad,0xfa0)));var r_text=new Array();r_text[0x0]=_0x42e968(-0xb4,-0xe3)+'\x6b\x69\x6e\x67\x20\x61\x74\x20\x4f\x6c'+_0x42e968(-0x99,-0x7e)+_0x42e968(-0xd7,-0xca)+_0x5cd720(0xca,0xbe),r_text[0x1]=_0x5cd720(0x87,0x96)+'\x69\x6e\x67\x20\x74\x6f\x20\x55\x6e\x64'+_0x5cd720(0x8f,0x89)+_0x42e968(-0x9b,-0xab)+_0x42e968(-0x7c,-0x77)+_0x5cd720(0xaf,0xb0),r_text[0x2]='\x20\x2a\x49\x20\x61\x6d\x20\x53\x65\x61'+'\x72\x63\x68\x69\x6e\x67\x20\x59\x6f\x75'+_0x5cd720(0xca,0xe1)+_0x42e968(-0x86,-0x5f),r_text[0x3]=_0x5cd720(0x79,0x96)+_0x5cd720(0xd7,0xa8)+_0x5cd720(0x9a,0x89)+_0x42e968(-0x96,-0x82)+_0x5cd720(0xc2,0xe2)+'\x20',r_text[0x4]=_0x5cd720(0xca,0x96)+_0x5cd720(0x8f,0xa8)+'\x65\x72\x73\x74\x61\x6e\x64\x20\x59\x6f'+'\x75\x72\x20\x4d\x6f\x6f\x64\x2e\x2e\x2a'+'\x20';var i=Math[_0x42e968(-0xbb,-0xec)](0x5*Math['\x72\x61\x6e\x64\x6f\x6d']());await message[_0x42e968(-0x6f,-0x66)+'\x65'](''+r_text[i]),await new Promise(_0x1fa575=>setTimeout(_0x1fa575,0xe74));function _0x42e968(_0x36b2ce,_0x5240c0){return _0x100b(_0x36b2ce- -0x1f1,_0x5240c0);}var r_text=new Array();r_text[0x0]=_0x5cd720(0x42,0x7b)+_0x5cd720(0x6d,0x8e)+'\x74\x68\x69\x6e\x67\x73\x20\x44\x69\x66'+_0x42e968(-0xae,-0xde),r_text[0x1]='\x20\x2a\x57\x68\x6f\x61\x2c\x20\x4c\x6f'+'\x6f\x6b\x20\x61\x74\x20\x59\x6f\x75\x72'+_0x42e968(-0xd9,-0xbe)+'\x67\x65\x73\x2a\x20\ud83d\ude2f\x20',r_text[0x2]=_0x5cd720(0x106,0xd1)+_0x5cd720(0x5f,0x8a)+_0x42e968(-0xa1,-0xcc),r_text[0x3]='\x20\x2a\x49\x20\x53\x65\x65\x20\x44\x69'+_0x42e968(-0x85,-0x96)+'\x69\x6e\x67\x73\x2a\x20\ud83d\ude33',r_text[0x4]=_0x42e968(-0x9f,-0xc4)+'\x2c\x20\x42\x6c\x65\x65\x64\x69\x6e\x67'+_0x42e968(-0xac,-0xd1),r_text[0x5]='\x20\x2a\x57\x68\x61\x74\x20\x61\x72\x65'+_0x5cd720(0xc8,0xd2)+'\x73\x61\x67\x65\x73\x3f\x2a\x20\ud83e\udd2f',r_text[0x6]=_0x5cd720(0x84,0x8f)+'\x69\x6e\x67\x2a\x20\ud83e\udd14';function _0x5e1c(){var _0x37c495=['\x63\x6c\x69\x65\x6e\x74','\x72\x61\x6e\x64\x6f\x6d','\u2728\x20\x2a\x46\x65\x6c\x6c\x69\x6e\x67','\x6a\x69\x64','\ud83d\udc95\x20\x2a\x57\x61\x6e\x74\x20\x74\x6f','\x20\x50\x65\x72\x66\x65\x63\x74\x2a\x20','\x20\x46\x72\x6f\x6d\x20\x53\x70\x65\x63','\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70','\x54\x6f\x20\x48\x61\x70\x70\x79\x2a\x20','\x65\x72\x73\x74\x61\x6e\x64\x20\x54\x68','\x65\x20\x57\x68\x61\x74\x20\x57\x65\x20','\x73\x70\x6c\x69\x74','\ud83d\ude0b\x20\x2a\x53\x74\x61\x72\x76\x65\x2a','\x61\x6e\x64\x20\x50\x65\x6f\x70\x6c\x65','\x46\x6f\x75\x6e\x64\x20\x53\x6f\x6d\x65','\x20\x2a\x49\x6e\x74\x65\x72\x65\x73\x74','\ud83d\ude2a\x20\x2a\x54\x69\x72\x65\x64\x2a\x20','\x69\x6f\x6e\x2e\x20\x49\x74\x20\x69\x73','\ud83e\udd2c\x20\x2a\x56\x65\x72\x79\x20\x41\x6e','\ud83d\uddd1\ufe0f\x20\x2a\x46\x65\x6c\x6c\x69\x6e\x67','\x20\x49\x6e\x74\x65\x72\x65\x73\x74\x2a','\x20\x2a\x49\x20\x43\x61\x6e\x20\x4e\x6f','\x20\x2a\x49\x20\x61\x6d\x20\x54\x72\x79','\ud83e\udd71\x20\x2a\x57\x61\x6e\x74\x20\x74\x6f','\x66\x6c\x6f\x6f\x72','\x67\x2a\x20\ud83d\ude36','\x65\x6c\x20\x41\x6e\x79\x74\x68\x69\x6e','\u2709\ufe0f\x20\x2a\x57\x61\x69\x74\x69\x6e\x67','\x20\ud83e\udd17','\x20\x2a\x49\x20\x47\x6f\x74\x20\x54\x68','\ud83d\udc7b\x20\x2a\x50\x73\x79\x63\x68\x6f\x2a','\x20\x2a\x49\x20\x61\x6d\x20\x4c\x6f\x6f','\x20\x2a\x49\x20\x61\x6d\x20\x55\x73\x69','\ud83e\udd14\x20\x2a\x54\x72\x79\x69\x6e\x67\x20','\x72\x65\x70\x6c\x79\x5f\x6d\x65\x73\x73','\x31\x30\x30\x31\x36\x32\x34\x6d\x70\x44\x79\x48\x50','\x20\x2a\x42\x69\x70\x20\x42\x6f\x70\x2e','\x66\x65\x72\x65\x6e\x74\x2a\x20\ud83e\udd2d\x20','\x74\x6f\x20\x55\x6e\x64\x65\x72\x73\x74','\x2a\x20\ud83d\ude31','\x69\x6e\x67\x20\x74\x6f\x20\x55\x6e\x64','\x36\x34\x33\x35\x32\x34\x30\x71\x51\x75\x53\x41\x56','\x20\x6c\x6f\x76\x65\x2a\x20\u2665\ufe0f','\x67\x20\x4d\x6f\x76\x69\x65\x2a\x20\ud83d\udcfd\ufe0f','\x6d\x73\x2a\x20\ud83d\udd25','\x20\x74\x69\x6d\x65\x20\x74\x6f\x20\x73','\x61\x6d\x64\x69\x5f\x73\x65\x74\x75\x70','\x59\x6f\x75\x20\x41\x72\x65\x20\x4e\x6f','\x2e\x2e\x2a\x20','\x72\x65\x70\x6c\x61\x63\x65','\x47\x6f\x74\x2a\x20\ud83d\ude1d\x20','\x6d\x70\x74\x79\x20\x43\x61\x6e\x2a\x20','\x20\x2a\x4d\x79\x20\x45\x79\x65\x73\x21','\x31\x35\x67\x64\x61\x73\x6a\x68','\x31\x34\x34\x30\x31\x35\x33\x36\x61\x75\x4e\x69\x54\x56','\x41\x63\x63\x6f\x72\x64\x69\x6e\x67\x20','\x65\x20\x4d\x65\x73\x73\x61\x67\x65\x73','\ud83d\udeac\x20\x2a\x47\x65\x74\x20\x62\x6f\x72','\x64\x20\x4d\x65\x73\x73\x61\x67\x65\x73','\x20\x4c\x69\x6b\x65\x20\x61\x6e\x20\x45','\x20\x59\x6f\x75\x72\x20\x44\x72\x65\x61','\x65\x20\x45\x6d\x6f\x6a\x69\x73\x20\x59','\x2e\x2a\x20','\x65\x65\x20\x74\x68\x65\x20\x72\x65\x73','\ud83d\udc94\x20\x2a\x41\x20\x50\x61\x6e\x64\x61','\x69\x61\x6c\x20\x4f\x6e\x65\x2a\x20\ud83d\udcab','\x20\x2a\x49\x20\x47\x61\x74\x68\x65\x72','\x20\x49\x20\x47\x6f\x74\x20\x61\x6e\x20','\ud83d\udc9e\x20\x2a\x46\x61\x6c\x6c\x20\x69\x6e','\x20\x59\x6f\x75\x2a\x20','\x33\x38\x32\x37\x33\x32\x73\x63\x69\x6c\x42\x70','\ud83e\udd12\x20\x2a\x53\x69\x63\x6b\x2a\x20\ud83e\udd22','\x6f\x77\x65\x72\x73\x2a\x20\ud83d\ude0e','\x20\x47\x61\x6d\x65\x73\x2e\x2a\x20\ud83d\udd79\ufe0f','\x2e\x6e\x65\x74','\ud83d\udde8\ufe0f','\ud83d\ude24\x20\x2a\x41\x6e\x67\x79\x2a\x20\ud83d\uddef\ufe0f','\x73\x73\x61\x67\x65\x73\x2e\x2e\x2a\x20','\x66\x66\x65\x72\x65\x6e\x74\x20\x54\x68','\ud83e\udd29\x20\x2a\x53\x6f\x20\x48\x61\x70\x70','\x79\x20\u0130\x6e\x66\x6f\x72\x6d\x61\x74','\x20\x2a\x4c\x65\x74\u2019\x73\x20\x53\x65','\x20\x54\x68\x65\x73\x65\x20\x4d\x65\x73','\ud83d\ude0c\x20\x2a\x54\x72\x79\x69\x6e\x67\x20','\x70\x68\x79\x73\x69\x63\x61\x6c\x20\x50','\x20\x49\x20\x47\x61\x74\x2d\x68\x65\x72','\x20\x2a\x42\x6f\x73\x73\x2c\x20\x49\x20','\x20\x59\x6f\x75\x20\x57\x72\x6f\x74\x65','\x2a\x20\ud83d\ude23','\x64\x61\x74\x61','\x54\x6f\x20\x4d\x79\x20\x43\x61\x6c\x63','\x20\x53\x6c\x65\x65\x6f\x2a\x20\ud83d\ude34','\ud83c\udfad\x20\x2a\x57\x61\x74\x63\x68\x69\x6e','\x79\x2a\x20\ud83d\ude0e','\x37\x32\x33\x34\x34\x32\x50\x69\x4b\x44\x52\x6a','\x75\x6c\x61\x74\x69\x6f\x6e\x73\ud83e\uddd0\x0a','\x65\x64\x20\u0130\x6e\x66\x6f\x72\x6d\x61','\x72\x20\x44\x61\x69\x6c\x79\x20\x4d\x65','\x6f\x75\x20\x53\x65\x6e\x74\x2e\x2e\x2a','\x74\x69\x6f\x6e\x20\x41\x62\x6f\x75\x74','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x61\x6d\x20\x44\x6f\x6e\x65\x2e\x20\x43','\x61\x67\x65','\x37\x34\x34\x34\x32\x34\x32\x4b\x61\x62\x50\x56\x72','\x20\ud83d\ude35\x20\x2a\x54\x72\x79\x69\x6e\x67','\x20\u26b0\ufe0f','\x74\x65\x78\x74','\ud83d\ude0d\x20\x2a\x46\x61\x6c\x6c\x20\x69\x6e','\x32\x37\x32\x39\x34\x33\x39\x54\x45\x6e\x6b\x4c\x77','\x65\x20\x52\x65\x73\x75\x6c\x74\x2a\x20','\x20\x4f\x6c\x64\x20\x4d\x65\x73\x73\x61','\x20\x2a\x57\x6f\x61\x77\x2c\x20\x49\x20','\x20\x46\x72\x6f\x6d\x20\x59\x6f\x75\x2e','\x65\x20\x4e\x65\x63\x65\x73\x73\x61\x72','\x61\x6e\x74\x2e\x2a\x20\ud83e\udd16','\x20\ud83e\udd2a'];_0x5e1c=function(){return _0x37c495;};return _0x5e1c();}var i=Math[_0x5cd720(0x92,0x98)](0x7*Math[_0x42e968(-0xd2,-0xb5)]());await message[_0x5cd720(0xe9,0xe4)+'\x65'](''+r_text[i]),await new Promise(_0x1a08c4=>setTimeout(_0x1a08c4,0x7d0));var r_text=new Array();r_text[0x0]=_0x5cd720(0x9c,0xc2)+_0x42e968(-0x73,-0x43)+_0x42e968(-0x70,-0x3a)+'\x20\x59\x6f\x75\x2e\x2a\x20\u2705',r_text[0x1]=_0x5cd720(0xaa,0x9d)+_0x5cd720(0x56,0x7d)+_0x5cd720(0xc0,0xd0)+_0x5cd720(0x68,0x91)+_0x42e968(-0xa6,-0x6f)+_0x5cd720(0x88,0xbf)+'\x75\x6c\x74\x2e\x2e\x2a\x20',r_text[0x2]=_0x5cd720(0xaf,0xa0)+'\x6e\x67\x20\x4d\x79\x20\x4d\x65\x74\x61'+_0x42e968(-0x7f,-0x99)+_0x42e968(-0x8b,-0x97),r_text[0x3]=_0x5cd720(0xcf,0x95)+'\x77\x20\x47\x75\x65\x73\x73\x20\x54\x68'+_0x42e968(-0xda,-0xe8),r_text[0x4]=_0x5cd720(0xd0,0xa4)+_0x42e968(-0x7e,-0x55)+'\x2d\x65\x64\x20\x49\x6e\x66\x6f\x72\x6d'+_0x42e968(-0xd5,-0xe5),r_text[0x5]=_0x42e968(-0x7d,-0x59)+_0x42e968(-0x6e,-0x51)+'\x61\x6c\x63\x75\x6c\x61\x74\x69\x6e\x67'+_0x5cd720(0xe0,0xb0),r_text[0x6]='\x20\x2a\x46\x69\x6e\x61\x6c\x6c\x79\x2c'+_0x5cd720(0xfc,0xc3)+'\u0130\x64\x65\x61\x20\x41\x62\x6f\x75\x74'+_0x5cd720(0xa1,0xc5);var i=Math['\x66\x6c\x6f\x6f\x72'](0x7*Math[_0x42e968(-0xd2,-0xf6)]());function _0x100b(_0x48a120,_0x11203e){var _0x5e1c0d=_0x5e1c();return _0x100b=function(_0x100bfe,_0x300125){_0x100bfe=_0x100bfe-0x110;var _0x2d01d9=_0x5e1c0d[_0x100bfe];return _0x2d01d9;},_0x100b(_0x48a120,_0x11203e);}await message[_0x5cd720(0xe6,0xe4)+'\x65'](''+r_text[i]),await new Promise(_0x1be2da=>setTimeout(_0x1be2da,0x834));var r_text=new Array();r_text[0x0]=_0x42e968(-0x84,-0x7f)+_0x42e968(-0x76,-0x8f),r_text[0x1]=_0x42e968(-0x80,-0x6e)+_0x42e968(-0xcb,-0xfc)+'\u263a\ufe0f',r_text[0x2]=_0x5cd720(0x9d,0x82)+_0x5cd720(0xb4,0x85)+'\ud83d\udcaf',r_text[0x3]=_0x42e968(-0x93,-0x73)+'\x20\x57\x69\x74\x68\x20\x61\x20\x42\x72'+'\x6f\x6b\x65\x6e\x20\x48\x65\x61\x72\x74'+_0x42e968(-0x7b,-0x6f),r_text[0x4]='\ud83d\ude11\x20\x2a\x44\x6f\x6e\x74\x20\x46\x65'+_0x42e968(-0xb9,-0xa5)+_0x5cd720(0x7f,0x99),r_text[0x5]='\ud83d\ude22\x20\x2a\x55\x70\x73\x65\x74\x2a\x20'+'\ud83d\ude1e',r_text[0x6]=_0x42e968(-0xb2,-0x89)+_0x42e968(-0xad,-0xb7)+_0x5cd720(0x6c,0x8d)+'\x2a\x20\ud83d\ude2e',r_text[0x7]=_0x42e968(-0xc0,-0xa4)+_0x42e968(-0x98,-0xb9)+_0x5cd720(0xdb,0xb3)+_0x42e968(-0x88,-0x8b),r_text[0x8]=_0x42e968(-0xc7,-0xe1)+_0x5cd720(0x93,0x75),r_text[0x9]=_0x5cd720(0xf3,0xc7),r_text[0xa]=_0x5cd720(0x7a,0x74)+'\x20\x74\x6f\x20\x43\x6f\x6e\x74\x72\x6f'+'\x6c\x20\x59\x6f\x75\x72\x20\x45\x6d\x6f'+'\x74\x69\x6f\x6e\x73\x2a\x20\ud83d\ude2c',r_text[0xb]=_0x42e968(-0x87,-0x70),r_text[0xc]=_0x5cd720(0xbc,0x92)+'\x67\x72\x79\x2a\x20\ud83d\udd2a',r_text[0xd]=_0x5cd720(0x85,0x84)+_0x42e968(-0xbf,-0xd1)+_0x5cd720(0xb3,0x9c),r_text[0xe]=_0x42e968(-0xdc,-0xd2)+_0x5cd720(0xd3,0xaa),r_text[0xf]=_0x42e968(-0xb8,-0xb3)+'\x20\x61\x20\x4d\x65\x73\x73\x61\x67\x65'+_0x5cd720(0x72,0x86)+_0x42e968(-0x92,-0x5c),r_text[0x10]=_0x5cd720(0xc9,0x9e)+_0x42e968(-0xd4,-0xdb),r_text[0x11]=_0x5cd720(0x96,0x97)+_0x5cd720(0x109,0xdb),r_text[0x12]=_0x42e968(-0xc3,-0xbe)+'\ud83d\ude29',r_text[0x13]=_0x5cd720(0x83,0xb9)+'\x65\x64\x20\x6f\x66\x20\x4c\x69\x66\x65'+'\x2a\x20\ud83c\udff3\ufe0f';function _0x5cd720(_0xf4312a,_0x321c3e){return _0x100b(_0x321c3e- -0x9e,_0xf4312a);}r_text[0x14]=_0x5cd720(0x108,0xdc)+_0x5cd720(0xce,0xab),r_text[0x15]=_0x5cd720(0xf9,0xc4)+'\x20\x6c\x6f\x76\x65\x20\x4c\x69\x6b\x65'+_0x42e968(-0x97,-0x90)+_0x42e968(-0xa7,-0x91),r_text[0x16]='\ud83c\udfae\x20\x2a\x50\x6c\x61\x79\x69\x6e\x67'+_0x5cd720(0xdc,0xc9);var i=Math[_0x5cd720(0xc3,0x98)](0x17*Math[_0x5cd720(0x8a,0x81)]());await message[_0x5cd720(0x101,0xe4)+'\x65'](_0x42e968(-0x9c,-0x93)+_0x5cd720(0xfe,0xda)+_0x42e968(-0x74,-0x48)+_0x5cd720(0xb3,0xaf)+'\x77\x2c\x20'+r_text[i]);
    }));
}
