"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_param_parser_1 = require("../helpers/query-param-parser");
var query_param_1 = require("./query-param");
var query_param_collection_1 = require("./query-param-collection");
var mockQueryParam1 = new query_param_1.QueryParam('serialized-label-1', query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString, {
    value: 'TEST1'
});
var mockQueryParam2 = new query_param_1.QueryParam('serialized-label-2', query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString, {
    value: 'TEST2'
});
var mockQueryParam3Number = new query_param_1.QueryParam('serialized-label2', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber, {
    value: 7
});
var MockLabel;
(function (MockLabel) {
    MockLabel["LabelOne"] = "labelOne";
    MockLabel["LabelTwo"] = "labelTwo";
    MockLabel["LabelThree"] = "labelThree";
})(MockLabel || (MockLabel = {}));
describe('QueryParamCollection Class', function () {
    var mockQueryParams;
    var mockQueryParamCollection;
    beforeEach(function () {
        var _a;
        mockQueryParams = (_a = {},
            _a[MockLabel.LabelOne] = mockQueryParam1,
            _a[MockLabel.LabelTwo] = mockQueryParam2,
            _a[MockLabel.LabelThree] = mockQueryParam3Number,
            _a);
        mockQueryParamCollection = new query_param_collection_1.QueryParamCollection(mockQueryParams);
    });
    describe('updateQueryParamsFromSerialized', function () {
        test('sets the value of query params if query param is found', function () {
            var mockSerializedQuery = {
                'serialized-label-1': 'value1',
            };
            mockQueryParamCollection.updateQueryParamsFromSerialized(mockSerializedQuery);
            var labelOneResult = mockQueryParamCollection.getLabelValueObject().labelOne;
            expect(labelOneResult).toBe('value1');
            var labelTwoResult = mockQueryParamCollection.getLabelValueObject().labelTwo;
            expect(labelTwoResult).toBeUndefined();
        });
        test('no active values should exist if updated with empty object', function () {
            var expectedUpdatedValue = {};
            mockQueryParamCollection.updateQueryParamsFromSerialized({});
            var result = mockQueryParamCollection.getActiveQueryParams();
            expect(result).toEqual(expectedUpdatedValue);
        });
    });
    describe('getQueryParamByLabel', function () {
        test('should return queryParam when given correct label', function () {
            var result = mockQueryParamCollection.getQueryParamByLabel(MockLabel.LabelOne);
            expect(result).not.toContain(undefined);
            expect(result).toBeInstanceOf(query_param_1.QueryParam);
        });
    });
    describe('getLabelFromSerializedKey', function () {
        test('should return queryParam with the corresponding serialized label', function () {
            var result = mockQueryParamCollection.getLabelFromSerializedKey(mockQueryParam1.serializedKey);
            expect(result).toBe(MockLabel.LabelOne);
        });
        test('should return undefined if serialized key does not belong to a query param', function () {
            var unsupportedKey = 'hopefully-not-supported';
            var result = mockQueryParamCollection.getLabelFromSerializedKey(unsupportedKey);
            expect(result).toBeUndefined();
        });
    });
    describe('updateQueryParam', function () {
        test('should return queryParam with the corresponding serialized label', function () {
            var expectedUpdatedValue = 'Updated Value For updateQueryParam';
            mockQueryParamCollection.updateQueryParam(MockLabel.LabelOne, expectedUpdatedValue);
            var result = mockQueryParamCollection.getLabelValueObject();
            expect(result[MockLabel.LabelOne]).toBe(expectedUpdatedValue);
        });
    });
    describe('updateQueryParams', function () {
        test('should return queryParam with the corresponding serialized label', function () {
            var _a;
            var expectedUpdatedValue = 'Updated Value';
            mockQueryParamCollection.updateQueryParams((_a = {},
                _a[MockLabel.LabelOne] = expectedUpdatedValue,
                _a));
            var result = mockQueryParamCollection.getLabelValueObject();
            expect(result[MockLabel.LabelOne]).toBe(expectedUpdatedValue);
        });
    });
});
