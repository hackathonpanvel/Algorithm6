const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Body Parser
app.use(express.json());

// Route files
const leads = require('./routes/leads');
const enrichment = require('./routes/enrichment');
const tools = require('./routes/tools');

// Setup a config file
dotenv.config({ path: './dotenv/config.env' });

// Handle the first certificate ssl error
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Mount Routers
app.use('/api/leads', leads);
app.use('/api/enrichment', enrichment);
app.use('/api/tools', tools);

// Run the app
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
