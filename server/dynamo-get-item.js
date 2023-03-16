const AWS = require('aws-sdk');

// make an endpoint
//

// Set the region and credentials for AWS SDK
AWS.config.update({
  region: 'us-east-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// Create a new DynamoDB instance
const dynamoDB = new AWS.DynamoDB();

// Call the getItem() method with the parameters and handle the response
module.exports.getCatData = async function () {

  // random # generator for what to get from DB
  const random = (min, max) => {
    const output = Math.floor(Math.random() * (max - min)) + min;
    return output;
  };

  const params = {
    TableName: 'comfyloungecats',
    Key: {
      catId: { S: `cat:${random(1, 34)}` }
    }
  };

  try {
    const data = await dynamoDB.getItem(params).promise();
    const imgUrl = data.Item.url.S;
    return imgUrl;
  } catch (error) {
    console.error(error);
  }
};
