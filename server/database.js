const mongoose = require('mongoose');

mongoose.connect(process.env.URI_BD, {
    useNewUrlParser:true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));