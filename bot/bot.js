const Handler = require('./handler')

class Bot {
    constructor(bundle) {
        this.bundle = bundle
        this.handler = new Handler(bundle)

        this.handleUpdates()
    }

    handleUpdates() {
        let { handler } = this
        let { tg, event, db, config } = this.bundle

        tg.command('start', ctx => {
            let tgUser = ctx.message.from

            handler.start(tgUser)
        })

        tg.on('message', ctx => {
            
        })

        tg.on('callback_query', (ctx) => {
            
        })

        event.on('event', user => {
            
        })
    }
}

module.exports = Bot;