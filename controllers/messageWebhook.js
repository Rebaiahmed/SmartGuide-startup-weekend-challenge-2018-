const processMessage = require('../helpers/processMessage').processMessage ;
const processPayload = require('../helpers/processMessage').processPayload;

module.exports = (req, res) => {

        if (req.body.object === 'page') {
            
            req.body.entry.forEach(entry => {
            entry.messaging.forEach(event => {
            console.log('event' + JSON.stringify(event))
            if (event.message && event.message.text) {
  
            processMessage(event);
            }

            else if(event.postback)
            {
                
                processPayload(event);

            }
                });
                });
            res.status(200).end();
        }
};