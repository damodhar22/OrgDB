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
var organizationModel = masterDB.model('Organization',organizationSchema);
org(organizationModel);
var models={};
var db1,db2,db3;

function setDbConnection(services){
  for (var i = 0; i < services.length; i++) {
    var dbDetails=services[i].dbDetails;
    if(services[i].service=="nginx"){
      db1 = mongoose.createConnection("mongodb://"+dbDetails.host+":"+dbDetails.port+"/"+dbDetails.dbName);
    }
    else if(services[i].service=="appgit"){
      db2 = mongoose.createConnection("mongodb://"+dbDetails.host+":"+dbDetails.port+"/"+dbDetails.dbName);
    }
    else if (services[i].service=="git") {
      db3 = mongoose.createConnection("mongodb://"+dbDetails.host+":"+dbDetails.port+"/"+dbDetails.dbName);
    }
  }
  var dbModels=
  {
    serverModel : db1.model('Logs',serverSchema),
    aptLogModel : db2.model('aptLog',aptLogSchema),
    aptConfigModel : db2.model('aptConfig', aptConfigSchema)
  };
  return dbModels;
}
module.exports = {
  userModel : masterDB.model('User',userSchema),
  configModel : masterDB.model('Config',configSchema),
  organizationModel : organizationModel,
  getModel:getModel
};

function org(organizationModel){
  organizationModel.find({}, 'organizationName services', function (err, docs) {
    console.log(docs.organizationName+"-------------");
    for(var i=0;i<docs.length;i++){
  models[docs[i].organizationName]=setDbConnection(docs[i].services);
}
console.log(models);
});
}

function getModel(organization,model){
  if(models[organization][model]==undefined){
    organizationModel.find({}, 'organizationName services', function (err, docs){
    models[docs.organizationName]=setDbConnection(docs.services);
    return models[organization][model];
  });

  }
  else{
    return models[organization][model];
  }
}
