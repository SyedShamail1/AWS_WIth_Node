const s3Service = require('./utils/aws-s3');

let s3Client = new s3Service('your-region', 'your-access-key', 'your-secret-key');

//For Creating New Bucket
s3Client.createS3Bucket();

//Upload File
s3Client.uploadObject();

//Delete File
s3Client.deleteObject();

//Delete Bucket
s3Client.deleteBucket();