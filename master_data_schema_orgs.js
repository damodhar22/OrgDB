var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
        organizationName: {
          type: String
        },
        organizationId: {
          type: String
        },
        sources: [],
        adminUserName:{
          type:String
        },
        user:
              [{
                userName:{
                  type:String
                },
                password:{
                  type:String
                }
              }]
});
