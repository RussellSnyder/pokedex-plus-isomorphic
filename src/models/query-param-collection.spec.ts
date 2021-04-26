import queryParamParser from '../helpers/query-param-parser';
import { QueryParam } from './query-param';
import { QueryParamCollection, TypedQueryParamLookup } from './query-param-collection';

const mockQueryParam1 = new QueryParam<string>(
  'serialized-label-1',
  queryParamParser.toModelString,
  queryParamParser.serializeString,
  {
    value: 'TEST1'
  }
);
const mockQueryParam2 = new QueryParam<string>(
  'serialized-label-2',
  queryParamParser.toModelString,
  queryParamParser.serializeString,
  {
    value: 'TEST2'
  }
);
const mockQueryParam3Number = new QueryParam<number>(
  'serialized-label2',
  queryParamParser.toModelNumber,
  queryParamParser.serializeNumber,
  {
    value: 7
  }
);

enum MockLabel {
  LabelOne = 'labelOne',
  LabelTwo = 'labelTwo',
  LabelThree = 'labelThree',
}

interface MockLabelTypeLookup {
  [MockLabel.LabelOne]: string;
  [MockLabel.LabelTwo]: string;
  [MockLabel.LabelThree]: number;
}

describe('QueryParamCollection Class', () => {
  let mockQueryParams: TypedQueryParamLookup<MockLabelTypeLookup>;
  let mockQueryParamCollection: QueryParamCollection<MockLabelTypeLookup>;

  beforeEach(() => {
    mockQueryParams = {
      [MockLabel.LabelOne]: mockQueryParam1,
      [MockLabel.LabelTwo]: mockQueryParam2,
      [MockLabel.LabelThree]: mockQueryParam3Number,
    }

    mockQueryParamCollection = new QueryParamCollection<MockLabelTypeLookup>(mockQueryParams);

  });

  describe('updateQueryParamsFromSerialized', () => {
    test('sets the value of query params if query param is found', () => {
      const mockSerializedQuery = {
        'serialized-label-1': 'value1',
      };

      mockQueryParamCollection.updateQueryParamsFromSerialized(mockSerializedQuery);

      const labelOneResult = mockQueryParamCollection.getLabelValueObject().labelOne;

      expect(labelOneResult).toBe('value1');

      const labelTwoResult = mockQueryParamCollection.getLabelValueObject().labelTwo;

      expect(labelTwoResult).toBeUndefined();

    });

    test('no active values should exist if updated with empty object', () => {
      const expectedUpdatedValue = {};

      mockQueryParamCollection.updateQueryParamsFromSerialized({});

      const result = mockQueryParamCollection.getActiveQueryParams();

      expect(result).toEqual(expectedUpdatedValue);

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

  describe('updateQueryParam', () => {
    test('should return queryParam with the corresponding serialized label', () => {
      const expectedUpdatedValue = 'Updated Value For updateQueryParam';

      mockQueryParamCollection.updateQueryParam(MockLabel.LabelOne, expectedUpdatedValue);

      const result = mockQueryParamCollection.getLabelValueObject();

      expect(result[MockLabel.LabelOne]).toBe(expectedUpdatedValue);

    });
  });

  describe('updateQueryParams', () => {
    test('should return queryParam with the corresponding serialized label', () => {
      const expectedUpdatedValue = 'Updated Value';

      mockQueryParamCollection.updateQueryParams({
        [MockLabel.LabelOne]: expectedUpdatedValue
      });

      const result = mockQueryParamCollection.getLabelValueObject();

      expect(result[MockLabel.LabelOne]).toBe(expectedUpdatedValue);

    });
  });
});