exports.login = (req, res) => {
    var user = req.body;
    console.log("Reached to login------------------"+user);
    global.db.user.findOne({
        email: user.email
    }, (error, foundUser) => {
        if (error) {
            console.log("first Error-----");
            res.status(500).json({
                status: "Error",
                error: error
            });
        } else {
            if (!foundUser) {
                console.log("second Error-----");
                res.status(500).json({
                    status: "ERROR",
                    error: "Email is invalid."
                });
            } else {
                if(user.password !== foundUser.password){
                    console.log("third Error-----");
                    res.status(500).json({
                        status: "ERROR",
                        error: "Password is invalid."
                    });
                }else{
                    console.log("reached success----");
                    res.status(200).json({
                        status: "SUCCESS",
                        data: foundUser
                    });
                }
            }
        }
    });
}

exports.signup = (req, res) => {
    var user = req.body;
    console.log("reached to signup--------" + user);
    global.db.user.insert(user, (err, result) => {
        if (err) {
            console.log("-----------ERR--------", err);
            res.status(500).json({
                status: "ERROR",
                err: "Error while signup. DB ERROR."
            });
        } else {
            res.status(200).json({
                status: "SUCCESS",
                data: result
            });
        }
    });
}