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

export class MojisyuRegexpList implements Mojisyu {
    name: string;
    regexp: RegExp;
    list: string[];

    constructor(name: string, regexp: RegExp, list: string[]) {
        this.name = name;
        this.regexp = regexp;
        this.list = list;
    }

    convert(str: string, to: MojisyuRegexpList): string {
        return regexpMap(str, this.regexp, (s) => {
            const i = this.list.indexOf(s);
            if (i === -1) return s;
            return to.list[i];
        });
    }

    filter(str: string): string {
        const r: string[] = [];
        regexpMap(str, this.regexp, (s: string) => {
            const i = this.list.indexOf(s);
            if (i !== -1) {
                r.push(s);
            }
            return s;
        });
        return r.join("");
    }

    reject(str: string): string {
        regexpMap(str, this.regexp, (s) => {
            const i = this.list.indexOf(s);
            if (i !== -1) {
                str = str.replace(s, "");
            }
            return s;
        });
        return str;
    }
}
