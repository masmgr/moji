import assert from "assert";
import { moji } from "../src";

describe("moji.str", () => {
    it("trim", () => {
        assert.strictEqual(
            moji("　あ　あ　あ　")
                .string("trim")
                .convert("HG", "KK")
                .toString(),
            "ア　ア　ア"
        );
    });

    it("replace", () => {
        assert.strictEqual(
            moji("あああ")
                .string("replace", "あああ", "いいい")
                .convert("HG", "KK")
                .toString(),
            "イイイ"
        );
    });

    it("substr", () => {
        assert.strictEqual(
            moji("abcdefghij").string("substr", 1, 2).toString(),
            "bc"
        );
    });
});
