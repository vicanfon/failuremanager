/**
 * vf-OS relational storage service
 * This is the vf-OS service for storing relational data. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: osaiz@ikerlan.es
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */



let ApiClient = require("../../api_client");
let Error = require('../model/Error');
let ListOfStringAndError = require('../model/ListOfStringAndError');
let ViewDefinition = require('../model/ViewDefinition');
let ViewDescriptionAndError = require('../model/ViewDescriptionAndError');
let ViewRedefinition = require('../model/ViewRedefinition');

/**
* Views service.
* @module api/ViewsApi
* @version 1.0.0
*/
let ViewsApi = function() {

    /**
    * Constructs a new ViewsApi. 
    * @alias module:api/ViewsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    this.apiClient = ApiClient;
    this.init= function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addView operation.
     * @callback module:api/ViewsApi~addViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new view
     * @param {String} databaseName Database name
     * @param {module:model/ViewDefinition} viewDef View definition
     * @param {String} authorization Http Basic authorization
     * @param {module:api/ViewsApi~addViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    this.addView = function(databaseName, viewDef, authorization, callback) {
      let postBody = viewDef;

      // verify the required parameter 'databaseName' is set
      if (databaseName === undefined || databaseName === null) {
        throw new Error("Missing the required parameter 'databaseName' when calling addView");
      }

      // verify the required parameter 'viewDef' is set
      if (viewDef === undefined || viewDef === null) {
        throw new Error("Missing the required parameter 'viewDef' when calling addView");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling addView");
      }


      let pathParams = {
        'databaseName': databaseName
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Error;

      return this.apiClient.callApi(
        '/databases/{databaseName}/views', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterView operation.
     * @callback module:api/ViewsApi~alterViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alters a view definition in a given relational database.
     * @param {String} databaseName Database name
     * @param {String} viewName View name
     * @param {module:model/ViewRedefinition} viewDef View definition
     * @param {String} authorization Http Basic authorization
     * @param {module:api/ViewsApi~alterViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    this.alterView = function(databaseName, viewName, viewDef, authorization, callback) {
      let postBody = viewDef;

      // verify the required parameter 'databaseName' is set
      if (databaseName === undefined || databaseName === null) {
        throw new Error("Missing the required parameter 'databaseName' when calling alterView");
      }

      // verify the required parameter 'viewName' is set
      if (viewName === undefined || viewName === null) {
        throw new Error("Missing the required parameter 'viewName' when calling alterView");
      }

      // verify the required parameter 'viewDef' is set
      if (viewDef === undefined || viewDef === null) {
        throw new Error("Missing the required parameter 'viewDef' when calling alterView");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling alterView");
      }


      let pathParams = {
        'databaseName': databaseName,
        'viewName': viewName
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Error;

      return this.apiClient.callApi(
        '/databases/{databaseName}/views/{viewName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the describeView operation.
     * @callback module:api/ViewsApi~describeViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ViewDescriptionAndError} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a description of a view of a given relational database
     * @param {String} databaseName Database name
     * @param {String} viewName View name
     * @param {String} authorization Http Basic authorization
     * @param {module:api/ViewsApi~describeViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ViewDescriptionAndError}
     */
    this.describeView = function(databaseName, viewName, authorization, callback) {
      let postBody = null;

      // verify the required parameter 'databaseName' is set
      if (databaseName === undefined || databaseName === null) {
        throw new Error("Missing the required parameter 'databaseName' when calling describeView");
      }

      // verify the required parameter 'viewName' is set
      if (viewName === undefined || viewName === null) {
        throw new Error("Missing the required parameter 'viewName' when calling describeView");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling describeView");
      }


      let pathParams = {
        'databaseName': databaseName,
        'viewName': viewName
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ViewDescriptionAndError;

      return this.apiClient.callApi(
        '/databases/{databaseName}/views/{viewName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dropView operation.
     * @callback module:api/ViewsApi~dropViewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Drops an existing relational view
     * @param {String} databaseName Database name
     * @param {String} viewName View name
     * @param {String} authorization Http Basic authorization
     * @param {module:api/ViewsApi~dropViewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
   this.dropView = function(databaseName, viewName, authorization, callback) {
      let postBody = null;

      // verify the required parameter 'databaseName' is set
      if (databaseName === undefined || databaseName === null) {
        throw new Error("Missing the required parameter 'databaseName' when calling dropView");
      }

      // verify the required parameter 'viewName' is set
      if (viewName === undefined || viewName === null) {
        throw new Error("Missing the required parameter 'viewName' when calling dropView");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling dropView");
      }


      let pathParams = {
        'databaseName': databaseName,
        'viewName': viewName
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Error;

      return this.apiClient.callApi(
        '/databases/{databaseName}/views/{viewName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listViews operation.
     * @callback module:api/ViewsApi~listViewsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListOfStringAndError} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the list of views of a given relational database
     * @param {String} databaseName Database name
     * @param {String} authorization Http Basic authorization
     * @param {module:api/ViewsApi~listViewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListOfStringAndError}
     */
  this.listViews = function(databaseName, authorization, callback) {
      let postBody = null;

      // verify the required parameter 'databaseName' is set
      if (databaseName === undefined || databaseName === null) {
        throw new Error("Missing the required parameter 'databaseName' when calling listViews");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling listViews");
      }


      let pathParams = {
        'databaseName': databaseName
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListOfStringAndError;

      return this.apiClient.callApi(
        '/databases/{databaseName}/views', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}

module.exports = new ViewsApi();