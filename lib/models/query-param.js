"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParam = void 0;
var QueryParam = /** @class */ (function () {
    function QueryParam(serializedKey, toModelFunction, serializeValueFunction, options) {
        var _this = this;
        this.serializedValue = '';
        this.getSerializedQuery = function () {
            var _a;
            return _a = {},
                _a[_this.serializedKey] = _this.serializedValue,
                _a;
        };
        this.serializedKey = serializedKey;
        this.toModelFunction = toModelFunction;
        this.serializeValueFunction = serializeValueFunction;
        if (!options) {
            return;
        }
        var value = options.value, serializedValue = options.serializedValue;
        if (value && serializedValue) {
            console.error("a value and serializedValue were passed into query param " + this.serializedKey + ".\n      This could cause unexpected behavior. Use either serializedValue OR value, but not both");
        }
        if (value) {
            this.setValue(value);
        }
        if (serializedValue) {
            this.setSerializedValue(serializedValue);
        }
    }
    QueryParam.prototype.setSerializedValue = function (v) {
        this.serializedValue = v;
        this.value = this.toModelFunction(v);
    };
    QueryParam.prototype.setValue = function (v) {
        this.value = v;
        this.serializedValue = this.serializeValueFunction(v);
    };
    return QueryParam;
}());
exports.QueryParam = QueryParam;
