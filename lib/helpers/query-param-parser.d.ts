import { SortValue } from "../types";
declare const queryParamParser: {
    toModelString: (v: string) => string;
    serializeString: (v: string) => string;
    toModelSortValue: (v: string) => SortValue;
    serializeSortValue: (v: SortValue) => string;
    toModelNumber: (v: string) => number;
    serializeNumber: (v: number) => string;
    toModelStringList: (v: string) => string[];
    serializeStringList: (v: string[]) => string;
    toModelNumberList: (v: string) => number[];
    serializeNumberList: (v: number[]) => string;
    toModelBoolean: (value: string) => boolean;
    serializeBoolean: (v: boolean) => string;
};
export default queryParamParser;
