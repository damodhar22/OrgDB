var express = require('express');
var router = express.Router();
router.get('/login/success', function(req, res){
var userAgent = require('./API/userAgent');
//var logListing = require('./API/logListing');
var trafficRate = require('./API/trafficRate');

//Wave 2 code
// var mainRoutes = require('./routes/aptCache/index');
var packageRoutes = require('./aptCache/packageCount');
var graphRoutes = require('./aptCache/logRateData');
var dataRateData = require('./aptCache/dataRateData');
var packageAnalytics = require('./aptCache/packageAnalytics');
var repRoutes = require('./aptCache/repository');
var getInfo = require('./aptCache/getInfo');

router.use('/json/userAgent', userAgent);
router.use('/json/logListing', require('./API/logListing'));
router.use('/json/trafficRate', trafficRate);

//wave 2 code
// app.use('/', mainRoutes);
router.use('/logRateData',graphRoutes);
router.use('/dataRateData',dataRateData);
router.use('/packageCount', packageRoutes);
router.use('/packageanalytics', packageAnalytics);
router.use('/repository/mode',repRoutes);
router.use('/getInfo',getInfo);
});
//end wave 2 code
return router;
