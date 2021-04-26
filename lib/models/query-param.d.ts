export declare type SerializedQueryParam = {
    [key: string]: string;
};
declare type QueryParamConstructorOptions<V> = {
    serializedValue?: string;
    value?: V;
};
export declare class QueryParam<V> {
    serializedKey: string;
    toModelFunction: (value: string) => V;
    serializeValueFunction: (value: V) => string;
    value?: V;
    serializedValue: string;
    constructor(serializedKey: string, toModelFunction: (s: string) => V, serializeValueFunction: (v: V) => string, options?: QueryParamConstructorOptions<V>);
    setSerializedValue(v: string): void;
    setValue(v: V): void;
    getSerializedQuery: () => SerializedQueryParam;
    clearValue(): void;
}
export {};
