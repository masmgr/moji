import { Moji } from "./moji";
import { defaultMojisyu } from "./default_mojisyu";
import { Mojisyu } from "./mojisyu";
import { MojisyuRange } from "./mojisyu_range";
import { MojisyuRegexpList } from "./mojisyu_ragexplist";
import { MojisyuPatterns } from "./mojisyu_patterns";

let mojisyu: { [name: string]: Mojisyu } = {};

/**
 * @param {string} str
 * @return {Moji}
 */
export function moji(str: "ZE" | string): Moji {
    return new Moji(str, mojisyu);
}

moji.addMojisyu = (obj: {
    [name: string]: {
        start?: number;
        end?: number;
        patterns?: [[RegExp, { [name: string]: string }]];
        regexp?: RegExp;
        list?: string[];
    };
}) => {
    for (const m of Object.keys(obj)) {
        const vm = obj[m];
        if (vm.start !== undefined && vm.end !== undefined) {
            mojisyu[m] = new MojisyuRange(m, vm.start, vm.end);
        }
        if (vm.regexp !== undefined && vm.list !== undefined) {
            mojisyu[m] = new MojisyuRegexpList(m, vm.regexp, vm.list);
        }
        if (vm.patterns !== undefined) {
            mojisyu[m] = new MojisyuPatterns(m, vm.patterns);
        }
    }
};

moji.addMojisyu(defaultMojisyu);
