// imoport connection
const collection = require('../utilities/connection')

// create one sample user data
const userData = [
    {
        "username" : "mahi",
        "password" : "mahi",
        "email" : "mahi@gmail.com",
        "mobileNo" : 8055580245,
        "lastLogin" : "2021-03-25T07:14:57.217Z"
    }
]

let create = {}

// create setup db and insert above sample userdata in it
create.setupDB = async () => {
    const userColl = await collection.getCollection();
    const data = await userColl.deleteMany();
    const result = await userColl.insertMany(userData);
    if (result && result.length > 0)
      return result.length;
    else
      return null;
  }

module.exports = create