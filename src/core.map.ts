export class map {
    /**
     * @param {string} str
     * @param {number} startCode
     * @param {number} endCode
     * @param {Function} cb
     * @return {Array}
     * @private
     */
    static rangeMap(
        str: string,
        startCode: number,
        endCode: number,
        cb: (b: boolean, s: string, c: number) => string
    ): Array<string> {
        return str.split("").map((s) => {
            const c = s.charCodeAt(0);
            return cb(c > startCode && c < endCode, s, c);
        });
    }

    /**
     * @param {string} str
     * @param {Regexp} regexp
     * @param {Function} cb
     * @return {String}
     * @private
     */
    static regexpMap(
        str: string,
        regexp: RegExp,
        cb: (s: string) => string
    ): string {
        return str.replace(regexp, (s) => {
            return cb(s);
        });
    }
}
