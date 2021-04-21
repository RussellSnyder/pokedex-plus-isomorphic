import { IncompleteMap, QueryParamCollection } from '../models/query-param-collection';
export declare enum SortQueryParam {
    Name = "name",
    Height = "height",
    Weight = "weight"
}
export interface SortQueryLabelTypeLookup {
    [SortQueryParam.Name]: string;
    [SortQueryParam.Height]: number;
    [SortQueryParam.Weight]: number;
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
export declare const intervalQueryParamCollection: QueryParamCollection<IntervalQueryLabelTypeLookup>;
export declare enum FilterQueryParam {
    Type = "type",
    Ability = "ability",
    Move = "move",
    IsDefault = "isDefault",
    Generation = "generation",
    HeightMin = "heightMin",
    HeightMax = "heightMax"
}
export interface FilterQueryLabelTypeLookup {
    [FilterQueryParam.Type]: string[];
    [FilterQueryParam.Generation]: number[];
    [FilterQueryParam.HeightMin]: number;
    [FilterQueryParam.HeightMax]: number;
}
export declare const filterQueryParamCollection: QueryParamCollection<FilterQueryLabelTypeLookup>;
export declare type PokemonQueryParamKeys = SortQueryParam | IntervalQueryParam | FilterQueryParam;
export declare type PokemonQueryParamsKeyValueMap = SortQueryParam & IntervalQueryLabelTypeLookup & FilterQueryLabelTypeLookup;
export declare type ActivePokemonLabels = IncompleteMap<PokemonQueryParamKeys>;
export declare type LabelTypeLookup = IntervalQueryLabelTypeLookup & SortQueryLabelTypeLookup & FilterQueryLabelTypeLookup;
export declare type ActivePokemonLabelTypeLookup = IncompleteMap<LabelTypeLookup>;
