"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterQueryParamCollection = exports.FilterQueryParam = exports.intervalQueryParamCollection = exports.intervalQueryParams = exports.IntervalQueryParam = exports.sortQueryParamCollection = exports.SortQueryParam = void 0;
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
exports.intervalQueryParams = (_b = {},
    _b[IntervalQueryParam.Offset] = new query_param_1.QueryParam('offset', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _b[IntervalQueryParam.Limit] = new query_param_1.QueryParam('limit', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber, {
        value: 10
    }),
    _b);
exports.intervalQueryParamCollection = new query_param_collection_1.QueryParamCollection(exports.intervalQueryParams);
var FilterQueryParam;
(function (FilterQueryParam) {
    FilterQueryParam["Type"] = "type";
    FilterQueryParam["Ability"] = "ability";
    FilterQueryParam["Move"] = "move";
    FilterQueryParam["IsDefault"] = "isdefault";
    FilterQueryParam["Generation"] = "generation";
    FilterQueryParam["HpMin"] = "hpMin";
    FilterQueryParam["HpMax"] = "hpMax";
    FilterQueryParam["SpeedMin"] = "speedmin";
    FilterQueryParam["SpeedMax"] = "speedmax";
    FilterQueryParam["AttackMin"] = "attackmin";
    FilterQueryParam["AttackMax"] = "attackmax";
    FilterQueryParam["DefenseMin"] = "defensemin";
    FilterQueryParam["DefenseMax"] = "defensemax";
    FilterQueryParam["SpecialAttackMin"] = "specialattackmin";
    FilterQueryParam["SpecialAttackMax"] = "specialattackmax";
    FilterQueryParam["SpecialDefenseMin"] = "specialdefensemin";
    FilterQueryParam["SpecialDefenseMax"] = "specialdefensemax";
    FilterQueryParam["HeightMin"] = "heightmin";
    FilterQueryParam["HeightMax"] = "heightmax";
    FilterQueryParam["WeightMin"] = "weightmin";
    FilterQueryParam["WeightMax"] = "weightmax";
})(FilterQueryParam = exports.FilterQueryParam || (exports.FilterQueryParam = {}));
var filterQueryParamsMap = (_c = {},
    _c[FilterQueryParam.Type] = new query_param_1.QueryParam(FilterQueryParam.Type, query_param_parser_1.default.toModelStringList, query_param_parser_1.default.serializeStringList),
    _c[FilterQueryParam.Ability] = new query_param_1.QueryParam(FilterQueryParam.Ability, query_param_parser_1.default.toModelStringList, query_param_parser_1.default.serializeStringList),
    _c[FilterQueryParam.Move] = new query_param_1.QueryParam(FilterQueryParam.Move, query_param_parser_1.default.toModelStringList, query_param_parser_1.default.serializeStringList),
    _c[FilterQueryParam.Generation] = new query_param_1.QueryParam(FilterQueryParam.Generation, query_param_parser_1.default.toModelNumberList, query_param_parser_1.default.serializeNumberList),
    _c[FilterQueryParam.IsDefault] = new query_param_1.QueryParam(FilterQueryParam.IsDefault, query_param_parser_1.default.toModelBoolean, query_param_parser_1.default.serializeBoolean),
    _c[FilterQueryParam.HpMin] = new query_param_1.QueryParam(FilterQueryParam.HpMin, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.HpMax] = new query_param_1.QueryParam(FilterQueryParam.HpMax, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.SpeedMin] = new query_param_1.QueryParam(FilterQueryParam.SpeedMin, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.SpeedMax] = new query_param_1.QueryParam(FilterQueryParam.SpeedMax, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.AttackMin] = new query_param_1.QueryParam(FilterQueryParam.AttackMin, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.AttackMax] = new query_param_1.QueryParam(FilterQueryParam.AttackMax, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.DefenseMin] = new query_param_1.QueryParam(FilterQueryParam.DefenseMin, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.DefenseMax] = new query_param_1.QueryParam(FilterQueryParam.DefenseMax, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.SpecialAttackMin] = new query_param_1.QueryParam(FilterQueryParam.SpecialAttackMin, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.SpecialAttackMax] = new query_param_1.QueryParam(FilterQueryParam.SpecialAttackMax, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.SpecialDefenseMin] = new query_param_1.QueryParam(FilterQueryParam.SpecialDefenseMin, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.SpecialDefenseMax] = new query_param_1.QueryParam(FilterQueryParam.SpecialDefenseMax, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.WeightMin] = new query_param_1.QueryParam(FilterQueryParam.WeightMin, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.WeightMax] = new query_param_1.QueryParam(FilterQueryParam.HeightMax, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.HeightMin] = new query_param_1.QueryParam(FilterQueryParam.HeightMin, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c[FilterQueryParam.HeightMax] = new query_param_1.QueryParam(FilterQueryParam.HeightMax, query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber),
    _c);
exports.filterQueryParamCollection = new query_param_collection_1.QueryParamCollection(filterQueryParamsMap);
