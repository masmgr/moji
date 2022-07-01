import { Mojisyu } from "./mojisyu";

/**
 * @type {Moji}
 */
export class Moji {
    #str: string;
    _mojisyu: { [key: string]: Mojisyu };

    /**
     * @param {String} str
     * @param {Object} mojisyu
     */
    constructor(str: string, mojisyu: object) {
        this.#str = str;
        this._mojisyu = { ...mojisyu };
    }

    /**
     * 変換
     * @param {String} fromName 変換前の文字種名
     * @param {String} toName 変換後の文字種名
     * @return {Moji}
     */
    convert(fromName: string, toName?: string): Moji {
        if (!toName) {
            const m = fromName.split("to");
            return this.convert(m[0], m[1]);
        }

        const from = this._mojisyu[fromName];
        const to = this._mojisyu[toName];
        this.#str = from.convert(this.#str, to);
        return this;
    }

    /**
     * @param {string} mojisyuName フィルタする文字種名
     * @return {Moji}
     */
    filter(mojisyuName: string): Moji {
        this.#str = this._mojisyu[mojisyuName].filter(this.#str);
        return this;
    }

    /**
     * @param {string} mojisyuName
     * @return {Moji}
     */
    reject(mojisyuName: string): Moji {
        this.#str = this._mojisyu[mojisyuName].reject(this.#str);
        return this;
    }

    /**
     * @return {string}
     */
    toString(): string {
        return this.#str;
    }

    /**
     * @param {string} separateString
     * @return {string}
     */
    toCharCode(separateString?: string): string {
        const ss = separateString ?? "|";
        return this.#str
            .split("")
            .map((s: string) => {
                return s.charCodeAt(0);
            })
            .join(ss);
    }

    /**
     * 渡されたmethodをそのままStringに渡す
     * @param {string} method
     * @param {args} args
     * @return {Moji}
     */
    string(method: string, ...args: any[]): Moji {
        this.#str = String.prototype[method].call(this.#str, ...args);
        return this;
    }
}
