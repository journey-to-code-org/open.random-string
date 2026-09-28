import test from "node:test";
import assert from "node:assert/strict";
import { randomString } from "../src/index.js";
test("uses requested length",()=>assert.equal(randomString(20).length,20));
test("uses custom alphabet",()=>assert.match(randomString(30,{alphabet:"ab"}),/^[ab]+$/u));
test("supports zero length",()=>assert.equal(randomString(0),""));
