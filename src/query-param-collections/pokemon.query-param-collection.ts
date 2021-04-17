import queryParamParser from '../helpers/query-param-parser';
import { QueryParam } from '../models/query-param';
import { QueryParamCollection, QueryParams } from '../models/query-param-collection';

export enum SortQueryParam {
  Name = 'name',
  Height = 'height',
  Weight = 'weight',
}

const sortQueryParams = {
  [SortQueryParam.Name]:  new QueryParam<string>('name', queryParamParser.toModelString, queryParamParser.serializeString),
  [SortQueryParam.Height]: new QueryParam<number>('height', queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [SortQueryParam.Weight]: new QueryParam<number>('weight', queryParamParser.toModelNumber, queryParamParser.serializeNumber),
};

export const sortQueryParamCollection = new QueryParamCollection<SortQueryParam>(sortQueryParams);

export enum IntervalQueryParam {
  Offset = 'offset',
  Limit = 'limit',
}

const intervalQueryParamsMap = {
  [IntervalQueryParam.Offset]: new QueryParam<number>('offset', queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [IntervalQueryParam.Limit]: new QueryParam<number>('limit', queryParamParser.toModelNumber, queryParamParser.serializeNumber, {
    value: 10
  }),
};

export const intervalQueryParamCollection = new QueryParamCollection<IntervalQueryParam>(intervalQueryParamsMap);

export enum FilterQueryParam {
  Type = 'type',
  Generation = 'generation',
  HeightMin = 'heightMin',
  HeightMax = 'heightMax',
}

const filterQueryParamsMap = {
  [FilterQueryParam.Type]: new QueryParam<string[]>('type', queryParamParser.toModelStringList, queryParamParser.serializeStringList),
  [FilterQueryParam.Generation]: new QueryParam<number[]>('generation', queryParamParser.toModelNumberList, queryParamParser.serializeNumberList),
  [FilterQueryParam.HeightMin]: new QueryParam<number>('height-min', queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.HeightMax]: new QueryParam<number>('height-max', queryParamParser.toModelNumber, queryParamParser.serializeNumber),
}

export const filterQueryParamCollection = new QueryParamCollection(filterQueryParamsMap);

export type PokemonQueryParamKeys = SortQueryParam | IntervalQueryParam | FilterQueryParam;

// TODO figure out if we can extract this using the type given into the QueryParam class
export interface PokemonQueryParamsKeyValueMap {
  [SortQueryParam.Name]?:  string,
  [SortQueryParam.Height]?: number,
  [SortQueryParam.Weight]?: number,

  [IntervalQueryParam.Offset]?: number,
  [IntervalQueryParam.Limit]?: number,

  [FilterQueryParam.Type]?: string,
  [FilterQueryParam.Generation]?: number,
  [FilterQueryParam.HeightMin]?: number,
  [FilterQueryParam.HeightMax]?: number,
}