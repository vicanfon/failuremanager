/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
    get: function (cb) {
        storage('GET', "/tables/failuretypes/rows", {}, function (error, response, body) {
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
    create: function (name, cb) {
        let data = [{
            name: name
        }];
        storage('POST', "/tables/failuretypes/rows", data, function (error, response, body) {
            if (!error) {
                cb(false, { message: "Failure Type is created" })
            } else {
                cb(true, "Relational Storage Component not responding");
            }
        })
    },
    update: function (id, name, cb) {
        let data = [{
            name: name
        }];
        storage('PATCH', "/tables/failuretypes/rows?filter=id=" + id, data, function (error, response, body) {
            if (!error) {
                cb(false, { message: "Failure Type is updated" })
            } else {
                cb(true, "Relational Storage Component not responding");
            }
        })
    },
    delete: function(id, cb){
        storage('DELETE', "/tables/failuretypes/rows?filter=id=" + id, {}, function(error, response, body){
            if(!error){
                cb(false, {message: "Failure Type is deleted"})
            }else{
                cb(true, "Relational Storage Component not responding");
            }
        })
    }
};
