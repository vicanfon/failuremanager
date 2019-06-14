/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
    getByCompany: function (company, cb) {
        storage('GET', "/tables/interventions_alarms/rows?filter=company=" + "'" + company+ "'", {}, function (error, response, body) {
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
    getById: function(id, cb){
        storage('GET', "/tables/interventions_alarms/rows?filter=id=" + "'" + alarmID+ "'", {}, function (error, response, body) {
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
    create: function (solution, comment, timestamp, duration, status, cb) {
        let data = [{
            solution: solution,
            comment: comment,
            timestamp: timestamp,
            duration: duration,
            status: status
        }];
        storage('POST', "/tables/interventions/rows", data, function (error, response, body) {
            if (!error) {
                cb(false, { message: "Intervention is created" })
            } else {
                cb(true, "Relational Storage Component not responding");
            }
        })
    },
    update: function (id, solution, comment, timestamp, duration, status, cb) {
        let data = {
            solution: solution,
            comment: comment,
            timestamp: timestamp,
            duration: duration,
            status: status
        };
        storage('PATCH', "/tables/interventions/rows?filter=id='" + id + "'", data, function (error, response, body) {
            if (!error) {
                cb(false, { message: "Intervention is updated" })
            } else {
                cb(true, "Relational Storage Component not responding");
            }
        })
    },
    delete: function(id, cb){
        storage('DELETE', "/tables/interventions/rows?filter=id='" + id + "'", {}, function(error, response, body){
            if(!error){
                cb(false, {message: "Intervention is deleted"})
            }else{
                cb(true, "Relational Storage Component not responding");
            }
        })
    }
};
