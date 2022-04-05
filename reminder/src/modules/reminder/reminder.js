const model = require('./model')
module.exports = {
    GET: async(req, res) => {
        try {

            const allReminder = await model.reminder()

            res.render('index', {allReminder:allReminder})
        } catch(err) {
            res.sendStatus(500)
        }
    },
    POST: async(req, res)=>{
        try {
            const {remindername , remindertime} = req.body

        const post = await model.addreminder(remindername , remindertime)

        res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    },
    DELETE: async(req , res)=>{
        try {
            const {id} = req.params

        const deleteReminder = await model.deleteReminder(id)
        
        res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    },
    UPDATE: async(req, res)=>{
    try {
        const {id} = req.params

        const {remindername , remindertime} = req.body

        const updateReminder = await model.updateReminder(remindername , remindertime ,id)


        res.redirect('/')
    } catch (error) {
        console.log(error);
    }

    },
    UPDATE_GET:async(req , res)=>{
        const {id} = req.params

        const  findId = await model.findid(id )

        res.render('edit.ejs' , {findId: findId})

    }
}