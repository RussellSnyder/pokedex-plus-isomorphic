import { QueryParam, SerializedQueryParam } from './query-param';
export declare type QueryParams<T extends string | number | symbol> = {
    [key in T]: QueryParam<any>;
};
export declare type ActiveParams<T extends string | number | symbol> = {
    [key in T]: any;
};
export declare class QueryParamCollection<T extends string | number | symbol> {
    activeParams: ActiveParams<T>;
    private queryParams;
    constructor(queryParams: QueryParams<T>);
    updateQueryParamsFromSerialized: (serializedQueryParam?: SerializedQueryParam | undefined) => void;
    updateQueryParam: (label: T, value: any) => void;
    getQueryParamByLabel: (key: T) => QueryParam<any>;
    getLabelFromSerializedKey: (key: string) => T | undefined;
    getQueryValueByLabel: (key: T) => any | undefined;
    getQueryParamFromSerializedKey: (key: string) => QueryParam<any> | undefined;
    getSerializedQueryParams: () => {
        [key: string]: string;
    };
    getSerializedQueryParamsWithValues: () => {
        [key: string]: string;
    };
    getActiveQueryParams: () => ActiveParams<T>;
    getLabelValueObject: () => ActiveParams<T>;
    private updateActiveQueryParams;
}
