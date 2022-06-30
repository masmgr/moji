import { map } from "./core.map";
import { TypeMojisyuPatternsTuple } from "./default_mojisyu";
import {
    Mojisyu,
    MojisyuPatterns,
    MojisyuRange,
    MojisyuRegexpList,
} from "./mojisyu";

export function convert(str: string, fromMojisyu: Mojisyu, toMojisyu: Mojisyu) {
    if (fromMojisyu.kind === "range" && toMojisyu.kind === "range") {
        str = rangeConvert(str, fromMojisyu, toMojisyu);
    }
    if (fromMojisyu.kind === "regexpList" && toMojisyu.kind === "regexpList") {
        str = regexpListConvert(str, fromMojisyu, toMojisyu);
    }
    if (fromMojisyu.kind === "patterns" && toMojisyu.kind === "patterns") {
        str = patternConvert(str, fromMojisyu, toMojisyu);
    }
    return str;
}

/**
 * @param {string} str
 * @param {Mojisyu} from
 * @param {Mojisyu} to
 * @return {string}
 * @private
 */
function rangeConvert(
    str: string,
    from: MojisyuRange,
    to: MojisyuRange
): string {
    const d = to.props.start - from.props.start;
    return map
        .rangeMap(str, from.props.start, from.props.end, (match, s, c) => {
            if (!match) {
                return s;
            }
            return String.fromCharCode(c + d);
        })
        .join("");
}

/**
 * @param {string} str
 * @param {Mojisyu} from
 * @param {Mojisyu} to
 * @return {string}
 * @private
 */
function regexpListConvert(
    str: string,
    from: MojisyuRegexpList,
    to: MojisyuRegexpList
): string {
    return map.regexpMap(str, from.props.regexp, (s) => {
        const i = from.props.list.indexOf(s);
        if (i === -1) return s;
        return to.props.list[i];
    });
}

/**
 * @param {string} str
 * @param {Mojisyu} from
 * @param {Mojisyu} to
 * @return {string}
 * @private
 */
function patternConvert(
    str: string,
    from: MojisyuPatterns,
    to: MojisyuPatterns
): string {
    return from.props.patterns
        .map((pattern: TypeMojisyuPatternsTuple) => {
            return map.regexpMap(str, pattern[0], (s: string) => {
                return pattern[1][to.name];
            });
        })
        .join("");
}
