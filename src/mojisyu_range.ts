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
    //kind: "range" = "range";
    name: string;
    start: number;
    end: number;

    /**
     * @param {String} name
     * @param {TypeMojisyuRange} mObj
     */
    constructor(name: string, start: number, end: number) {
        this.name = name;
        this.start = start;
        this.end = end;
    }

    /**
     * @param {string} str
     * @param {Mojisyu} to
     * @return {string}
     */
    convert(str: string, to: MojisyuRange): string {
        const d = to.start - this.start;
        return rangeMap(str, this.start, this.end, (match, s, c) => {
            if (!match) {
                return s;
            }
            return String.fromCharCode(c + d);
        }).join("");
    }

    /**
     * @param {string} str
     * @return {string}
     */
    filter(str: string): string {
        return rangeMap(str, this.start, this.end, (match, str) => {
            if (!match) {
                return "";
            }
            return str;
        }).join("");
    }

    /**
     * @param {string} str
     * @return {string}
     */
    reject(str: string): string {
        return rangeMap(str, this.start, this.end, (match, str, code) => {
            if (!match) {
                return str;
            }
            return "";
        }).join("");
    }
}
