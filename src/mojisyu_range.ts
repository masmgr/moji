import { Mojisyu } from "./mojisyu";

function rangeMap(
    str: string,
    startCode: number,
    endCode: number,
    cb: (b: boolean, s: string, c?: number) => string
): Array<string> {
    return str.split("").map((s) => {
        const c = s.charCodeAt(0);
        return cb(c > startCode && c < endCode, s, c);
    });
}

export class MojisyuRange implements Mojisyu {
    name: string;
    start: number;
    end: number;

    constructor(name: string, start: number, end: number) {
        this.name = name;
        this.start = start;
        this.end = end;
    }

    convert(str: string, to: MojisyuRange): string {
        const d = to.start - this.start;
        return rangeMap(str, this.start, this.end, (match, s, c) => {
            if (!match) {
                return s;
            }
            return String.fromCharCode(c + d);
        }).join("");
    }

    filter(str: string): string {
        return rangeMap(str, this.start, this.end, (match, str) => {
            if (!match) {
                return "";
            }
            return str;
        }).join("");
    }

    reject(str: string): string {
        return rangeMap(str, this.start, this.end, (match, str, code) => {
            if (!match) {
                return str;
            }
            return "";
        }).join("");
    }
}
