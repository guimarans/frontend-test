/* Código para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
        
    app.route('/ranking')
        .get(api.ranking);      
};