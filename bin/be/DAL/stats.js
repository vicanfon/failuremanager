/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
    getByCompany: function (company, cb) {
        storage('GET', "/tables/alarms/rows?query_columns_specification=status,count(status)&filter=company='"+ company+ "'&group_by=status", {}, function (error, response, body) {
            console.log("response1:"+JSON.stringify(response));
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
    get: function (cb) {
        storage('GET', "/tables/alarms/rows?query_columns_specification=status,count(status)&group_by=status", {}, function (error, response, body) {
            console.log("response2:"+JSON.stringify(response));
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
    }
};
