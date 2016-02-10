var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var organizationSchema = new Schema(
  {
    organizationName: {
      type: String,
      unique: true,
      required: 'Username is required',
      trim: true
    },
    organizationId: String,
    services: [
      {
        service:String,
        dbName:String
      }
    ],
    users:
    [{
      username : {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
      },
      password : {
        type: String,
        validate: [
        function(password) {
            return password && password.length > 6;
          }, 'Password should be longer'
        ]
      }
    }]
  }
  ,{collection: "organizations"})
  module.exports = organizationSchema;
