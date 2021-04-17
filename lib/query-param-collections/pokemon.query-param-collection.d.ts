import { QueryParamCollection } from '../models/query-param-collection';
export declare enum SortQueryParam {
    Name = "name",
    Height = "height",
    Weight = "weight"
}
export declare const sortQueryParamCollection: QueryParamCollection<SortQueryParam>;
export declare enum IntervalQueryParam {
    Offset = "offset",
    Limit = "limit"
}
export declare const intervalQueryParamCollection: QueryParamCollection<IntervalQueryParam>;
export declare enum FilterQueryParam {
    Type = "type",
    Generation = "generation",
    HeightMin = "heightMin",
    HeightMax = "heightMax"
}
export declare const filterQueryParamCollection: QueryParamCollection<FilterQueryParam>;
export declare type PokemonQueryParamKeys = SortQueryParam | IntervalQueryParam | FilterQueryParam;
export interface PokemonQueryParamsKeyValueMap {
    [SortQueryParam.Name]?: string;
    [SortQueryParam.Height]?: number;
    [SortQueryParam.Weight]?: number;
    [IntervalQueryParam.Offset]?: number;
    [IntervalQueryParam.Limit]?: number;
    [FilterQueryParam.Type]?: string;
    [FilterQueryParam.Generation]?: number;
    [FilterQueryParam.HeightMin]?: number;
    [FilterQueryParam.HeightMax]?: number;
}
