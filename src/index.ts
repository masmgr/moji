import { Moji } from "./moji";
import {
    defaultMojisyu,
    TypeMojisyuPatterns,
    TypeMojisyuRange,
    TypeMojisyuRegexpList,
} from "./default_mojisyu";
import {
    Mojisyu,
    MojisyuPatterns,
    MojisyuRange,
    MojisyuRegexpList,
} from "./mojisyu";
let mojisyu: { [name: string]: Mojisyu } = {};

/**
 * @param {string} str
 * @return {Moji}
 */
export function moji(str: string): Moji {
    return new Moji(str, mojisyu);
}

moji.addMojisyu = (obj: {
    [name: string]:
        | TypeMojisyuRange
        | TypeMojisyuRegexpList
        | TypeMojisyuPatterns;
}) => {
    for (const m of Object.keys(obj)) {
        const vm = obj[m];
        switch (vm.kind) {
            case "range":
                mojisyu[m] = new MojisyuRange(m, vm);
                break;
            case "regexpList":
                mojisyu[m] = new MojisyuRegexpList(m, vm);
                break;
            case "patterns":
                mojisyu[m] = new MojisyuPatterns(m, vm);
                break;
        }
    }
};

moji.addMojisyu(defaultMojisyu);
