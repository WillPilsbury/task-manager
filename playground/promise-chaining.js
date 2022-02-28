require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('61b10c94dd5d08585da8b9ae', {age: 100}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 100})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})