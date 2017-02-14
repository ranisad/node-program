var AWS = require('aws-sdk');

var s3 = new AWS.S3();

// Bucket names must be unique across all S3 users

var myBucket = 'admatic.jan17.new123';

s3.deleteBucket({Bucket: myBucket}, function(err, data) {

  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the bucket");
  }

});
