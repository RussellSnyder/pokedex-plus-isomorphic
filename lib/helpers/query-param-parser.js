"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var queryParamParser = {
    toModelString: function (v) { return v; },
    serializeString: function (v) { return v; },
    toModelSortValue: function (v) { return v === 'asc' ? types_1.SortValue.Asc : types_1.SortValue.Desc; },
    serializeSortValue: function (v) { return v === types_1.SortValue.Asc ? 'asc' : 'desc'; },
    toModelNumber: function (v) { return parseInt(v, 10); },
    serializeNumber: function (v) { return v.toString(); },
    toModelStringList: function (v) { return v.split(','); },
    serializeStringList: function (v) { return v.join(','); },
    toModelNumberList: function (v) { return v.split(',').map(queryParamParser.toModelNumber); },
    serializeNumberList: function (v) { return v.map(queryParamParser.serializeNumber).join(','); },
    toModelBoolean: function (value) {
        var bool;
        var maybeNumber = parseInt(value, 10);
        if (isNaN(maybeNumber)) {
            bool = value === 'true' ? true : false;
        }
        else {
            bool = maybeNumber === 0 ? false : true;
        }
        return bool;
    },
    serializeBoolean: function (v) { return (v ? '1' : '0'); },
};
exports.default = queryParamParser;
