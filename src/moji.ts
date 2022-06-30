import { core } from "./core";
import { Mojisyu } from "./mojisyu";

/**
 * @type {Moji}
 */
export class Moji {
    private _str: string;
    private _mojisyu: { [key: string]: Mojisyu };
    /**
     * @param {String} str
     * @param {Object} mojisyu
     */
    constructor(str: string, mojisyu: object) {
        this._str = str;
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
        this._str = core.convert(this._str, from, to);
        return this;
    }

    /**
     * @param {string} filterMojisyuName フィルタする文字種名
     * @return {Moji}
     */
    filter(filterMojisyuName: string): Moji {
        this._str = core.filter(this._str, this._mojisyu[filterMojisyuName]);
        return this;
    }

    /**
     * @param {string} rejectMojisyuName
     * @return {Moji}
     */
    reject(rejectMojisyuName: string): Moji {
        this._str = core.reject(this._str, this._mojisyu[rejectMojisyuName]);
        return this;
    }

    /**
     * @return {string}
     */
    toString(): string {
        return this._str;
    }

    /**
     * @param {string} separateString
     * @return {string}
     */
    toCharCode(separateString?: string): string {
        const ss = separateString ?? "|";
        return this._str
            .split("")
            .map((s) => {
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
        this._str = String.prototype[method].call(this._str, ...args);
        return this;
    }
}
