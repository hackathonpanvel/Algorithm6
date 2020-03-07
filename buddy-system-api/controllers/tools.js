const axios = require('axios');
const https = require('https');

// To handle first SSL certificate error
const agent = new https.Agent({
  rejectUnauthorized: false
});

module.exports.getToolsData = async (req, res) => {
  // Set a query params
  // let search = 'google';
  let search = req.params.search;
  // console.log(req.params.search);
  const query = `{
    tools(query: "${search}",first:1) {
      edges {
        node {
          name
          title
          slug
          canonicalUrl
          id
          imageUrl
          ossRepo
          description
          websiteUrl
        }
      }
    }
  }`;

  try {
    var tools = await axios.post(
      process.env.URL,
      {
        query
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.API_KEY
        }
      },
      {
        httpsAgent: agent
      }
    );
    res.status(201).json({ success: true, data: tools.data.data });
  } catch (error) {
    console.log(error.message);
  }
};
