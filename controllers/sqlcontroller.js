//Takes a user input

const { sendChatGPT } = require("../tools/generate")

// get chatgpt to respond with the a array of the sql query
require("../tools/generate")

const sqlconvert=async function (text){
   return await sendChatGPT(text)
}

module.exports = {
   sqlconvert
 }