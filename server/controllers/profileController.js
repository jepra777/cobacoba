const { Profile } = require("../models");

class ProfileController {
  
  static async readProfile(req, res) {
    const userId = req.user.id;
    try {
      if (!userId) return res.json("user not found");
      const data = await Profile.findOne({ where: { userId } });
      res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  }
  static async updateProfile(req,res){
    console.log("Hi")
    const userId = req.user.id;
    const { fullName, birthDate, city, country, mobilePhone, profilePicture} = req.body

    const payload = {
        fullName,
        birthDate,
        city,
        country,
        mobilePhone,
        profilePicture,
      updateAt: new Date()}

    try {
        if(!userId) return res.json("user not found")
        await Profile.update(payload,{where:{userId}})
        res.status(200).json(`player with id ${userId} successfully updated`)
    } catch (error) {
        throw error
    }
  }
}

module.exports = ProfileController;
