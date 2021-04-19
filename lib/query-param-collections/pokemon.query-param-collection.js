"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterQueryParamCollection = exports.FilterQueryParam = exports.intervalQueryParamCollection = exports.IntervalQueryParam = exports.sortQueryParamCollection = exports.SortQueryParam = void 0;
var query_param_parser_1 = require("../helpers/query-param-parser");
var query_param_1 = require("../models/query-param");
var query_param_collection_1 = require("../models/query-param-collection");
var SortQueryParam;
(function (SortQueryParam) {
    SortQueryParam["Name"] = "name";
    SortQueryParam["Height"] = "height";
    SortQueryParam["Weight"] = "weight";
})(SortQueryParam = exports.SortQueryParam || (exports.SortQueryParam = {}));
var sortQueryParams = (_a = {},
    _a[SortQueryParam.Name] = new query_param_1.QueryParam('name', query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString),
    _a[SortQueryParam.Height] = new query_param_1.QueryParam('height', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _a[SortQueryParam.Weight] = new query_param_1.QueryParam('weight', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _a);
exports.sortQueryParamCollection = new query_param_collection_1.QueryParamCollection(sortQueryParams);
var IntervalQueryParam;
(function (IntervalQueryParam) {
    IntervalQueryParam["Offset"] = "offset";
    IntervalQueryParam["Limit"] = "limit";
})(IntervalQueryParam = exports.IntervalQueryParam || (exports.IntervalQueryParam = {}));
var intervalQueryParams = (_b = {},
    _b[IntervalQueryParam.Offset] = new query_param_1.QueryParam('offset', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _b[IntervalQueryParam.Limit] = new query_param_1.QueryParam('limit', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber, {
        value: 10
    }),
    _b);
exports.intervalQueryParamCollection = new query_param_collection_1.QueryParamCollection(intervalQueryParams);
var FilterQueryParam;
(function (FilterQueryParam) {
    FilterQueryParam["Type"] = "type";
    FilterQueryParam["Ability"] = "ability";
    FilterQueryParam["Move"] = "move";
    FilterQueryParam["Generation"] = "generation";
    FilterQueryParam["HeightMin"] = "heightMin";
    FilterQueryParam["HeightMax"] = "heightMax";
})(FilterQueryParam = exports.FilterQueryParam || (exports.FilterQueryParam = {}));
var filterQueryParamsMap = (_c = {},
    _c[FilterQueryParam.Type] = new query_param_1.QueryParam('type', query_param_parser_1.default.toModelStringList, query_param_parser_1.default.serializeStringList),
    _c[FilterQueryParam.Generation] = new query_param_1.QueryParam('generation', query_param_parser_1.default.toModelNumberList, query_param_parser_1.default.serializeNumberList),
    _c[FilterQueryParam.Generation] = new query_param_1.QueryParam('generation', query_param_parser_1.default.toModelNumberList, query_param_parser_1.default.serializeNumberList),
    _c[FilterQueryParam.HeightMin] = new query_param_1.QueryParam('height-min', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.HeightMax] = new query_param_1.QueryParam('height-max', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c);
exports.filterQueryParamCollection = new query_param_collection_1.QueryParamCollection(filterQueryParamsMap);
