const AWS = require('aws-sdk');

module.exports = class AWSS3Service{

    constructor(region, accesskey, secretkey){
        this.region = region;
        this.accesskey = accesskey;
        this.secretkey = secretkey;
    }
    
    getS3Client(){
        return new AWS.S3({
            region: this.region,
            apiVersion: 'latest',
            credentials: {
              accessKeyId: this.accesskey,
              secretAccessKey: this.secretkey
            }
        })
    }

    createS3Bucket(){
        let s3Client = this.getS3Client();

        s3Client.createBucket({
            Bucket: 'sms-bucket-from-node',

        }, (error, success) => {
                if(error)
                    console.log(error);

                console.log(success);
        })
    }

    uploadObject(){
        let s3Client = this.getS3Client();

        s3Client.putObject({
            Bucket: 'sms-bucket-from-node',
            Key: 'mt-txt-file.txt',
            Body: Buffer('This is my file')

        }, (error, success) => {
                if(error)
                    console.log(error);

                console.log(success);
        })
    }

    deleteObject(){
        let s3Client = this.getS3Client();

        s3Client.deleteObject({
            Bucket: 'sms-bucket-from-node',
            Key: 'mt-txt-file.txt',

        }, (error, success) => {
                if(error)
                    console.log(error);

                console.log(success);
        })
    }

    deleteBucket(){
        let s3Client = this.getS3Client();

        s3Client.deleteBucket({
            Bucket: 'sms-bucket-from-node',

        }, (error, success) => {
                if(error)
                    console.log(error);

                console.log(success);
        })
    }
}
