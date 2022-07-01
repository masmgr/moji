import { Mojisyu } from "./mojisyu";

function regexpMap(
    str: string,
    regexp: RegExp,
    cb: (s: string) => string
): string {
    return str.replace(regexp, (s) => {
        return cb(s);
    });
}

type TypeMojisyuPatternsTuple = [RegExp, { [name: string]: string }];

export class MojisyuPatterns implements Mojisyu {
    name: string;
    patterns: Array<TypeMojisyuPatternsTuple>;

    /**
     * @param {String} name
     * @param {TypeMojisyuPatterns} mObj
     */
    constructor(name: string, patterns: Array<TypeMojisyuPatternsTuple>) {
        this.name = name;
        this.patterns = patterns;
    }

    /**
     * @param {string} str
     * @param {Mojisyu} to
     * @return {string}
     * @private
     */
    convert(str: string, to: MojisyuPatterns): string {
        return this.patterns
            .map((pattern: TypeMojisyuPatternsTuple) => {
                return regexpMap(str, pattern[0], (s: string) => {
                    return pattern[1][to.name];
                });
            })
            .join("");
    }

    /**
     * @param {string} str
     * @return {string}
     * @private
     */
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

    /**
     * @param {string} str
     * @return {string}
     * @private
     */
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
