'use strict';

module.exports = function integrationResponse(content, selectionPattern, params) {
  params.statusCode = content.statusCode;
  params.responseTemplates = content.responseTemplates || {};
  params.selectionPattern = selectionPattern === 'default' ? '-' : selectionPattern;

  return params;
};
