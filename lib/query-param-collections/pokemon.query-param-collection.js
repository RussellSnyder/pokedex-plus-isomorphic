"use strict";
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
var sortQueryParamsMap = new Map([
    [
        SortQueryParam.Name,
        new query_param_1.QueryParam('name', query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString),
    ],
    [
        SortQueryParam.Height,
        new query_param_1.QueryParam('height', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    ],
    [
        SortQueryParam.Weight,
        new query_param_1.QueryParam('weight', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    ],
]);
exports.sortQueryParamCollection = new query_param_collection_1.QueryParamCollection(sortQueryParamsMap);
var IntervalQueryParam;
(function (IntervalQueryParam) {
    IntervalQueryParam["Offset"] = "offset";
    IntervalQueryParam["Limit"] = "limit";
})(IntervalQueryParam = exports.IntervalQueryParam || (exports.IntervalQueryParam = {}));
var intervalQueryParamsMap = new Map([
    [
        IntervalQueryParam.Offset,
        new query_param_1.QueryParam('offset', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    ],
    [
        IntervalQueryParam.Limit,
        new query_param_1.QueryParam('limit', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber, {
            value: 10,
        }),
    ],
]);
exports.intervalQueryParamCollection = new query_param_collection_1.QueryParamCollection(intervalQueryParamsMap);
var FilterQueryParam;
(function (FilterQueryParam) {
    FilterQueryParam["Type"] = "type";
    FilterQueryParam["Generation"] = "generation";
    FilterQueryParam["HeightMin"] = "heightMin";
    FilterQueryParam["HeightMax"] = "heightMax";
})(FilterQueryParam = exports.FilterQueryParam || (exports.FilterQueryParam = {}));
var filterQueryParamsMap = new Map([
    [
        FilterQueryParam.Type,
        new query_param_1.QueryParam('type', query_param_parser_1.default.toModelStringList, query_param_parser_1.default.serializeStringList),
    ],
    [
        FilterQueryParam.Generation,
        new query_param_1.QueryParam('generation', query_param_parser_1.default.toModelNumberList, query_param_parser_1.default.serializeNumberList),
    ],
    [
        FilterQueryParam.HeightMin,
        new query_param_1.QueryParam('height-min', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    ],
    [
        FilterQueryParam.HeightMax,
        new query_param_1.QueryParam('height-max', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    ],
]);
exports.filterQueryParamCollection = new query_param_collection_1.QueryParamCollection(filterQueryParamsMap);
