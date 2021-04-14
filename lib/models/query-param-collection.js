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
            if (!serializedQueryParam) {
                return _this.queryParams;
            }
            Object.entries(serializedQueryParam).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                var queryParam = _this.getQueryParamsFromSerializedKey(key);
                var label = _this.getLabelFromSerializedKey(key);
                if (queryParam && label) {
                    queryParam.setSerializedValue(value);
                    _this.queryParams.set(label, queryParam);
                }
            });
            _this.updateActiveQueryParams();
            return _this.queryParams;
        };
        this.getQueryParamByLabel = function (key) {
            return _this.queryParams.get(key);
        };
        this.getLabelFromSerializedKey = function (key) {
            var filteredLabels = __spreadArray([], __read(_this.queryParams.entries())).filter(function (_a) {
                var _b = __read(_a, 2), queryParam = _b[1];
                return queryParam.serializedKey === key;
            })
                .map(function (_a) {
                var _b = __read(_a, 1), k = _b[0];
                return k;
            });
            if (filteredLabels.length !== 0) {
                return filteredLabels[0];
            }
            else {
                console.warn("could not find queryParam with key " + key);
            }
            return;
        };
        this.getQueryValueByLabel = function (key) {
            var queryParam = _this.queryParams.get(key);
            if (!queryParam) {
                return;
            }
            return queryParam.value;
        };
        this.getQueryParamsFromSerializedKey = function (key) {
            return __spreadArray([], __read(_this.queryParams.values())).find(function (q) {
                return q.serializedKey === key;
            });
        };
        this.getSerializedQueryParams = function () {
            return __spreadArray([], __read(_this.queryParams.values())).reduce(function (encoded, query) { return (__assign(__assign({}, encoded), query.getSerializedQuery())); }, {});
        };
        this.getSerializedQueryParamsWithValues = function () {
            return __spreadArray([], __read(_this.queryParams.values())).filter(function (v) { return v.serializedValue !== ''; })
                .reduce(function (encoded, query) { return (__assign(__assign({}, encoded), query.getSerializedQuery())); }, {});
        };
        this.getActiveQueryParams = function () {
            return __spreadArray([], __read(_this.queryParams.entries())).filter(function (_a) {
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
            return __spreadArray([], __read(_this.queryParams)).reduce(function (prev, _a) {
                var _b;
                var _c = __read(_a, 2), label = _c[0], queryParam = _c[1];
                return (__assign(__assign({}, prev), (_b = {}, _b[label] = queryParam.value, _b)));
            }, {});
        };
        this.updateQueryParam = function (label, value) {
            var queryParam = _this.getQueryParamByLabel(label);
            if (!queryParam) {
                return;
            }
            queryParam.setValue(value);
            _this.queryParams.set(label, queryParam);
            _this.updateActiveQueryParams();
        };
        this.queryParams = queryParams;
        this.activeQueryParams = this.getActiveQueryParams();
    }
    QueryParamCollection.prototype.updateActiveQueryParams = function () {
        this.activeQueryParams = this.getActiveQueryParams();
    };
    return QueryParamCollection;
}());
exports.QueryParamCollection = QueryParamCollection;
