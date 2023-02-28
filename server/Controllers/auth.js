const User = require('../Models/Users')

exports.createAndUpdateUser = async (req, res) => {
    //code
    // const roitai = 'hello Controller'
    // console.log('controller',req.user)
    // res.json(roitai)
    const { name, email } = req.user
    //console.log(name,email)
    const user = await User.findOneAndUpdate(
        { email },
        { name },
        { new: true }
    )
    if (user) {
        console.log('USER UPDATED', user)
        res.json(user)
    } else {
        const newUser = await User({
            email,
            name
        }).save();

        console.log('CREATED USER', newUser)
        res.json(newUser)
    }

}

exports.currentUser = async (req, res) => {
    try {
        //code
        const user = await User.findOne({ email: req.user.email }).exec()
        res.send(user)
    } catch (err) {
        console.log(err)
        res.status(400).send('Server Error')
    }
}