const API_AI_TOKEN = 'fe32ce4f220546a7900c8832405feb4e';
const apiAiClient = require('apiai')(API_AI_TOKEN ,
    {
        language: "en",
        requestSource: "fb"
      });

const sessionIds = new Map(); 

//___Object t save the params_____//
var params = {"Destination":""}
//___________________________________________________//
const FACEBOOK_ACCESS_TOKEN = 'EAAH92nZB7YqUBANhledyiaNRzTZBiTj5kmB20mdGoB2HF2LuXLWFHqxojZBkvgMjHDMUFJ6p45ZBIp0FZCyP69pzYRYeofTEN70iQgzfodgyv7DHRolOiWKdZCsfXS1OQ60wuRfHqUHcprtdYX4zgqXEyEYXQ5VZB1PgvlDQUFaEQZDZD';
const request = require('request');
const Bot = require('messenger-bot')




// Initialize Messenger
/*const messenger = new Messenger({
    pageAccessToken: 'EAAH92nZB7YqUBANhledyiaNRzTZBiTj5kmB20mdGoB2HF2LuXLWFHqxojZBkvgMjHDMUFJ6p45ZBIp0FZCyP69pzYRYeofTEN70iQgzfodgyv7DHRolOiWKdZCsfXS1OQ60wuRfHqUHcprtdYX4zgqXEyEYXQ5VZB1PgvlDQUFaEQZDZD'
  });


// here we define some listeners:
messenger.on('message', (event) => {
    // put your logic here
  });
  
  messenger.on('postback', (event) => {
    // put your logic here
  });*/





























const sendTextMessage = (senderId, text,imageUrl) => {
 request({
 url: 'https://graph.facebook.com/v2.6/me/messages',
 qs: { access_token: FACEBOOK_ACCESS_TOKEN },
 method: 'POST',
 json: {
 recipient: { id: senderId },
 message: { text },
 }//))end of json 
 });
};

const sendImageMessage = (senderId,imageUrl) => {
    console.log('sen image message !!')
    request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FACEBOOK_ACCESS_TOKEN },
    method: 'POST',
    json: {
    recipient: { id: senderId },
    "message":{
        "attachment":{
          "type":"image", 
          "payload":{
            "url":imageUrl, 
            "is_reusable":true
          }
        }
    } 
   
    }//))end of json 
    });
   };
const sendCardCompagne1Message = (senderId,imageUrl) => {
    request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FACEBOOK_ACCESS_TOKEN },
    method: 'POST',
    json: {
    recipient: { id: senderId },
    "message": {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "airline_boardingpass",
            "intro_message": "You are checked in.",
            "locale": "en_US",
            "boarding_pass": [
              {
                "passenger_name": "SMITH\/NICOLAS",
                "pnr_number": "CG4X7U",
                "seat": "74J",            
                "logo_image_url": "https:\/\/www.example.com\/en\/logo.png",
                "header_image_url": "https:\/\/www.example.com\/en\/fb\/header.png",
                "qr_code": "M1SMITH\/NICOLAS  CG4X7U nawouehgawgnapwi3jfa0wfh",
                "above_bar_code_image_url": "https:\/\/www.example.com\/en\/PLAT.png",
                "auxiliary_fields": [
                  {
                    "label": "Terminal",
                    "value": "T1"
                  },
                  {
                    "label": "Departure",
                    "value": "30OCT 19:05"
                  }
                ],
                "secondary_fields": [
                  {
                    "label": "Boarding",
                    "value": "18:30"
                  },
                  {
                    "label": "Gate",
                    "value": "D57"
                  },
                  {
                    "label": "Seat",
                    "value": "74J"
                  },
                  {
                    "label": "Sec.Nr.",
                    "value": "003"
                  }
                ],
                "flight_info": {
                  "flight_number": "KL0642",
                  "departure_airport": {
                    "airport_code": "JFK",
                    "city": "New York",
                    "terminal": "T1",
                    "gate": "D57"
                  },
                  "arrival_airport": {
                    "airport_code": "AMS",
                    "city": "Amsterdam"
                  },
                  "flight_schedule": {
                    "departure_time": "2016-01-02T19:05",
                    "arrival_time": "2016-01-05T17:30"
                  }
                }
              }
            ]
          }
        }
      }
   
    }//))end of json 
    });
   };
//____________________Send Restaurant CARD ___________________//

const sendCardCompagneMessage = (senderId,imageUrl) => {
    request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FACEBOOK_ACCESS_TOKEN },
    method: 'POST',
    json: {
    recipient: { id: senderId },
    "message": {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "airline_boardingpass",
            "intro_message": "You are checked in.",
            "locale": "en_US",
            "boarding_pass": [
              {
                "passenger_name": "Foulen ben Foulen",
                "pnr_number": "CG4X7U",
                "seat": "74J",            
                "logo_image_url": "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
                "header_image_url": "https:\/\/www.example.com\/en\/fb\/header.png",
                "qr_code": "M1SMITH\/NICOLAS  CG4X7U nawouehgawgnapwi3jfa0wfh",
                "above_bar_code_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Qrcode_wikipedia_fr_v2clean.png/480px-Qrcode_wikipedia_fr_v2clean.png",
                "auxiliary_fields": [
                  {
                    "label": "Terminal",
                    "value": "T1"
                  },
                  {
                    "label": "Departure",
                    "value": "30OCT 19:05"
                  }
                ],
                "secondary_fields": [
                  {
                    "label": "Boarding",
                    "value": "18:30"
                  },
                  {
                    "label": "Gate",
                    "value": "D57"
                  },
                  {
                    "label": "Seat",
                    "value": "74J"
                  },
                  {
                    "label": "Sec.Nr.",
                    "value": "003"
                  }
                ],
                "flight_info": {
                  "flight_number": "KL0642",
                  "departure_airport": {
                    "airport_code": "JFK",
                    "city": "Paris",
                    "terminal": "T1",
                    "gate": "D57"
                  },
                  "arrival_airport": {
                    "airport_code": "AC",
                    "city": "Tunis"
                  },
                  "flight_schedule": {
                    "departure_time": "2018-10-12T19:05",
                    "arrival_time": "2018-10-10T17:30"
                  }
                }
              }
            ]
          }
        }
      }
   
    }//))end of json 
    });
   };

const sendCarouselHotelseMessage = (senderId) => {
    request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FACEBOOK_ACCESS_TOKEN },
    method: 'POST',
    json: {
    recipient: { id: senderId },
    "message": {
        "attachment": {
        "type":"template",
          "payload": {
            "template_type":"generic",
            //"top_element_style": "compact",
            "elements": [
              {
                "title": "Golden Tulip Carthage Tunis",
                "subtitle": "Avenue de la Promenade BP 606, 2078 Gammarth, Tunisia ",
                "image_url": "https://q.bstatic.com/images/hotel/max1024x768/881/88110193.jpg",          
               
              },
              {
                "title": "The Residence Tunis",
                "subtitle": "BP 697 La Marsa, 2070 Gammarth, Tunisia",
                "image_url": "https://q.bstatic.com/images/hotel/max1024x768/645/64508965.jpg",          
               
              },
              {
                "title": "",
                "subtitle": "",
                "image_url": "",          
               
              },
              {
                "title": "",
                "subtitle": "",
                "image_url": "",          
               
              },
       
            
                      
              
            ] 
          }
        }
      }
   
    }//))end of json 
    });
   };


const sendCarouselFlightseMessage = (senderId) => {
    request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FACEBOOK_ACCESS_TOKEN },
    method: 'POST',
    json: {
    recipient: { id: senderId },
    "message": {
        "attachment": {
        "type":"template",
          "payload": {
            "template_type":"generic",
            //"top_element_style": "compact",
            "elements": [
              {
                "title": "Prices are par person ,and include all taxes and fees",
                "subtitle": "",
                "image_url": "http://static1.1.sqspcdn.com/static/f/484957/5299841/1262970948387/delta-1.jpg?token=9E9aEIGb4cbwxNnjQV1JaL9uPWU%3D",          
                "buttons":[
                  {
                    "type":"postback",
                    "title":"Book Now",
                    "payload":"book_now",
                    //"url":"https://www.paypal.com/us/home",
                  }
                ]
              },
              {
                "title": "Prices are par person ,and include all taxes and fees",
                "subtitle": "",
                "image_url": "https://cdn-images-1.medium.com/max/800/0*S0L1bi5r2w02pyWY.png",          
               
              },
                            
              

              
              
       
            
  
            ],
           
          }
        }
      }
   
    }//))end of json 
    });
   };   










//____________________________________________________________//


const sendButtonMessage = (senderId,imageUrl) => {


    request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FACEBOOK_ACCESS_TOKEN },
    method: 'POST',
    json: {
    recipient: { id: senderId },
    "message":{
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"button",
            "text":"What do you want to do next?",
            "buttons":[
              {
                "type":"web_url",
                "url":imageUrl,
                "title":"Visit Messenger"
              },
              
            ]
          }
        }
      }
   
    }//))end of json 
    });
   };






   const sendButtonMessageAskTrip = (senderId) => {


    request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: FACEBOOK_ACCESS_TOKEN },
    method: 'POST',
    json: {
    recipient: { id: senderId },
    "message":{
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"button",
            "text":"Are you planning for a trip ?",
            "buttons":[
              {
                "type":"postback",
                "title":"Yes",
                "payload":"yes_trip"
            },
            {
                "type":"postback",
                "title":"No",
                "payload":"no_trip"
            }
              
            ]
          }
        }
      }
   
    }//))end of json 
    });
   };


//____template function weeks_____________//

const sendButtonMessageAskPeriod = (senderId) => {


  request({
  url: 'https://graph.facebook.com/v2.6/me/messages',
  qs: { access_token: FACEBOOK_ACCESS_TOKEN },
  method: 'POST',
  json: {
  recipient: { id: senderId },
  "message":{
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"button",
          "text":"How many days would you like your trip to be? Give us a choice :)",
          "buttons":[
            {
              "type":"postback",
              "title":"1 week ",
              "payload":"period_one_week"
          },
          {
              "type":"postback",
              "title":"2 week ",
              "payload":"period_two_week"
          },
          {
            "type":"postback",
            "title":"3 week ",
            "payload":"period_three_week"
        }
            
          ]
        }
      }
    }
 
  }//))end of json 
  });
 };









 const sendCardSearchFlightMessage = (senderId) => {
  request({
  url: 'https://graph.facebook.com/v2.6/me/messages',
  qs: { access_token: FACEBOOK_ACCESS_TOKEN },
  method: 'POST',
  json: {
  recipient: { id: senderId },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
           {
            "title":"Search Flights",
            "image_url":"https://imgak.mmtcdn.com/pwa-hlp/assets/img/hlp/deals/ic-flight-13.jpg",
            "subtitle":"cheap flight ticket aroudn the world with our partners.",
          
            "buttons":[
              {
                "type":"postback",
                "title":"Flight",
                "payload":"flight"
              }             
            ]      
          }
        ]
      }
    }
  }
 
  }//))end of json 
  });
 };





 //____template function weeks_____________//

const sendButtonTypeFlight= (senderId) => {


  request({
  url: 'https://graph.facebook.com/v2.6/me/messages',
  qs: { access_token: FACEBOOK_ACCESS_TOKEN },
  method: 'POST',
  json: {
  recipient: { id: senderId },
  "message":{
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"button",
          "text":" Choose one :)",
          "buttons":[
            {
              "type":"postback",
              "title":"One Way ",
              "payload":"one_way"
          },
          {
              "type":"postback",
              "title":"Round trip",
              "payload":"round_trip"
          },
         
            
          ]
        }
      }
    }
 
  }//))end of json 
  });
 };




const sendButtonConfirmFlight =(senderId) => {


  request({
  url: 'https://graph.facebook.com/v2.6/me/messages',
  qs: { access_token: FACEBOOK_ACCESS_TOKEN },
  method: 'POST',
  json: {
  recipient: { id: senderId },
  "message":{
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"button",
          "text":" Please Confirm  :)",
          "buttons":[
            {
              "type":"postback",
              "title":"Yes ",
              "payload":"yes_confirm"
          },
          {
              "type":"postback",
              "title":"No",
              "payload":"no_confirm"
          },
         
            
          ]
        }
      }
    }
 
  }//))end of json 
  });
 };


//______________________________________________________________//

const sendCardNoMessage = (senderId) => {
  request({
  url: 'https://graph.facebook.com/v2.6/me/messages',
  qs: { access_token: FACEBOOK_ACCESS_TOKEN },
  method: 'POST',
  json: {
  recipient: { id: senderId },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
           {
            "title":"Search Hotels",
            "image_url":"https://imgak.mmtcdn.com/pwa-hlp/assets/img/hlp/deals/ic-flight-13.jpg",
            "subtitle":"cheap flight ticket aroudn the world with our partners.",
          
            "buttons":[
              {
                "type":"postback",
                "title":"Search Hotels",
                "payload":"search_hotels"
              }             
            ]      
          },
          {
            "title":"Search Flights",
            "image_url":"",
            "subtitle":"cheap flight ticket aroudn the world with our partners.",
          
            "buttons":[
              {
                "type":"postback",
                "title":"Search Flights",
                "payload":"search_flights"
              }             
            ]      
          },
          {
            "title":"Search Activities",
            "image_url":"https://fanack.com/wp-content/uploads/2014/10/tourism_tunisia_tourists-camel_800px_shutterstock_138300755_582038a245.jpg",
            "subtitle":"cheap flight ticket aroudn the world with our partners.",
          
            "buttons":[
              {
                "type":"postback",
                "title":"Search Activities",
                "payload":"search_activities"
              }             
            ]      
          },
          {
            "title":"Manage my points ",
            "image_url":"https://ichef.bbci.co.uk/images/ic/960xn/p04h5n1h.png",
            "subtitle":"cheap flight ticket aroudn the world with our partners.",
          
            "buttons":[
              {
                "type":"postback",
                "title":"Manage points",
                "payload":"manage_points"
              }             
            ]      
          }
        ]
      }
    }
  }
 
  }//))end of json 
  });
 };



 const sendVideoMessage = (senderId) => {
  request({
  url: 'https://graph.facebook.com/v2.6/me/messages',
  qs: { access_token: FACEBOOK_ACCESS_TOKEN },
  method: 'POST',
  json: {
  recipient: { id: senderId },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"open_graph",
        "elements":[
          {
           "url":"https://www.youtube.com/watch?v=sHORcz5nqIc"    
         }
       ]
     
      }
    }
  }
          
    
 
  }//))end of json 
  });
 };




 const sendCarouselRestaurantsMessage = (senderId) => {
  request({
  url: 'https://graph.facebook.com/v2.6/me/messages',
  qs: { access_token: FACEBOOK_ACCESS_TOKEN },
  method: 'POST',
  json: {
  recipient: { id: senderId },
  "message": {
      "attachment": {
      "type":"template",
        "payload": {
          "template_type":"generic",
          //"top_element_style": "compact",
          "elements": [
            {
              "title": "Restaurant 1",
              "subtitle": "AL MAZAR",
              "image_url": "https://media-cdn.tripadvisor.com/media/photo-s/05/37/e5/bf/restaurant-al-mazar.jpg",          
             
            },
            {
              "title": "Restaurant 2",
              "subtitle": "Mian Miam",
              "image_url": "https://media-cdn.tripadvisor.com/media/photo-s/0a/9a/c9/24/mian-mian.jpg",          
             
            },
                          
            

            
            
     
          

          ],
         
        }
      }
    }
 
  }//))end of json 
  });
 };






exports.processMessage = function(event){
 const senderId = event.sender.id;
 let message = ' ';
 if(event.message)
 {
  console.log('there is message' + event.message.text )
  message =event.message.text ;
 }


 const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'crowdbotics_bot'});

 

apiaiSession.on('response', (response) => {
 const result = response.result.fulfillment.speech;
 /*const image = response.result.fulfillment.messages[0].imageUrl;

console.log('structure !!' + JSON.stringify(response.result))
console.log('image' + response.result.fulfillment.messages[0].imageUrl)*/


switch (response.result.metadata.intentName)
{
    

case 'Destination':
    console.log('intent  Dstination')
    
    if(response.result.parameters.Destination)
    {
        console.log('the params is' + response.result.parameters.Destination )
        params.Destination = response.result.parameters.Destination
        console.log("will be0" + JSON.stringify(params))
    }

    sendTextMessage(senderId, result);
    break;


  case 'Default Welcome Intent':
    console.log('Default Welcome Intent')
    //console.log('repsonse' + response.result.fulfillment.speech)
    sendTextMessage(senderId, result);
    //sendTextMessage(senderId, 'Are you planning for a trip ?');
    sendButtonMessageAskTrip(senderId)
    break; 

  case 'depart_location':
    console.log('depart location ' + response.result.fulfillment.speech)
    if(response.result.parameters.depart_location)
    {
        console.log('the params depart_location is' + response.result.parameters.depart_location )
        params.depart_location = response.result.parameters.depart_location
        console.log("will be0" + JSON.stringify(params))
        sendTextMessage(senderId,"Great! Let's get started on your flight search. Where are you flying To ?");
    }
   
    break;  
    
    
  case 'Depart':
    console.log('Depart intent !!' +response.result.fulfillment.speech)
    sendTextMessage(senderId, result);
    
    if(response.result.parameters.depart)
    {  console.log("we are heree depart " + response.result.parameters.depart )
        sendButtonTypeFlight(senderId)
        params.depart =response.result.parameters.depart
        console.log("params" + JSON.stringify(params))
    }
    break;
    
    
  case 'show_monuments':
    console.log('intent show_monuments')
    sendVideoMessage(senderId)
    break;


  case 'show_restaurants':
    console.log('intent show_restaurants')
    sendCarouselRestaurantsMessage(senderId)
    break;  

   
default:
     console.log('defautl no specific message')
     sendTextMessage(senderId, result);
     //sendCarouselHotelseMessage(senderId, 'https://media-cdn.tripadvisor.com/media/photo-s/10/1f/fd/2b/vue-de-la-chambre.jpg');
     //messenger.handle(message);
     


}






 });








apiaiSession.on('error', error => console.log("error api"+error));
 apiaiSession.end();
};










//___function receiveMessage___________//







   











//__________________________________________________________//





exports.processPayload = function (event){
const senderId = event.sender.id;

if(event.postback)
{
console.log('the payload is' + event.postback.payload)

switch(event.postback.payload) {
  case 'yes_trip':
      //
     //sendTextMessage(senderId, 'How many days would you like your trip to be? Give us any number between 1-7.');
     sendButtonMessageAskPeriod(senderId)
      break;
  case 'no_trip':
  //sendTextMessage(senderId,'atw netlhe wbik :)');
  sendCardNoMessage(senderId);
      //
      break;

  case 'period_one_week':
  sendTextMessage(senderId,"Great !, let's start with your location, where are you from ?");
  //sendCardSearchFlightMessage(senderId)
  params.period ="One Week"
          //
        break;
  case 'period_two_week':
  //sendTextMessage(senderId,'atw netlhe wbik :)');
  sendTextMessage(senderId,"Great !, let's start with your location, Where are you flying from?");
  //sendCardSearchFlightMessage(senderId)
  params.period = "Two Weeks"
          //
        break; 
        
  case 'period_three_week':
        //sendTextMessage(senderId,'atw netlhe wbik :)');
        //flight
        sendTextMessage(senderId,"Great !, Where are you flying from?");
        //sendCardSearchFlightMessage(senderId)
        params.period = "Three Weeks"
        break;
  case 'flight':
        //sendTextMessage(senderId,'atw netlhe wbik :)');
        //flight
        sendTextMessage(senderId,"Great! Let's get started on your flight search. Where are you flying from?");
        break; 
        
  case 'one_way':
        //sendTextMessage(senderId,'atw netlhe wbik :)');
        //flight
        params.flight = "One way"
        var msg = "OK. I have you travelling from Paris , France to  Tunisia leaving on  For period of time one week  Is that right?"
        console.log("msg" + msg)
        sendTextMessage(senderId,msg);
        sendButtonConfirmFlight(senderId)
        
        break; 
  
  case 'round_trip':
        //sendTextMessage(senderId,'atw netlhe wbik :)');
        //flight
        var msg = "OK. I have you travelling from"+ params.get("depart") + "to" + params.get("Destination")  + "leaving on " + +"For period of time" +  params.get("period")+ "Is that right?"
        console.log("the msg is" + msg)
        sendTextMessage(senderId,"Round trip");
        params.set("flight","Round trip ")
        sendButtonConfirmFlight(senderId)
        break;  
        
        
  case 'yes_confirm':
        //sendTextMessage(senderId,'atw netlhe wbik :)');
        //flight
        sendTextMessage(senderId,"I'll have some options for you shortly.");
        sendCarouselFlightseMessage(senderId)
        
        break;
        
  case 'no_confirm':
        //sendTextMessage(senderId,'atw netlhe wbik :)');
        //flight
        sendTextMessage(senderId,"Great! Let's get started on your flight search. Where are you flying to?");
        sendCarouselFlightseMessage(senderId)
        break; 
        
        
  case 'manage_points':
        sendTextMessage(senderId,"Manage points !!");
        break;  
  case 'search_activities':
        sendTextMessage(senderId,"Manage activities !!");
        break;  
  case 'search_flights':
        sendTextMessage(senderId,"search_flights !!");
        break; 
  case 'search_hotels':
        sendTextMessage(senderId,"search_hotels !!");
        break;
        
  case 'book_now':
        //sendTextMessage(senderId,"search_hotels !!");
        sendCardCompagneMessage(senderId)
        break;       
        


  default:
      console.log('no value !!')
}






}






 

}





















