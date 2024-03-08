const express = require('express');
const router = express.Router();
const { 
    getWonderLink,
    setWonderLink, 
    getOneWonderLink,  
    editWonderLink,
    deleteWonderLink,
    
} = require('../controllers/wonderlink.controller');
const auth = require('../middleware/auth');




router.get("/", getWonderLink)
router.post("/", auth, setWonderLink);
router.get("/:id", getOneWonderLink);
router.put("/:id", auth, editWonderLink);
router.delete("/:id", auth, deleteWonderLink)

module.exports = router;