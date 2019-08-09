const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();
require('./database');

//configuraciones
//configuraciones del puerto
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(express.json());
app.use(cors());

app.use(express.static('./dist/mean-lunadequeso'));

app.get('/',(req,res ) => {
    res.sendFile(path.join(__dirname,'./dist/mean-lunadequeso/server/index.js'));
})

//routes
app.use(process.env.URI_PURCHASE,require('./routes/purchase.routes'));
app.use(process.env.URI_DISCOUNTS,require('./routes/discount.routes'));
app.use(process.env.URI_CLIENTS,require('./routes/client.routes'));
app.use(process.env.URI_PROMOTIONS, require('./routes/promotion.routes'));
//app.use(process.env.URI_URI_TEAMS, require('./routes/team.routes'));



//starting the server
app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));
});