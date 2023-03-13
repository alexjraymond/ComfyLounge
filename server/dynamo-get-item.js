import AWS from 'aws-sdk';

// Set the region and credentials for AWS SDK
AWS.config.update({
  region: 'us-east-2',
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});

// Create a new DynamoDB instance
const dynamoDB = new AWS.DynamoDB();

// Call the getItem() method with the parameters and handle the response
export default async function getCatData() {

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
}
