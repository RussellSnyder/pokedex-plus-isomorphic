import { ValueOf } from '../util';
import { QueryParam, SerializedQueryParam } from './query-param';
export declare type QueryParamCollectionType<KV extends string | number | symbol> = {
    [K in keyof KV]: QueryParam<KV[K]>;
};
declare type TypedQueryParam<T> = QueryParam<T>;
export declare type TypedQueryParamLookup<LabelTypeMap> = {
    [K in keyof LabelTypeMap]: TypedQueryParam<LabelTypeMap[K]>;
};
export declare type IncompleteMap<LabelTypeMap> = {
    [Label in keyof LabelTypeMap]?: LabelTypeMap[Label];
};
export declare class QueryParamCollection<LabelTypeMap> {
    activeParams: IncompleteMap<LabelTypeMap>;
    private queryParams;
    constructor(queryParams: TypedQueryParamLookup<LabelTypeMap>);
    updateQueryParamsFromSerialized: (serializedQueryParam?: SerializedQueryParam | undefined) => void;
    updateQueryParam: (label: keyof LabelTypeMap, value: LabelTypeMap[keyof LabelTypeMap]) => void;
    updateQueryParams: (labelValue: IncompleteMap<LabelTypeMap>) => void;
    getQueryParamByLabel: (label: keyof LabelTypeMap) => TypedQueryParam<LabelTypeMap[keyof LabelTypeMap]>;
    getLabelFromSerializedKey: (key: string) => keyof LabelTypeMap | undefined;
    getQueryValueByLabel: (key: keyof LabelTypeMap) => ValueOf<LabelTypeMap> | undefined;
    getQueryParamFromSerializedKey: (key: string) => QueryParam<ValueOf<LabelTypeMap>> | undefined;
    getSerializedQueryParams: () => {
        [key: string]: string;
    };
    getSerializedQueryParamsWithValues: () => {
        [key: string]: string;
    };
    getActiveQueryParams: () => IncompleteMap<LabelTypeMap>;
    getLabelValueObject: () => LabelTypeMap;
    private updateActiveQueryParams;
}
export {};
