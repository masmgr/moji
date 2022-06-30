import { map } from "./core.map";
import {
    Mojisyu,
    MojisyuPatterns,
    MojisyuRange,
    MojisyuRegexpList,
} from "./mojisyu";

/**
 * @param {string} str
 * @param {Mojisyu} filterMojisyu フィルタする文字種名
 * @return {string}
 */
export function filter(str: string, filterMojisyu: Mojisyu): string {
    if (filterMojisyu.kind === "range") {
        str = rangeFilter(str, filterMojisyu);
    }
    if (filterMojisyu.kind === "regexpList") {
        str = regexpListFilter(str, filterMojisyu);
    }
    if (filterMojisyu.kind === "patterns") {
        str = patternFilter(str, filterMojisyu);
    }
    return str;
}

/**
 * @param {string} str
 * @param {Mojisyu} filterMojisyu
 * @return {string}
 * @private
 */
function rangeFilter(str: string, filterMojisyu: MojisyuRange): string {
    return map
        .rangeMap(
            str,
            filterMojisyu.props.start,
            filterMojisyu.props.end,
            (match, str, code) => {
                if (!match) {
                    return "";
                }
                return str;
            }
        )
        .join("");
}

/**
 * @param {string} str
 * @param {Mojisyu} filterMojisyu
 * @return {string}
 * @private
 */
function regexpListFilter(
    str: string,
    filterMojisyu: MojisyuRegexpList
): string {
    const r: string[] = [];
    map.regexpMap(str, filterMojisyu.props.regexp, (s: string) => {
        const i = filterMojisyu.props.list.indexOf(s);
        if (i !== -1) {
            r.push(s);
        }
        return s;
    });
    return r.join("");
}

/**
 * @param {string} str
 * @param {Mojisyu} filterMojisyu
 * @return {string}
 * @private
 */
function patternFilter(str: string, filterMojisyu: MojisyuPatterns): string {
    const r = [];
    filterMojisyu.props.patterns.forEach((pattern) => {
        map.regexpMap(str, pattern[0], (s) => {
            r.push(s);
            return s;
        });
    });
    return r.join("");
}
