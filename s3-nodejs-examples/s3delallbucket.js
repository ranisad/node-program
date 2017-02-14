
var AWS = require('aws-sdk');

var s3 = new AWS.S3();

var bucketName = 'admatic.jan17.new123';

function emptyBucket(){
  var params = {
    Bucket: bucketName
  };

  s3.listObjects(params, function(err, data) {
    if (err) {
       console.log(err);
       return;
    }
    if (data.Contents.length == 0) {
      console.log("no contents");
      return;
    }

    params = {Bucket: bucketName};
    params.Delete = {Objects:[]};

    data.Contents.forEach(function(content) {
      console.log(content.Key);
      params.Delete.Objects.push({Key: content.Key});
    });

    s3.deleteObjects(params, function(err, data) {
      if (err) console.log(err);
      emptyBucket();
    });
  });
}

emptyBucket();
