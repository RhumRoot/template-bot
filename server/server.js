'use strict'


//Configs and 3-party init
const config = require('./config.json')
const PORT = process.env.PORT || 5000
const event = new (require('events'))

//App&Bot init
const express = require('express')
const app = express()

const Telegraf = require('telegraf');
const tg = new Telegraf(config.BOT_TOKEN)

const db = new (require('./db/client'))


//App&Bot configuring
app.use(tg.webhookCallback(''))
tg.telegram.setWebhook(config.URL + '')


//Bot launching
const bundle = { tg, db, event, config }

const bot = new (require('../bot/bot.js'))(bundle)



app.listen(PORT, console.info(`Bot is working on ${PORT} port`))
