var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
        organizationId: {
          type: String,
          required:true
        },
        organizationName: {
          type: String,
          required: true,
          lowercase: true
        },
        dbName: {
          type: Number,
          required:true,
          default: 0
        },
        gitOauth:{
              name:{
                type:String,
              },
              email:{
                type:String,
                match : /.+@.+\..+/
              },
              date:{
                type:Date
              }
        },
        repositoryData:
              [{
                gitUserName:{
                  type:String
                },
                repo:{
                  type:String
                },
                tailParam:{
                  type:Number
                }
              }]
});
