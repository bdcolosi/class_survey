var express = require('express');
var router = express.Router();
surveyModel = require('../models/surveyModel')




/* GET home page. */
router.get('/',  async function(req, res, next) {
  //change names here to better understand what you're doing
  const classInfoData = await surveyModel.getAllTopicData();
  const statusInfo = await surveyModel.getStatusInfo();

  
  res.render('template', {
    locals:{
      title: "Welcome",
      classInfoData: classInfoData,
      statusInfo: statusInfo
    },
    partials: {
      partial: "partial-index"
    }
  });
});

router.post('/')
//still need to get POST 

module.exports = router;
