import { Moji } from "./moji";
import { defaultMojisyu } from "./default_mojisyu";
import { Mojisyu, TypeMojisyu } from "./mojisyu";
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

function CreateMojisyu(m: string, vm: TypeMojisyu): Mojisyu {
    if (vm.start !== undefined && vm.end !== undefined) {
        return new MojisyuRange(m, vm.start, vm.end);
    }
    if (vm.regexp !== undefined && vm.list !== undefined) {
        return new MojisyuRegexpList(m, vm.regexp, vm.list);
    }
    if (vm.patterns !== undefined) {
        return new MojisyuPatterns(m, vm.patterns);
    }
}

moji.addMojisyu = (obj: { [name: string]: TypeMojisyu }) => {
    for (const m of Object.keys(obj)) {
        mojisyu[m] = CreateMojisyu(m, obj[m]);
    }
};

moji.addMojisyu(defaultMojisyu);
