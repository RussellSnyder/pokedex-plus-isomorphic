import { QueryParam } from './query-param';
import { QueryParamCollection, QueryParams } from './query-param-collection';
import queryParamParser from '../helpers/query-param-parser';

const mockQueryParam1 = new QueryParam<string>(
  'serialized-label-1',
  queryParamParser.toModelString,
  queryParamParser.serializeString,
);
const mockQueryParam2 = new QueryParam<string>(
  'serialized-label-2',
  queryParamParser.toModelString,
  queryParamParser.serializeString,
);
const mockQueryParam3Number = new QueryParam<number>(
  'serialized-label2',
  queryParamParser.toModelNumber,
  queryParamParser.serializeNumber,
);

enum MockLabel {
  LabelOne = 'labelOne',
  LabelTwo = 'labelTwo',
  LabelThree = 'labelThree',
}

describe('QueryParamCollection Class', () => {
  let mockQueryParams: QueryParams<MockLabel>;
  let mockQueryParamCollection: QueryParamCollection<MockLabel>;

  beforeEach(() => {
    mockQueryParams = {
      [MockLabel.LabelOne]: mockQueryParam1,
      [MockLabel.LabelTwo]: mockQueryParam2,
      [MockLabel.LabelThree]: mockQueryParam3Number,
    }

    mockQueryParamCollection = new QueryParamCollection<MockLabel>(mockQueryParams);

  });

  describe('updateQueryParamsFromSerialized', () => {
    test('sets the value of query params if query param is found', () => {
      const mockSerializedQuery = {
        'serialized-label-1': 'value1',
      };

      mockQueryParamCollection.updateQueryParamsFromSerialized(mockSerializedQuery);

      const result = mockQueryParamCollection.getLabelValueObject().labelOne;

      expect(result).toBe('value1');
    });
  });

  describe('getQueryParamByLabel', () => {
    test('should return queryParam when given correct label', () => {
      const result = mockQueryParamCollection.getQueryParamByLabel(MockLabel.LabelOne);
      
      expect(result).not.toContain(undefined);
      expect(result).toBeInstanceOf(QueryParam);
    });
  })
  describe('getLabelFromSerializedKey', () => {
    test('should return queryParam with the corresponding serialized label', () => {
      const result = mockQueryParamCollection.getLabelFromSerializedKey(mockQueryParam1.serializedKey);

      expect(result).toBe(MockLabel.LabelOne);

    });
    test('should return undefined if serialized key does not belong to a query param', () => {
      const unsupportedKey = 'hopefully-not-supported';
      const result = mockQueryParamCollection.getLabelFromSerializedKey(unsupportedKey);

      expect(result).toBeUndefined();
      
    });
  });
});