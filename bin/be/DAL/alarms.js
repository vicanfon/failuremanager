/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
  getByCompany: function (company, cb) {
    storage('GET', "/tables/alarmsbyCompany/rows?filter=company=" + "'" + company+ "'", {}, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) {
          json = JSON.parse(response.body);
          cb(false, json.list_of_rows);
        } else {
          json = JSON.parse(response.body);
          cb(false, json.message);
        }
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  getById: function(alarmID, cb){
    storage('GET', "/tables/alarmsbyCompany/rows?filter=id=" + "'" + alarmID+ "'", {}, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) {
          json = JSON.parse(response.body);
          cb(false, json.list_of_rows[0]);
        } else {
          json = JSON.parse(response.body);
          cb(false, json.message);
        }
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  get: function(cb){
    storage('GET', "/tables/alarmsbyCompany/rows?filter=status!='Detected'", {}, function (error, response, body) {
      if (!error) {
        if (response.statusCode == 200) {
          json = JSON.parse(response.body);
          cb(false, json.list_of_rows);
        } else {
          json = JSON.parse(response.body);
          cb(false, json.message);
        }
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  updateStatus: function(alarmId, newStatus,cb){
    storage('PATCH', "/tables/alarms/rows?filter=id='" + alarmId + "'", {status: newStatus}, function(error, response, body){
      if(!error){
        cb(false, {message: "Alarm is updated"})
      }else{
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  create: function (timestamp, status, code, name, type, machine, company, origin, comment, cb) {
    let data = [{
      timestamp: timestamp,
      status: status,
      idAlarmType: code,
      idFailureType: type,
      idMachine: machine,
      company: company,
      origin: origin,
      comment: comment
    }];
    storage('POST', "/tables/alarms/rows", data, function (error, response, body) {
      if (!error) {
        cb(false, { message: "Alarm is created" })
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  update: function (id, timestamp, status, code,type, machine, company, origin, comment, cb) {
    let data = {
      timestamp: timestamp,
      status: status,
      idAlarmType: code,
      idFailureType: type,
      idMachine: machine,
      company: company,
      origin: origin,
      comment: comment
    };
    storage('PATCH', "/tables/alarms/rows?filter=id='" + id + "'", data, function (error, response, body) {
      if (!error) {
        cb(false, { message: "Alarm is updated" })
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  delete: function(id, cb){
    storage('DELETE', "/tables/alarms/rows?filter=id='" + id + "'", {}, function(error, response, body){
      if(!error){
        cb(false, {message: "Alarm is deleted"})
      }else{
        cb(true, "Relational Storage Component not responding");
      }
    })
  }
};
