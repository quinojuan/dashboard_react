const { User } = require ("../../db.js")
const axios = require("axios")

const loadDb = async () => {
    try {
        let usersAxios = await axios("https://jsonplaceholder.typicode.com/users")
        let users = usersAxios.data
        for (let i = 0; i < users.length; i++){
            await User.create({
                id: users[i].id,
                name: users[i].name,
                username: users[i].username,
                email: users[i].email,
                address: `${users[i].address.street} ${users[i].address.suite}`,
                phone: users[i].phone
            })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = loadDb