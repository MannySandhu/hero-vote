const Card = require("../model/card.model.js");

const addCard = async (req, res) => {
    try {
        const card = await Card.create(req.body);
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCards = async (req, res) => {
    try {
        const card = await Card.find({})
        res.status(200).json(card)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCard = async (req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findById(id);
        res.status(200).json(card)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateCard = async (req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findByIdAndUpdate(id, req.body);

        if (!card) {
            return res.status(404).json({ message: "card not found" })
        }

        const updatedCard = await Card.findById(id);
        res.status(200).json(updatedCard);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteCard = async (req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findByIdAndDelete(id);

        if (!card) {
            res.status(404).json({ message: error.message })
        }

        res.status(202).json({ message: "Card deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    addCard,
    getCards,
    getCard,
    updateCard,
    deleteCard
};