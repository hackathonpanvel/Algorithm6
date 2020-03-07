const axios = require('axios');
const https = require('https');

// To handle first SSL certificate error
const agent = new https.Agent({
  rejectUnauthorized: false
});

module.exports.getEnrichment = async (req, res) => {
  // Set a query params
  let search = req.params.search;
  let url = 'https://www.mongodb.com'.replace(
    /^(?:https?:\/\/)?(?:www\.)?/i,
    ''
  );
  console.log(url);
  // console.log(req.params.search);
  const query = `{
   enrichment(domain: "${search}") {
      domain
      companyId
      companyName
      companyTools(first: 5, after: "") {
        count
        edges {
          node {
            tool {
              id
              name
            }
          }
        }
      }
    }
  }`;

  try {
    var enrichment = await axios.post(
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
    res.status(201).json({ success: true, data: enrichment.data.data });
  } catch (error) {
    console.log(error.message);
  }
};
