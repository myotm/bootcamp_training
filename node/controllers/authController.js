exports.login = (req, res) => {
    var user = req.body;

    global.db.usertable.findOne({
        email: user.email
    }, (error, foundUser) => {
        if(error){
            res.status(500).json({
                status: "Error",
                error: error
            });
        }else {
            if (!foundUser) {
                res.status(500).json({
                    status: "ERROR",
                    error: "Email is invalid."
                });
            } else {
                if(user.password !== foundUser.password){
                    res.status(500).json({
                        status: "ERROR",
                        error: "Password is invalid."
                    });
                }else{
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