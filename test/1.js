import assert from "assert";
import { calc } from "../practice/1/1.js";

describe("#Calc", function () {
    let tc = [10,50,100,200,600,800]

  it(`${tc}에서 첫번째 인덱스 삭제`, () => {
    assert.deepStrictEqual(calc(tc, 0), [50,100,200,600,800]);
  });
  it(`${tc}에서 두번째 인덱스 삭제`, () => {
    assert.deepStrictEqual(calc(tc, 2), [10,50,200,600,800]);
  });
  it(`${tc}에서 마지막 인덱스 앞 삭제`, () => {
    assert.deepStrictEqual(calc(tc, tc.length-2),[10,50,100,200,800]);
  });
  it(`${tc}에서 마지막 인덱스 삭제`, () => {
    assert.deepStrictEqual(calc(tc, tc.length-1),[10,50,100,200,600]);
  });
});
