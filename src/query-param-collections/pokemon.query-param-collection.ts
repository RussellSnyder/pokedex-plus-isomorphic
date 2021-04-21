import queryParamParser from '../helpers/query-param-parser';
import { QueryParam } from '../models/query-param';
import { IncompleteMap, QueryParamCollection } from '../models/query-param-collection';

export enum SortQueryParam {
  Name = 'name',
  Height = 'height',
  Weight = 'weight',
}

export interface SortQueryLabelTypeLookup {
  [SortQueryParam.Name]: string,
  [SortQueryParam.Height]: number,
  [SortQueryParam.Weight]: number,
}

const sortQueryParams = {
  [SortQueryParam.Name]: new QueryParam<SortQueryLabelTypeLookup[SortQueryParam.Name]>('name',
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

export interface IntervalQueryLabelTypeLookup {
  [IntervalQueryParam.Offset]: number,
  [IntervalQueryParam.Limit]: number,
}

export const intervalQueryParams = {
  [IntervalQueryParam.Offset]: new QueryParam<IntervalQueryLabelTypeLookup[IntervalQueryParam.Offset]>(
    'offset', queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [IntervalQueryParam.Limit]: new QueryParam<IntervalQueryLabelTypeLookup[IntervalQueryParam.Limit]>(
    'limit', queryParamParser.toModelNumber, queryParamParser.serializeNumber, {
    value: 10
  }),
};

export const intervalQueryParamCollection = new QueryParamCollection<IntervalQueryLabelTypeLookup>(intervalQueryParams);

export enum FilterQueryParam {
  Type = 'type',
  Ability = 'ability',
  Move = 'move',
  IsDefault = 'isdefault',
  Generation = 'generation',
  HpMin = 'hpMin',
  HpMax = 'hpMax',
  SpeedMin = 'speedmin',
  SpeedMax = 'speedmax',
  AttackMin = 'attackmin',
  AttackMax = 'attackmax',
  DefenseMin = 'defensemin',
  DefenseMax = 'defensemax',
  SpecialAttackMin = 'specialattackmin',
  SpecialAttackMax = 'specialattackmax',
  SpecialDefenseMin = 'specialdefensemin',
  SpecialDefenseMax = 'specialdefensemax',
  HeightMin = 'heightmin',
  HeightMax = 'heightmax',
  WeightMin = 'weightmin',
  WeightMax = 'weightmax',
}

export interface FilterQueryLabelTypeLookup {
  [FilterQueryParam.Type]: string[],
  [FilterQueryParam.Ability]: string[],
  [FilterQueryParam.Move]: string[],
  [FilterQueryParam.IsDefault]: boolean,
  [FilterQueryParam.Generation]: number[],
  [FilterQueryParam.HpMin]: number,
  [FilterQueryParam.HpMax]: number,
  [FilterQueryParam.SpeedMin]: number,
  [FilterQueryParam.SpeedMax]: number,
  [FilterQueryParam.AttackMin]: number,
  [FilterQueryParam.AttackMax]: number,
  [FilterQueryParam.DefenseMin]: number,
  [FilterQueryParam.DefenseMax]: number,
  [FilterQueryParam.SpecialAttackMin]: number,
  [FilterQueryParam.SpecialAttackMax]: number,
  [FilterQueryParam.SpecialDefenseMin]: number,
  [FilterQueryParam.SpecialDefenseMax]: number,
  [FilterQueryParam.HeightMin]: number,
  [FilterQueryParam.HeightMax]: number,
  [FilterQueryParam.WeightMin]: number,
  [FilterQueryParam.WeightMax]: number,
}

const filterQueryParamsMap = {
  [FilterQueryParam.Type]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.Type]>(
    FilterQueryParam.Type, queryParamParser.toModelStringList, queryParamParser.serializeStringList),
  [FilterQueryParam.Ability]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.Ability]>(
    FilterQueryParam.Ability, queryParamParser.toModelStringList, queryParamParser.serializeStringList),
  [FilterQueryParam.Move]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.Move]>(
    FilterQueryParam.Move, queryParamParser.toModelStringList, queryParamParser.serializeStringList),

  [FilterQueryParam.Generation]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.Generation]>(
    FilterQueryParam.Generation, queryParamParser.toModelNumberList, queryParamParser.serializeNumberList),

  [FilterQueryParam.IsDefault]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.IsDefault]>(
    FilterQueryParam.IsDefault, queryParamParser.toModelBoolean, queryParamParser.serializeBoolean),

  [FilterQueryParam.HpMin]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.HpMin]>(
    FilterQueryParam.HpMin, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.HpMax]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.HpMax]>(
    FilterQueryParam.HpMax, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.SpeedMin]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.SpeedMin]>(
    FilterQueryParam.SpeedMin, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.SpeedMax]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.SpeedMax]>(
    FilterQueryParam.SpeedMax, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.AttackMin]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.AttackMin]>(
    FilterQueryParam.AttackMin, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.AttackMax]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.AttackMax]>(
    FilterQueryParam.AttackMax, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.DefenseMin]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.DefenseMin]>(
    FilterQueryParam.DefenseMin, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.DefenseMax]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.DefenseMax]>(
    FilterQueryParam.DefenseMax, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.SpecialAttackMin]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.SpecialAttackMin]>(
    FilterQueryParam.SpecialAttackMin, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.SpecialAttackMax]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.SpecialAttackMax]>(
    FilterQueryParam.SpecialAttackMax, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.SpecialDefenseMin]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.SpecialDefenseMin]>(
    FilterQueryParam.SpecialDefenseMin, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.SpecialDefenseMax]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.SpecialDefenseMax]>(
    FilterQueryParam.SpecialDefenseMax, queryParamParser.toModelNumber, queryParamParser.serializeNumber),

  [FilterQueryParam.WeightMin]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.WeightMin]>(
    FilterQueryParam.WeightMin, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.WeightMax]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.WeightMax]>(
    FilterQueryParam.HeightMax, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.HeightMin]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.HeightMin]>(
    FilterQueryParam.HeightMin, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
  [FilterQueryParam.HeightMax]: new QueryParam<FilterQueryLabelTypeLookup[FilterQueryParam.HeightMax]>(
    FilterQueryParam.HeightMax, queryParamParser.toModelNumber, queryParamParser.serializeNumber),
}

export const filterQueryParamCollection = new QueryParamCollection<FilterQueryLabelTypeLookup>(filterQueryParamsMap);

export type PokemonQueryParamKeys = SortQueryParam | IntervalQueryParam | FilterQueryParam;

export type PokemonQueryParamsKeyValueMap = SortQueryParam & IntervalQueryLabelTypeLookup & FilterQueryLabelTypeLookup;

export type ActivePokemonLabels = IncompleteMap<PokemonQueryParamKeys>;

export type LabelTypeLookup = IntervalQueryLabelTypeLookup & SortQueryLabelTypeLookup & FilterQueryLabelTypeLookup;

export type ActivePokemonLabelTypeLookup = IncompleteMap<LabelTypeLookup>;