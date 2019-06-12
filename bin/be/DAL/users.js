/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
  get: function (cb) {
    storage('GET', "/tables/users/rows", {}, function (error, response, body) {
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
  create: function (mail, name, role, company, cb) {
    let data = [{
      mail: mail,
      name: name,
      role: role,
      company: company
    }];
    storage('POST', "/tables/users/rows", data, function (error, response, body) {
      if (!error) {
        cb(false, { message: "User is created" })
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  update: function (mail, name, role, company, cb) {
    let data = [{
      name: name,
      role: role,
      company: company
    }];
    storage('PATCH', "/tables/users/rows?filter=mail=" + mail, data, function (error, response, body) {
      if (!error) {
        cb(false, { message: "User is updated" })
      } else {
        cb(true, "Relational Storage Component not responding");
      }
    })
  },
  delete: function(mail, cb){
    storage('DELETE', "/tables/users/rows?filter=mail=" + mail, {}, function(error, response, body){
      if(!error){
        cb(false, {message: "User is deleted"})
      }else{
        cb(true, "Relational Storage Component not responding");
      }
    })
  }
};
