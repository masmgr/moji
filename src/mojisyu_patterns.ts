import { Mojisyu, TypeMojisyuPatternsTuple } from "./mojisyu";

function regexpMap(
    str: string,
    regexp: RegExp,
    cb: (s: string) => string
): string {
    return str.replace(regexp, (s) => {
        return cb(s);
    });
}

export class MojisyuPatterns implements Mojisyu {
    name: string;
    patterns: Array<TypeMojisyuPatternsTuple>;

    constructor(name: string, patterns: Array<TypeMojisyuPatternsTuple>) {
        this.name = name;
        this.patterns = patterns;
    }

    convert(str: string, to: MojisyuPatterns): string {
        return this.patterns
            .map((pattern: TypeMojisyuPatternsTuple) => {
                return regexpMap(str, pattern[0], (s: string) => {
                    return pattern[1][to.name];
                });
            })
            .join("");
    }

    filter(str: string): string {
        const r = [];
        this.patterns.forEach((pattern) => {
            regexpMap(str, pattern[0], (s) => {
                r.push(s);
                return s;
            });
        });
        return r.join("");
    }

    reject(str: string): string {
        this.patterns.forEach((pattern: TypeMojisyuPatternsTuple) => {
            regexpMap(str, pattern[0], (s) => {
                str = str.replace(s, "");
                return str;
            });
        });
        return str;
    }
}
