const mongoose = require('mongoose');

const CardSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        intelligence: {
            type: Number,
            required: true,
        },
        strength: {
            type: Number,
            required: true
        },
        speed: {
            type: Number,
            required: true
        },
        durability: {
            type: Number,
            required: true
        },
        power: {
            type: Number,
            required: true
        },
        combat: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;