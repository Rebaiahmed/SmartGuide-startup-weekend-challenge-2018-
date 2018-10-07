module.exports = (req, res) => {
    const hubChallenge = req.query['hub.challenge'];
   const hubMode = req.query['hub.mode'];
    const verifyTokenMatches = (req.query['hub.verify_token'] === 'crowdbotics');
   
   if (hubMode && verifyTokenMatches) {
       console.log('we are here !!' + verifyTokenMatches
    + 'hubmode' + hubMode  )
    res.status(200).send(hubChallenge);
    } else {
    res.status(403).end();
    }
   };