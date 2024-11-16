const Gift = require ("../models/gift");
class GiftService {
    async createGift(name, picture, type, point) {
        const newGift= new Gift({name, picture, type, point});
        return await newGift.save();
    }
    
    async getAllGifts() {     
        return await Gift.find();
    }
    async getGiftById(id) {
        return await Gift.findById(id);
    }
};
module.exports = new GiftService();