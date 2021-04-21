import { QueryParam } from '../models/query-param';
import { IncompleteMap, QueryParamCollection } from '../models/query-param-collection';
import { SortValue } from '../types';
export declare enum SortQueryParam {
    Name = "name",
    Height = "height",
    Weight = "weight"
}
export interface SortQueryLabelTypeLookup {
    [SortQueryParam.Name]: SortValue;
    [SortQueryParam.Height]: SortValue;
    [SortQueryParam.Weight]: SortValue;
}
export declare const sortQueryParamCollection: QueryParamCollection<SortQueryLabelTypeLookup>;
export declare enum IntervalQueryParam {
    Offset = "offset",
    Limit = "limit"
}
export interface IntervalQueryLabelTypeLookup {
    [IntervalQueryParam.Offset]: number;
    [IntervalQueryParam.Limit]: number;
}
export declare const intervalQueryParams: {
    offset: QueryParam<number>;
    limit: QueryParam<number>;
};
export declare const intervalQueryParamCollection: QueryParamCollection<IntervalQueryLabelTypeLookup>;
export declare enum FilterQueryParam {
    Type = "type",
    Ability = "ability",
    Move = "move",
    IsDefault = "isdefault",
    Generation = "generation",
    HpMin = "hpMin",
    HpMax = "hpMax",
    SpeedMin = "speedmin",
    SpeedMax = "speedmax",
    AttackMin = "attackmin",
    AttackMax = "attackmax",
    DefenseMin = "defensemin",
    DefenseMax = "defensemax",
    SpecialAttackMin = "specialattackmin",
    SpecialAttackMax = "specialattackmax",
    SpecialDefenseMin = "specialdefensemin",
    SpecialDefenseMax = "specialdefensemax",
    HeightMin = "heightmin",
    HeightMax = "heightmax",
    WeightMin = "weightmin",
    WeightMax = "weightmax"
}
export interface FilterQueryLabelTypeLookup {
    [FilterQueryParam.Type]: string[];
    [FilterQueryParam.Ability]: string[];
    [FilterQueryParam.Move]: string[];
    [FilterQueryParam.IsDefault]: boolean;
    [FilterQueryParam.Generation]: number[];
    [FilterQueryParam.HpMin]: number;
    [FilterQueryParam.HpMax]: number;
    [FilterQueryParam.SpeedMin]: number;
    [FilterQueryParam.SpeedMax]: number;
    [FilterQueryParam.AttackMin]: number;
    [FilterQueryParam.AttackMax]: number;
    [FilterQueryParam.DefenseMin]: number;
    [FilterQueryParam.DefenseMax]: number;
    [FilterQueryParam.SpecialAttackMin]: number;
    [FilterQueryParam.SpecialAttackMax]: number;
    [FilterQueryParam.SpecialDefenseMin]: number;
    [FilterQueryParam.SpecialDefenseMax]: number;
    [FilterQueryParam.HeightMin]: number;
    [FilterQueryParam.HeightMax]: number;
    [FilterQueryParam.WeightMin]: number;
    [FilterQueryParam.WeightMax]: number;
}
export declare const filterQueryParamCollection: QueryParamCollection<FilterQueryLabelTypeLookup>;
export declare type PokemonQueryParamKeys = SortQueryParam | IntervalQueryParam | FilterQueryParam;
export declare type PokemonQueryParamsKeyValueMap = SortQueryParam & IntervalQueryLabelTypeLookup & FilterQueryLabelTypeLookup;
export declare type ActivePokemonLabels = IncompleteMap<PokemonQueryParamKeys>;
export declare type LabelTypeLookup = IntervalQueryLabelTypeLookup & SortQueryLabelTypeLookup & FilterQueryLabelTypeLookup;
export declare type ActivePokemonLabelTypeLookup = IncompleteMap<LabelTypeLookup>;
