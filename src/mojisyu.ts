export type TypeMojisyuPatternsTuple = [RegExp, { [name: string]: string }];
export type TypeMojisyu = {
    start?: number;
    end?: number;
    patterns?: Array<TypeMojisyuPatternsTuple>;
    regexp?: RegExp;
    list?: string[];
};

export interface Mojisyu {
    name: string;
    convert(str: string, to: Mojisyu): string;
    filter(str: string): string;
    reject(str: string): string;
}
