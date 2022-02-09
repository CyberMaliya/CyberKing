/* Copyright (C) 2022 CyberKing.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

function successfullMessage(msg) {
    return "✅ *CyberKing*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *CyberKing*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *CyberKing*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}