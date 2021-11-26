const cards = require('../model/card.model');

//GET Method
module.exports.getallcard = async (request, response, next) => {
    try {
        let card1 = await cards.find();
        response.status(200).send({ success: true, card1 });
    } catch (error) {
        console.log(error);
        response.status(400).send({ success: false, message: error.message });
    }
}

//GET SINGLE METHOD
module.exports.getsinglecard = async (request, response, next) => {
    try {
        let card = await cards.findOne({ _id: request.params.id })
        if (!card) {
            response.send("id doesn't exist")
        }
        response.status(200).send({ success: true, card });
    } catch (error) {
        response.status(400).send({ success: false, message: error.message });
    }
}

//CREATE METHOD
module.exports.createcard = async (request, response, next) => {
    try {
        const { name, imgUrl } = request.body;
        let card1 = new cards({ name, imgUrl });
        let result = await card1.save();
        response.send('card1 is saved' + card1);
    } catch (error) {
        console.log(error);
    }
}

//EDIT Method
module.exports.updatecard = async (request, response, next) => {
    try {
        let card = await cards.findOne({ _id: request.params.id })
        if (!card) {
            response.send("id doesn't exist")
        }
        let updatecard1 = {
            name: request.body.name,
            imgUrl: request.body.imgUrl
        }
        let result = await cards.updateOne({ _id: request.params.id }, updatecard1);
        response.send({ success: true, card: { id: request.params.id, } });
    } catch (error) {
        response.status(400).send({ success: false, message: error.message });
    }
}

//DELETE METHOD
module.exports.deletecard = async (request, response, next) => {
    console.log("ID = " + request.params.id)
    try {
        let result = await cards.deleteOne({ _id: request.params.id })

        response.status(200).json({ success: true, id: request.params.id });
    }

    catch (error) { console.log(error); }

}

