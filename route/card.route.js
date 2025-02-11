const express = require("express");
const router = express.Router();
const { addCard, getCards, getCard, updateCard, deleteCard } = require("../controller/card.controller.js")

router.post('/', addCard)
router.get('/', getCards)
router.get('/:id', getCard)
router.put('/:id', updateCard)
router.delete('/:id', deleteCard)

module.exports = router;