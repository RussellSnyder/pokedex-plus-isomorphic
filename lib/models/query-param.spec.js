"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_param_parser_1 = require("../helpers/query-param-parser");
var query_param_1 = require("./query-param");
var mockQueryParamLabel = 'expectedDecodedKey';
var mockQueryParamKey = 'encoded-key-from-server';
var mockSerializedStringValue = 'foo bar-baz';
var mockStringValue = 'foo bar-baz';
var mockSerializedNumberValue = '1234';
var mockNumberValue = 1234;
var mockSerializedNumberListValue = '1,2,3,4';
var mockNumberListValue = [1, 2, 3, 4];
var mockSerializedStringListValue = 'a,b,c,d';
var mockStringListValue = ['a', 'b', 'c', 'd'];
var mockSerializedBooleanValueIntTrue = '1';
var mockSerializedBooleanValueIntFalse = '0';
var mockSerializedBooleanValueStringTrue = 'true';
var mockSerializedBooleanValueStringFalse = 'false';
describe('QueryParam Class', function () {
    test('should set model value when a serialized value is set in constructor', function () {
        var mockParam = new query_param_1.QueryParam(mockQueryParamKey, query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString, {
            serializedValue: mockStringValue,
        });
        expect(mockParam.value).toBe(mockSerializedStringValue);
    });
    test('should set serializeValue when a value is set in constructor', function () {
        var mockParam = new query_param_1.QueryParam(mockQueryParamKey, query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString, {
            value: mockSerializedStringValue,
        });
        expect(mockParam.serializedValue).toBe(mockStringValue);
    });
    test('should set serialized and model value when a serialized value is set after creation', function () {
        var mockParam = new query_param_1.QueryParam(mockQueryParamKey, query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString);
        mockParam.setSerializedValue(mockSerializedStringValue);
        expect(mockParam.serializedValue).toBe(mockSerializedStringValue);
        expect(mockParam.value).toBe(mockStringValue);
    });
    test('should set serializedValue and value when a value is set after creation', function () {
        var mockParam = new query_param_1.QueryParam(mockQueryParamKey, query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString);
        mockParam.setValue(mockSerializedStringValue);
        expect(mockParam.serializedValue).toBe(mockSerializedStringValue);
        expect(mockParam.value).toBe(mockStringValue);
    });
    test('getEncodedQuery should return encoded object if serialized value is set', function () {
        var serializedValue = 'what is up?';
        var mockParam = new query_param_1.QueryParam('sort', query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString, {
            serializedValue: serializedValue,
        });
        expect(mockParam.getSerializedQuery()).toEqual({ sort: serializedValue });
    });
    test('getEncodedQuery should return encoded object if value is set', function () {
        var value = 'what is up?';
        var mockParam = new query_param_1.QueryParam('sort', query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString, {
            serializedValue: value,
        });
        expect(mockParam.getSerializedQuery()).toEqual({ sort: value });
    });
    test('getEncodedQuery should call console.error and return undefined if value is not set', function () {
        var mockParam = new query_param_1.QueryParam('sort', query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString);
        var result = mockParam.getSerializedQuery();
        expect(result).toEqual({ sort: '' });
    });
});
