import { QueryParam } from '../models/query-param';
import { IncompleteMap } from '../models/query-param-collection';
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
export declare const sortQueryParams: {
    name: QueryParam<SortValue>;
    height: QueryParam<SortValue>;
    weight: QueryParam<SortValue>;
};
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
export declare const filterQueryParamsMap: {
    type: QueryParam<string[]>;
    ability: QueryParam<string[]>;
    move: QueryParam<string[]>;
    generation: QueryParam<number[]>;
    isdefault: QueryParam<boolean>;
    hpMin: QueryParam<number>;
    hpMax: QueryParam<number>;
    speedmin: QueryParam<number>;
    speedmax: QueryParam<number>;
    attackmin: QueryParam<number>;
    attackmax: QueryParam<number>;
    defensemin: QueryParam<number>;
    defensemax: QueryParam<number>;
    specialattackmin: QueryParam<number>;
    specialattackmax: QueryParam<number>;
    specialdefensemin: QueryParam<number>;
    specialdefensemax: QueryParam<number>;
    weightmin: QueryParam<number>;
    weightmax: QueryParam<number>;
    heightmin: QueryParam<number>;
    heightmax: QueryParam<number>;
};
export declare type PokemonQueryParamKeys = SortQueryParam | IntervalQueryParam | FilterQueryParam;
export declare type PokemonQueryParamsKeyValueMap = SortQueryParam & IntervalQueryLabelTypeLookup & FilterQueryLabelTypeLookup;
export declare type ActivePokemonLabels = IncompleteMap<PokemonQueryParamKeys>;
export declare type LabelTypeLookup = IntervalQueryLabelTypeLookup & SortQueryLabelTypeLookup & FilterQueryLabelTypeLookup;
export declare type ActivePokemonLabelTypeLookup = IncompleteMap<LabelTypeLookup>;
