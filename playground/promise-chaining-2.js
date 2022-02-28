require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('61b13e5cb5e9e5f97fefb854').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
