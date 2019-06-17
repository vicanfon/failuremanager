let sdk = require('../../../bin/libs/vfos-sdk/sdk-include');
var express = require('express');
var router = express.Router();
var request = require('request');


let vfosMessagingPubsub = sdk.messaging;
var broker = sdk.config.MESSAGING_PUBSUB.SERVER_URL;
var userName = "archiver1";
var domain = "pt.vfos";
var routingKeys = ["#"];


/**
 * 
 *  begging of section to archive messaging from a topic
 */
var communications = new vfosMessagingPubsub(broker, userName, domain, routingKeys);
var Topic = "pt.vfos.channel.test";
let listOfGettingMessages = [];



function messageHandler(msg) {
	topic = msg.routingKey;
	// pt.vfos.drivers.opc_ua.d1.s1
	// console.log('topic ', topic);
	message = JSON.parse(msg.content);
	/*
	 * 
	 message._did
	 message._sid
	 message.data  176-2
	 message.units
	 message.timestamp
	 message.status
	 */
	/*
	 timestamp: message.timestamp
     status: "Detected"
     code: "1"
     type: "1"
     machine: "message._did"
     company: "sis"
     origin: "automatic"
	 */
	// console.log("> messageHandler: msg.content = \"" + msg.content.toString() + "\"");
	
	  let options = {
    url: 'http://ec2-35-181-152-100.eu-west-3.compute.amazonaws.com/vfrelstorage/vfos/rel/1.0.5/databases/failuremanager/tables/alarms/rows',
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Basic cG9zdGdyZXM6dmZvcw=="

    },
    body: JSON.stringify([{
	 timestamp: message.timestamp,
     status: "Detected",
     idalarmtype: message.data,
     idfailuretype: 1,
     idmachine: message._did,
     company: "sis",
     origin: "automatic",
     comment: ""}])
  }
  
  /*
   body: JSON.stringify([{
	 timestamp: message.timestamp,
     status: "Detected",
     code: 1,
     type: 1,
     machine: message._did,
     company: "sis",
     origin: "automatic"}])
   */
  
  request(options, function (err, answer) {
      console.log("answer:"+JSON.stringify(answer));
  });

}

communications.registerPublicationReceiver(messageHandler);
communications.registerPrivateMessageReceiver(messageHandler);
/**
 * end of archive section
 */


 /**
  * 	
  * route section 
  * 
  */

  /**
   * change the topic you're listening
   */
router.route('/change_topic').post(
	function (req, res, next) {

		console.log('body is ', req.body)
		Topic = req.body.topic;
		console.log('TOPIC is ',Topic )
		/* Clear and recreate the interval
		 */
		clearInterval(myTimer);
		myTimer = setInterval(sendMessageViaMessage, 1000 * 2);
		res.json({
			newTopic: Topic
		})

	}
)

/**
 * get the messages that came via pubsub
 */
router.route('/messages').get(
	function (req, res, next) {
		let data = JSON.parse(JSON.stringify(listOfGettingMessages));
		listOfGettingMessages = []
		res.json({
			messages: data
		})
	}
)


module.exports = (app) => router;