import AWS from 'aws-sdk';

// Set the region and credentials for AWS SDK
AWS.config.update({
  region: 'us-east-2',
  accessKeyId: 'AKIA4VNEGVXZQ5VAXK52',
  secretAccessKey: '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'
});

// Create a new DynamoDB instance
const dynamoDB = new AWS.DynamoDB();

// random # generator for what to get from DB

// Call the getItem() method with the parameters and handle the response
export default async function getCatData() {
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
