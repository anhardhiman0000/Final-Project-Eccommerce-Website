const users = require('../model/user.model');

//Get User Method
module.exports.getalldetail1 = async (request, response, next) => {
    try {
        let user1 = await users.find();
        response.status(200).send({
            success: true,
            user1
        });

    } catch (error) {
        console.log(error);
        response.status(400).send({
            success: false,
            message: error.message
        });
    }
}

//GET Single USER
module.exports.getsingleuser = async (request, response, next) => {
    console.log("Get Specific User userController", request.params.id);
    try {
        let user = await users.findOne({ username: request.params.id })
        if (user === null) {
            response.send({ islogged: false });
        }
        response.status(200).send({ islogged: true });

    } catch (error) {
        response.status(400).send({
            success: false,
            message: error.message
        });
    }
}

//Create Method
module.exports.createuser = async (request, response, next) => {
    try {
        const { username, email, password } = request.body;
        let user1 = new users({ username, email, password });
        let result = await user1.save();
        response.send('user1 is saved' + user1);
    } catch (error) {
        console.log(error);
    }
}

//Edit Method
module.exports.updateuser = async (request, response, next) => {
    try {
        let user = await users.findOne({ _id: request.params.id })
        if (!user) {
            response.send("id doesn't exist")
        }
        let updateuser1 = {
            username: request.body.username,
            email: request.body.email,
            password: request.body.password
        }
        let result = await users.updateOne({ _id: request.params.id },
            updateuser1);
        console.log(result);

        response.send({
            success: true,
            user: { id: request.params.id, }
        });
    } catch (error) {
        response.status(400).send({
            success: false,
            message: error.message
        });
    }
}

//Delete Method
module.exports.deleteuser = async (request, response, next) => {
    console.log("ID = " + request.params.id)
    try {
        let result = await users.deleteOne({ _id: request.params.id })

        response.status(200).json({
            success: true,
            id: request.params.id
        });
    }
    catch (error) { console.log(error); }
}
