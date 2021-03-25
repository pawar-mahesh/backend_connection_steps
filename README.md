# Steps for backend connection #

### Step 1 ###

```bash

# Create a connection with database
    folder: utilities/connection.js
    In this file define schema and then create the connection and then export it
```

### Step 2 ###

```bash

# Create a model of the schema
    folder: model/user.js
    import connection file
    In this file write a perticular methods for the operations
    e.g. 
    let user = {}
    
    user.userLogin = async (username, password) => {
        -------*----*-------
    }
```

### Step 3 ###

```bash

# Create a database setup
    folder: model/dbSetup.js
    import connection file
    define default user data
    create a 'create.setupDB' method
    
    e.g.
    let create = {}
    
    create.setupDB = async () => {
        -------*----*-------
    }
```

### Step 4 ###

```bash

# Create a service file
    folder: services/user.service.js
    import model file
    In this file write a services
    e.g.
    // user login service
    user.userLogin = (username, password) => {
        return userModel.userLogin(username, password).then(res => {
            return res
        })
    }
```

### Step 5 ###

```bash

# Crate a route file
    folder: routes/route.js
    import service file
    e.g.
    // login route
    route.post('/login', (req, res, next) => {
        let username = req.body.username
        let password = req.body.password
        
        return userService.userLogin(username, password).then(data => {
            res.json({data: data})
        }).catch(err => {
            next(err)
        })
    })	
```

### Step 6 ###

```bash

# Crate a route file
    file: app.js
    import bodyParser and all other required packages
    e.g.
    const express = require('express');
    const app = express();
```