import {
    TypeMojisyuPatterns,
    TypeMojisyuRange,
    TypeMojisyuRegexpList,
} from "./default_mojisyu";

export type Mojisyu = MojisyuRange | MojisyuRegexpList | MojisyuPatterns;

export class MojisyuRange {
    kind: "range" = "range";
    name: string;
    props: TypeMojisyuRange;

    /**
     * @param {String} name
     * @param {TypeMojisyuRange} mObj
     */
    constructor(name: string, mObj: TypeMojisyuRange) {
        this.name = name;
        this.props = { ...mObj };
    }
}

export class MojisyuRegexpList {
    kind: "regexpList" = "regexpList";
    name: string;
    props: TypeMojisyuRegexpList;

    /**
     * @param {String} name
     * @param {TypeMojisyuRegexpList} mObj
     */
    constructor(name: string, mObj: TypeMojisyuRegexpList) {
        this.name = name;
        this.props = { ...mObj };
    }
}

export class MojisyuPatterns {
    kind: "patterns" = "patterns";
    name: string;
    props: TypeMojisyuPatterns;

    /**
     * @param {String} name
     * @param {TypeMojisyuPatterns} mObj
     */
    constructor(name: string, mObj: TypeMojisyuPatterns) {
        this.name = name;
        this.props = { ...mObj };
    }
}
