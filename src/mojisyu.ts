export interface Mojisyu {
    name: string;
    convert(str: string, to: Mojisyu): string;
    filter(str: string): string;
    reject(str: string): string;
}
