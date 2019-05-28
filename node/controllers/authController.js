exports.login = (req, res) => {
    var user = req.body;

    global.db.usertable.findOne({
        email: usertable.email
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