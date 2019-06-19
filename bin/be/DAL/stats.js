/* eslint-disable func-names */

const storage = require("./storageRequester");

module.exports = {
    getByCompany: function (company, cb) {
        storage('GET', "/tables/alarms/rows?query_columns_specification=status,count(status)&filter=company='"+ company+ "'&group_by=status", {}, function (error, response, body) {
            // console.log("response1:"+JSON.stringify(response));
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
    },
    getMaxFailureByCompany: function (company, cb) {
        storage('GET', "/tables/alarmsbyCompany/rows?query_columns_specification=type,count(type)&filter=company='"+ company+ "' and type != 'GENERIC' &group_by=type", {}, function (error, response, body) {
            // console.log("response1:"+JSON.stringify(response));
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
    getMaxFailure: function (cb) {
        storage('GET', "/tables/alarmsbyCompany/rows?query_columns_specification=type,count(type)&filter=type != 'GENERIC' &group_by=type", {}, function (error, response, body) {
            // console.log("response2:"+JSON.stringify(response));
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
    getTimeStatsByCompany: function (company, cb) {
        storage('GET', "/tables/time_stats/rows?query_columns_specification=AVG(numberofdays)&filter=company='"+ company+ "'", {}, function (error, response, body) {
            // console.log("response1:"+JSON.stringify(response));
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
    getTimeStats: function (cb) {
        storage('GET', "/tables/time_stats/rows?query_columns_specification=AVG(numberofdays)", {}, function (error, response, body) {
            // console.log("response2:"+JSON.stringify(response));
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
    }
};
