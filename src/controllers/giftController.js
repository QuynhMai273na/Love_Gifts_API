const giftService = require("../services/giftService");
class GiftController {
    async getAllGifts (req, res){
        try{
            const gifts= await giftService.getAllGifts();
            res.json(gifts);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }
    
};
module.exports = new GiftController();