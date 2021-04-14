import { QueryParamCollection } from '../models/query-param-collection';
export declare enum SortQueryParam {
    Name = "name",
    Height = "height",
    Weight = "weight"
}
export declare const sortQueryParamCollection: QueryParamCollection;
export declare enum IntervalQueryParam {
    Offset = "offset",
    Limit = "limit"
}
export declare const intervalQueryParamCollection: QueryParamCollection;
export declare enum FilterQueryParam {
    Type = "type",
    Generation = "generation",
    HeightMin = "heightMin",
    HeightMax = "heightMax"
}
export declare const filterQueryParamCollection: QueryParamCollection;
