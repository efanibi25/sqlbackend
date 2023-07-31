//Takes a user input

const { sendChatGPT } = require("../tools/chatgpt")

// get chatgpt to respond with the a array of the sql query
require("../tools/chatgpt")

const sqlconvert=async function (text){
   return await sendChatGPT(text)
}

module.exports = {
   sqlconvert
 }