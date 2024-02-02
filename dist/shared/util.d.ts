import { TransformFnParams } from 'class-transformer';
export declare const toTrimString: ({ value }: TransformFnParams) => string;
export declare const toNumber: (key: string, value: string) => number;
export declare function getDataFromCsv(path: string): Promise<any[]>;
