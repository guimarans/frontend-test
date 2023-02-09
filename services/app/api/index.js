var api = {}
const fazenda = require('./fazenda.json');

api.ranking = function(req, res) {

    res.json(fazenda);
    
};


module.exports = api;