const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '978841230:AAF3Ocg-8t7pF_D9NFgVLILIfztZ4s-T9Ys'
const bot  = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg =>{
    bot.sendMessage(msg.chat.id, 'Hello' )
})