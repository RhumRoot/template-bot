const flowManager = require('flow-manager')

class Handler {
    constructor(bundle) {
        this.bundle = bundle;
    }

    start(user) {
        let { tg, event, db } = this.bundle

        flowManager
            .create()
            .addStep((flow, data) => {
                //Text template
                tg.telegram.sendMessage(data.user.id, 'text')

                flow.next(data)
            })
            .addStep((flow, data) => {
                //Listen template
                event.once(data.user.id, msg => {
                    tg.telegram.sendMessage(data.user.id, 'Your username must be less than 20 characters. Enter it again')
                    //flow.repeat(data)
                })
            })
            .addStep((flow, data) => {
                flowManager.destroy(flow)
            })
            .execute({ user: user })
    }
}

module.exports = Handler;