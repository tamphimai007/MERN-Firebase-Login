const admin = require('../config/firebase')


exports.authCheck = async (req, res, next) => {
    //console.log('hello Middleware', req.headers)
    try {
        // code
        const firebaseUser = await admin
            .auth()
            .verifyIdToken(req.headers.authtoken)

        req.user = firebaseUser;
        //console.log('req.user',req.user)
        next();
    } catch (err) {
        console.log(err)
    }

}