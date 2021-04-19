import queryParamParser from '../helpers/query-param-parser';
import { QueryParam } from '../models/query-param';
import { IncompleteMap, QueryParamCollection } from '../models/query-param-collection';

export enum SortQueryParam {
  Name = 'name',
  Height = 'height',
  Weight = 'weight',
}

export interface SortQueryLabelTypeLookup {
  [SortQueryParam.Name]:  string,
  [SortQueryParam.Height]: number,
  [SortQueryParam.Weight]: number,
}

const sortQueryParams = {
  [SortQueryParam.Name]:  new QueryParam<SortQueryLabelTypeLookup[SortQueryParam.Name]>('name',
    queryParamParser.toModelString, queryParamParser.serializeString),
  [SortQueryParam.Height]: new QueryParam<SortQueryLabelTypeLookup[SortQueryParam.Height]>('height',
    queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [SortQueryParam.Weight]: new QueryParam<SortQueryLabelTypeLookup[SortQueryParam.Weight]>('weight',
    queryParamParser.toModelNumber, queryParamParser.serializeNumber),
};

export const sortQueryParamCollection = new QueryParamCollection<SortQueryLabelTypeLookup>(sortQueryParams);

export enum IntervalQueryParam {
  Offset = 'offset',
  Limit = 'limit',
}

const intervalQueryParams = {
  [IntervalQueryParam.Offset]: new QueryParam<number>('offset', queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [IntervalQueryParam.Limit]: new QueryParam<number>('limit', queryParamParser.toModelNumber, queryParamParser.serializeNumber, {
    value: 10
  }),
};

export interface IntervalQueryLabelTypeLookup {
  [IntervalQueryParam.Offset]:  number,
  [IntervalQueryParam.Limit]: number,
}

export const intervalQueryParamCollection = new QueryParamCollection<IntervalQueryLabelTypeLookup>(intervalQueryParams);

export enum FilterQueryParam {
  Type = 'type',
  Ability = 'ability',
  Move = 'move',
  Generation = 'generation',
  HeightMin = 'heightMin',
  HeightMax = 'heightMax',
}

export interface FilterQueryLabelTypeLookup {
  [FilterQueryParam.Type]: string[],
  [FilterQueryParam.Generation]: number[],
  [FilterQueryParam.Generation]: number[],
  [FilterQueryParam.HeightMin]: number,
  [FilterQueryParam.HeightMax]: number,
}

const filterQueryParamsMap = {
  [FilterQueryParam.Type]: new QueryParam<string[]>('type', queryParamParser.toModelStringList, queryParamParser.serializeStringList),
  [FilterQueryParam.Generation]: new QueryParam<number[]>('generation', queryParamParser.toModelNumberList, queryParamParser.serializeNumberList),
  [FilterQueryParam.Generation]: new QueryParam<number[]>('generation', queryParamParser.toModelNumberList, queryParamParser.serializeNumberList),
  [FilterQueryParam.HeightMin]: new QueryParam<number>('height-min', queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.HeightMax]: new QueryParam<number>('height-max', queryParamParser.toModelNumber, queryParamParser.serializeNumber),
}

export const filterQueryParamCollection = new QueryParamCollection<FilterQueryLabelTypeLookup>(filterQueryParamsMap);

export type PokemonQueryParamKeys = SortQueryParam | IntervalQueryParam | FilterQueryParam;

export type PokemonQueryParamsKeyValueMap = SortQueryParam & IntervalQueryLabelTypeLookup & FilterQueryLabelTypeLookup;

export type ActivePokemonQueryParams = IncompleteMap<PokemonQueryParamKeys>;

export type LabelTypeLookup = IntervalQueryLabelTypeLookup & SortQueryLabelTypeLookup & FilterQueryLabelTypeLookup;

export type ActivePokemonControls = IncompleteMap<LabelTypeLookup>;