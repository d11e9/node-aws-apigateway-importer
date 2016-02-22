'use strict';

module.exports = function methodResponse(content, statusCode, params) {
  var responseHeaders = content.headers && Object.keys(content.headers);

  if (responseHeaders.length) {
    responseHeaders.forEach(function forEachResponseHeaders(header) {
      params.responseParameters['method.response.header.' + header] = true;
    });
  }

  if (content.schema) {
    params.responseModels['application/json'] = content.schema.$ref.split('/').slice(-1)[0];
  }

  params.statusCode = statusCode;

  return params;
};
