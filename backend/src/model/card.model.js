const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
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
        // Voting attributes
        voteCount: {
            type: Number,
            default: 0
        },
        lastVotedAt: {
            type: Date,
            default: null
        },
        // Stat history (keeps only last 5 changes for trend analysis)
        statHistory: {
            type: [
                {
                    date: Date,
                    intelligence: Number,
                    strength: Number,
                    speed: Number,
                    durability: Number,
                    power: Number,
                    combat: Number
                }
            ],
            default: []
        },
        // Trend: "rising", "falling", "steady"
        trend: {
            type: String,
            enum: ["rising", "falling", "steady"],
            default: "steady"
        },
        // Leaderboard position tracking
        rank: {
            type: Number,
            default: null
        },
        rankChange: {
            type: Number, // Positive = moved up, Negative = moved down
            default: 0
        },
        // Management & sync metadata
        lastUpdated: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ["active", "inactive", "archived"],
            default: "active"
        }
    },
    {
        timestamps: true
    }
);

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
