var mongoose = require('mongoose');
var masterDB = mongoose.createConnection("mongodb://localhost/masterDB");
//var db1 = mongoose.createConnection("mongodb://localhost/nginx");
//var db2 = mongoose.createConnection("mongodb://localhost/LogAggregate");
// var db1 = mongoose.createConnection("mongodb://172.23.238.253:27018/nginx");
//var db2 = mongoose.createConnection("mongodb://172.23.238.253:27018/LogAggregate");

var userSchema = require('./log.user.model');
var serverSchema = require('./log.server.model');
var configSchema = require('./log.config.model');
var aptLogSchema = require('./logSchema');
var aptConfigSchema = require('./configSchema');
var organizationSchema=require('./log.organization.model');

var db1,db2,db3,serverModel ,aptLogModel ,aptConfigModel;

function setDbConnection(services){
  for (var i = 0; i < services.length; i++) {
    console.log("db loaded"+services[i].dbName);
    if(services[i].service=="nginx"){
      db1 = mongoose.createConnection("mongodb://localhost/"+services[i].dbName);
    }
    else if(services[i].service=="appgit"){
      db2 = mongoose.createConnection("mongodb://localhost/"+services[i].dbName);
    }
    else if (services[i].service=="git") {
      db3 = mongoose.createConnection("mongodb://localhost/"+services[i].dbName);
    }
  }
  serverModel = db1.model('Logs',serverSchema),
  aptLogModel = db2.model('aptLog',aptLogSchema),
  aptConfigModel = db2.model('aptConfig', aptConfigSchema)

}
module.exports = {
  userModel : masterDB.model('User',userSchema),
  configModel : masterDB.model('Config',configSchema),
  organizationModel : masterDB.model('Organization',organizationSchema),
  setDbConnection : setDbConnection,
  getModel:getModel
};

function getModel(model){
  if(model=="serverModel"){
    return serverModel;
  }
  else if(model=="aptLogModel"){
    return aptLogModel;
  }
  else if(model=="aptConfigModel"){
    return aptConfigModel;
  }

}
