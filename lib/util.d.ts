export declare const getKeyOfObject: (o: object) => string;
export declare const getValueOfObject: (o: object) => any;
export declare const getKeyAndValueOfObject: (o: object) => [any, any];
export declare type ValueOf<T> = T[keyof T];
