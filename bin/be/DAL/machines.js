/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
    get: function (cb) {
        console.log("getting here");
        storage('GET', "/tables/machines/rows", {}, function (error, response, body) {
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
        storage('POST', "/tables/machines/rows", data, function (error, response, body) {
            if (!error) {
                cb(false, { message: "Machine is created" })
            } else {
                cb(true, "Relational Storage Component not responding");
            }
        })
    },
    update: function (id, name, cb) {
        let data = {
            name: name
        };
        storage('PATCH', "/tables/machines/rows?filter=id='" + id +"'", data, function (error, response, body) {
            if (!error) {
                cb(false, { message: "Machine is updated" })
            } else {
                cb(true, "Relational Storage Component not responding");
            }
        })
    },
    delete: function(id, cb){
        storage('DELETE', "/tables/machines/rows?filter=id='" + id +"'", {}, function(error, response, body){
            console.log("message:"+JSON.stringify(response));
            if(!error){
                cb(false, {message: "Machine is deleted"})
            }else{
                cb(true, "Relational Storage Component not responding");
            }
        })
    }
};
