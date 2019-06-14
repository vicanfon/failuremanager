/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
  get: function (cb) {
    storage('GET', "/tables/alarmtypes/rows", {}, function (error, response, body) {
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
  create: function (code, name, cb) {
    let data = [{
      code: code,
      name: name
    }];
    storage('POST', "/tables/alarmtypes/rows", data, function (error, response, body) {
      if (!error) {
        cb(false, { message: "Alarm Type is created" })
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  update: function (code, name, cb) {
    let data = {
      name: name
    };
    storage('PATCH', "/tables/alarmtypes/rows?filter=code='" + code + "'", data, function (error, response, body) {
      if (!error) {
        cb(false, { message: "Alarm Type is updated" })
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  delete: function(code, cb){
    storage('DELETE', "/tables/alarmtypes/rows?filter=code='" + code +"'", {}, function(error, response, body){
      if(!error){
        cb(false, {message: "Alarm Type is deleted"})
      }else{
        cb(true, "Relational Storage Component not responding");
      }
    })
  }
};
