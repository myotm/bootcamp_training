exports.find = (req, res) => {
    var user = req.body;


    global.db.usertable.findOne({
        email: user.email
    }, (error, user) => {
        if (error) {
            reject (res, 'USER NOT FOUND.');
        } else {
            if (user){
                fulfill(res, user);
            } else {
                reject(res, 'USER NOT FOUND.');
            }
        }
    });
}

exports.findAll = (req, res) => {
    var user = req.body;
    global.db.user.find().toArray((error, result)=> {
        if (error) {
            reject(res, 'USER FIND ALL ERROR.');
        } else {
            fulfill(res, result);
        }
    });
}

exports.create = (req, res) => {
    var user = req.body;

    global.db.user.insert(user, (error, result) => {
        if (error) {
            reject(res, 'DB_ERROR in CREATE.');
        } else {
            fulfill(res, result);
        }
    });
}

exports.update = (req, res) => {
    var user = req.body;

    global.db.user.update({
        username: user.username
    }, {
        $set: user
    }, (error, result) => {
        if (error) {
            reject(res, 'USER UPDATE ERROR.');
        } else {
            fulfill(res, result);
        }
    });
}

exports.remove = (req, res) => {
    var user = req.body;

    global.db.user.remove({
        username: user.username
    }, (error, result) => {
        if (error) {
            reject(res, 'USER_REMOVE_ERROR');
        } else {
            fulfill(res, result);
        }
    });
}
var fulfill = (res, result) => {
    res.status(200).json({
        status: "SUCCESS",
        data: result
    });
}

var reject = (res, message) => {
    res.status(500).json({
        status: "ERROR",
        error: message
    });
}