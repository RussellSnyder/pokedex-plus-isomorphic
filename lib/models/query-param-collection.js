"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamCollection = void 0;
var QueryParamCollection = /** @class */ (function () {
    function QueryParamCollection(queryParams) {
        var _this = this;
        this.updateQueryParamsFromSerialized = function (serializedQueryParam) {
            _this.clearAllQueryParams();
            if (serializedQueryParam) {
                Object.entries(serializedQueryParam).forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    var queryParam = _this.getQueryParamFromSerializedKey(key);
                    var label = _this.getLabelFromSerializedKey(key);
                    if (queryParam && label) {
                        queryParam.setSerializedValue(value);
                        _this.queryParams[label] = queryParam;
                    }
                });
            }
            _this.updateActiveQueryParams();
        };
        this.updateQueryParam = function (label, value) {
            var queryParam = _this.getQueryParamByLabel(label);
            queryParam.setValue(value);
            _this.queryParams[label] = queryParam;
            _this.updateActiveQueryParams();
        };
        this.updateQueryParams = function (labelValue) {
            __spreadArray([], __read(Object.entries(labelValue))).forEach(function (_a) {
                var _b = __read(_a, 2), label = _b[0], value = _b[1];
                var typedLabel = label;
                var typedValue = value;
                var queryParam = _this.getQueryParamByLabel(typedLabel);
                queryParam.setValue(typedValue);
            });
            _this.updateActiveQueryParams();
        };
        this.getQueryParamByLabel = function (label) {
            return _this.queryParams[label];
        };
        this.getLabelFromSerializedKey = function (key) {
            var filteredLabels = __spreadArray([], __read(Object.entries(_this.queryParams))).filter(function (_a) {
                var _b = __read(_a, 2), queryParam = _b[1];
                return queryParam.serializedKey === key;
            })
                .map(function (_a) {
                var _b = __read(_a, 1), k = _b[0];
                return k;
            });
            if (filteredLabels.length === 0) {
                return;
            }
            return filteredLabels[0];
        };
        this.getQueryValueByLabel = function (key) {
            var queryParam = _this.queryParams[key];
            if (!queryParam) {
                return;
            }
            return queryParam.value;
        };
        this.getQueryParamFromSerializedKey = function (key) {
            return __spreadArray([], __read(Object.values(_this.queryParams))).find(function (q) {
                return q.serializedKey === key;
            });
        };
        this.getSerializedQueryParams = function () {
            return __spreadArray([], __read(Object.values(_this.queryParams))).reduce(function (encoded, query) { return (__assign(__assign({}, encoded), query.getSerializedQuery())); }, {});
        };
        this.getSerializedQueryParamsWithValues = function () {
            return __spreadArray([], __read(Object.values(_this.queryParams))).filter(function (v) { return v.serializedValue !== ''; })
                .reduce(function (encoded, query) { return (__assign(__assign({}, encoded), query.getSerializedQuery())); }, {});
        };
        this.getActiveQueryParams = function () {
            return __spreadArray([], __read(Object.entries(_this.queryParams))).filter(function (_a) {
                var _b = __read(_a, 2), queryParam = _b[1];
                return queryParam.serializedValue && queryParam.serializedValue !== '';
            })
                .reduce(function (prev, _a) {
                var _b;
                var _c = __read(_a, 2), label = _c[0], queryParam = _c[1];
                return (__assign(__assign({}, prev), (_b = {}, _b[label] = queryParam.value, _b)));
            }, {});
        };
        this.getLabelValueObject = function () {
            if (!_this.queryParams) {
                return {};
            }
            return __spreadArray([], __read(Object.entries(_this.queryParams))).reduce(function (prev, _a) {
                var _b;
                var _c = __read(_a, 2), label = _c[0], queryParam = _c[1];
                return (__assign(__assign({}, prev), (_b = {}, _b[label] = queryParam.value, _b)));
            }, {});
        };
        this.queryParams = queryParams;
        this.activeParams = this.getActiveQueryParams();
    }
    QueryParamCollection.prototype.updateActiveQueryParams = function () {
        this.activeParams = this.getActiveQueryParams();
    };
    QueryParamCollection.prototype.clearAllQueryParams = function () {
        Object.values(this.queryParams).forEach(function (qp) { return qp.clearValue(); });
    };
    return QueryParamCollection;
}());
exports.QueryParamCollection = QueryParamCollection;
