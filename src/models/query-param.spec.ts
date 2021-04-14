import queryParamParser from '../helpers/query-param-parser';
import { QueryParam } from './query-param';

const mockQueryParamLabel = 'expectedDecodedKey';
const mockQueryParamKey = 'encoded-key-from-server';

const mockSerializedStringValue = 'foo bar-baz';
const mockStringValue = 'foo bar-baz';

const mockSerializedNumberValue = '1234';
const mockNumberValue = 1234;

const mockSerializedNumberListValue = '1,2,3,4';
const mockNumberListValue = [1, 2, 3, 4];

const mockSerializedStringListValue = 'a,b,c,d';
const mockStringListValue = ['a', 'b', 'c', 'd'];

const mockSerializedBooleanValueIntTrue = '1';
const mockSerializedBooleanValueIntFalse = '0';
const mockSerializedBooleanValueStringTrue = 'true';
const mockSerializedBooleanValueStringFalse = 'false';

describe('QueryParam Class', () => {
  test('should set model value when a serialized value is set in constructor', () => {
    const mockParam = new QueryParam<string>(
      mockQueryParamKey,
      queryParamParser.toModelString,
      queryParamParser.serializeString,
      {
        serializedValue: mockStringValue,
      },
    );

    expect(mockParam.value).toBe(mockSerializedStringValue);
  });

  test('should set serializeValue when a value is set in constructor', () => {
    const mockParam = new QueryParam<string>(
      mockQueryParamKey,
      queryParamParser.toModelString,
      queryParamParser.serializeString,
      {
        value: mockSerializedStringValue,
      },
    );

    expect(mockParam.serializedValue).toBe(mockStringValue);
  });

  test('should set serialized and model value when a serialized value is set after creation', () => {
    const mockParam = new QueryParam<string>(
      mockQueryParamKey,
      queryParamParser.toModelString,
      queryParamParser.serializeString,
    );

    mockParam.setSerializedValue(mockSerializedStringValue);

    expect(mockParam.serializedValue).toBe(mockSerializedStringValue);
    expect(mockParam.value).toBe(mockStringValue);
  });

  test('should set serializedValue and value when a value is set after creation', () => {
    const mockParam = new QueryParam<string>(
      mockQueryParamKey,
      queryParamParser.toModelString,
      queryParamParser.serializeString,
    );

    mockParam.setValue(mockSerializedStringValue);

    expect(mockParam.serializedValue).toBe(mockSerializedStringValue);
    expect(mockParam.value).toBe(mockStringValue);
  });

  test('getEncodedQuery should return encoded object if serialized value is set', () => {
    const serializedValue = 'what is up?';

    const mockParam = new QueryParam<string>('sort', queryParamParser.toModelString, queryParamParser.serializeString, {
      serializedValue,
    });

    expect(mockParam.getSerializedQuery()).toEqual({ sort: serializedValue });
  });

  test('getEncodedQuery should return encoded object if value is set', () => {
    const value = 'what is up?';

    const mockParam = new QueryParam<string>('sort', queryParamParser.toModelString, queryParamParser.serializeString, {
      serializedValue: value,
    });

    expect(mockParam.getSerializedQuery()).toEqual({ sort: value });
  });

  test('getEncodedQuery should call console.error and return undefined if value is not set', () => {
    const mockParam = new QueryParam<string>('sort', queryParamParser.toModelString, queryParamParser.serializeString);

    const result = mockParam.getSerializedQuery();

    expect(result).toEqual({ sort: '' });
  });
});
