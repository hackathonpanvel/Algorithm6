const axios = require('axios');
const https = require('https');

// To handle first SSL certificate error
const agent = new https.Agent({
  rejectUnauthorized: false
});

module.exports.getLeads = async (req, res) => {
  // Set a query params
  // let search = 'mongodb';
  let search = req.params.search;
  // console.log(req.params.search);
  const query = `{
    leads(usingToolSlugs: ["${search}"], toolMatch: "any",
    after:"",first:5){
      count
      edges{
        node{
          companyId
          companyName
          domain
          companyTools(first:5) {
            edges {
              node {              
                tool{
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  }`;

  try {
    var leads = await axios.post(
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
    res.status(201).json({ success: true, data: leads.data.data });
  } catch (error) {
    console.log(error.message);
  }
};
