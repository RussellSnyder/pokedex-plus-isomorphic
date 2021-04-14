import { QueryParam, SerializedQueryParam } from './query-param';
export declare type QueryParamMap = Map<string, QueryParam<any>>;
export declare class QueryParamCollection {
    activeQueryParams: {
        [key: string]: any;
    };
    private queryParams;
    constructor(queryParams: QueryParamMap);
    updateQueryParamsFromSerialized: (serializedQueryParam?: SerializedQueryParam | undefined) => QueryParamMap;
    getQueryParamByLabel: (key: string) => QueryParam<any> | undefined;
    getLabelFromSerializedKey: (key: string) => string | undefined;
    getQueryValueByLabel: (key: string) => any | undefined;
    getQueryParamsFromSerializedKey: (key: string) => QueryParam<any> | undefined;
    getSerializedQueryParams: () => {
        [key: string]: string;
    };
    getSerializedQueryParamsWithValues: () => {
        [key: string]: string;
    };
    getActiveQueryParams: () => {
        [key: string]: any;
    };
    getLabelValueObject: () => {};
    updateQueryParam: (label: string, value: any) => void;
    private updateActiveQueryParams;
}
