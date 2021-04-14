"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_param_1 = require("./query-param");
var query_param_collection_1 = require("./query-param-collection");
var query_param_parser_1 = require("../helpers/query-param-parser");
var mockQueryParam1 = new query_param_1.QueryParam('serialized-label-1', query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString);
var mockQueryParam2 = new query_param_1.QueryParam('serialized-label-2', query_param_parser_1.default.toModelString, query_param_parser_1.default.serializeString);
var mockQueryParam3Number = new query_param_1.QueryParam('serialized-label2', query_param_parser_1.default.toModelNumber, query_param_parser_1.default.serializeNumber);
describe('QueryParamCollection Class', function () {
    var mockQueryParamMap;
    beforeEach(function () {
        mockQueryParamMap = new Map([
            ['labelOne', mockQueryParam1],
            ['labelTwo', mockQueryParam2],
            ['labelThree', mockQueryParam3Number],
        ]);
    });
    describe('updateQueryParamsFromSerialized', function () {
        test('sets the value of query params if query param is found', function () {
            var _a;
            var mockQueryParamCollection = new query_param_collection_1.QueryParamCollection(mockQueryParamMap);
            var mockSerializedQuery = {
                'serialized-label-1': 'value1',
            };
            var result = mockQueryParamCollection.updateQueryParamsFromSerialized(mockSerializedQuery);
            expect((_a = result.get('labelOne')) === null || _a === void 0 ? void 0 : _a.value).toBe('value1');
        });
    });
});
// describe('decodeQueryParams', () => {
//   let mockEncodedQuery: SerializedQueryParam;
//   beforeEach(() => {
//     mockEncodedQuery = {
//       's-name': 'asc',
//       'i-offset': '10',
//       'f-generation-list': '1,2,3,4',
//     };
//   });
//   test('should create QueryParam models for each encoded query parameters when they are supported', () => {
//     const result = decodeQueryParams(mockEncodedQuery);
//     expect(result).toHaveSize(3);
//     expect(result.map(q => q.getEncodedQuery())).not.toContain(undefined);
//   });
//   test('should throw error and remove unsupported encoded query', () => {
//     spyOn(console, 'error');
//     const unsupportedKey = 'hopefully-not-supported';
//     const result = decodeQueryParams({
//       ...mockEncodedQuery,
//       [unsupportedKey]: 'baz',
//     });
//     expect(result).toHaveSize(3);
//     expect(console.error).toHaveBeenCalledTimes(1);
//     expect(console.error).toHaveBeenCalledWith(`could not decode ${unsupportedKey}`);
//     expect(result.map(q => q.getEncodedQuery())).not.toContain(undefined);
//   });
// });
// describe('encodeQueryParams', () => {
//   let mockQueryParams: QueryParam<QueryParamType>[];
//   beforeEach(() => {
//     mockQueryParams = [
//       new QueryParam<string>('sort', 's-name', 'name', (v) => v),
//       new QueryParam<number>('interval', 'i-offset', 'offset', decodeNumberValue),
//       new QueryParam<string[]>('filter', 'f-type-list', 'typeList', decodeStringListValue),
//     ];
//   });
//   // Need to set values to be encoded properly
//   function setValidValuesToQueryParams(): void {
//     mockQueryParams[0].setEncodedValue('asc');
//     mockQueryParams[1].setEncodedValue('23');
//     mockQueryParams[2].setEncodedValue('1,2,3,4');
//   }
//   test('should return an object (EncodedQuery) of encoded QueryParam', () => {
//     setValidValuesToQueryParams();
//     const result = encodeQueryParams(mockQueryParams);
//     expect(Object.keys(result)).toEqual(mockQueryParams.map(q => q.encodedKey));
//   });
//   test('should return an empty object if values are not set to queries', () => {
//     const result = encodeQueryParams(mockQueryParams);
//     expect(result).toEqual({});
//   });
//   test('should call console.err for each QueryParam if values are not set to QueryParam', () => {
//     spyOn(console, 'error');
//     encodeQueryParams(mockQueryParams);
//     expect(console.error).toHaveBeenCalledTimes(3);
//   });
// });
