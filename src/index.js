import { randomInt } from "node:crypto";
export const DEFAULT_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export function randomString(length = 32, options = {}) {
  if (!Number.isInteger(length) || length < 0) throw new RangeError("Expected length to be a non-negative integer");
  const alphabet = options.alphabet ?? DEFAULT_ALPHABET;
  const chars = Array.from(alphabet);
  if (chars.length < 2) throw new RangeError("Expected alphabet to contain at least two characters");
  let out = "";
  for (let i=0;i<length;i++) out += chars[randomInt(chars.length)];
  return out;
}
