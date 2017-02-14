var AWS = require('aws-sdk');

var s3 = new AWS.S3();

// Bucket names must be unique across all S3 users

var params = {
  Bucket: 'admatic.jan17.new123', /* required */
  Delete: { /* required */
    Objects: [ /* required */
      {
        Key: 'bigDataTraining.IN_-300x65.png' /* required */
      }
      /* more items */
    ]
  }
};

s3.deleteObjects(params, function(err, data) {

  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the objects");
  }

});
