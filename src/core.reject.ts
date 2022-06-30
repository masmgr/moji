import { map } from "./core.map";
import { TypeMojisyuPatternsTuple } from "./default_mojisyu";
import {
    Mojisyu,
    MojisyuPatterns,
    MojisyuRange,
    MojisyuRegexpList,
} from "./mojisyu";

/**
 * @param {string} str
 * @param {Mojisyu} rejectMojisyu
 * @return {string}
 */
export function reject(str: string, rejectMojisyu: Mojisyu): string {
    if (rejectMojisyu.kind === "range") {
        str = rangeReject(str, rejectMojisyu);
    }
    if (rejectMojisyu.kind === "regexpList") {
        str = regexpListReject(str, rejectMojisyu);
    }
    if (rejectMojisyu.kind === "patterns") {
        str = patternReject(str, rejectMojisyu);
    }
    return str;
}

/**
 * @param {string} str
 * @param {Mojisyu} rejectMojisyu
 * @return {string}
 * @private
 */
function rangeReject(str: string, rejectMojisyu: MojisyuRange): string {
    return map
        .rangeMap(
            str,
            rejectMojisyu.props.start,
            rejectMojisyu.props.end,
            (match, str, code) => {
                if (!match) {
                    return str;
                }
                return "";
            }
        )
        .join("");
}

/**
 * @param {string} str
 * @param {Mojisyu} rejectMojisyu
 * @return {string}
 * @private
 */
function regexpListReject(
    str: string,
    rejectMojisyu: MojisyuRegexpList
): string {
    map.regexpMap(str, rejectMojisyu.props.regexp, (s) => {
        const i = rejectMojisyu.props.list.indexOf(s);
        if (i !== -1) {
            str = str.replace(s, "");
        }
        return s;
    });
    return str;
}

/**
 * @param {string} str
 * @param {Mojisyu} rejectMojisyu
 * @return {string}
 * @private
 */
function patternReject(str: string, rejectMojisyu: MojisyuPatterns): string {
    rejectMojisyu.props.patterns.forEach(
        (pattern: TypeMojisyuPatternsTuple) => {
            map.regexpMap(str, pattern[0], (s) => {
                str = str.replace(s, "");
                return str;
            });
        }
    );
    return str;
}
