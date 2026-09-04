import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const recoveriqTitle = /title:\s*"RecoverIQ . AI Revenue Recovery"/i;

test("builds RecoverIQ production metadata", async () => {
  const server = await readFile(
    new URL("../.output/server/index.mjs", import.meta.url),
    "utf8",
  );
  assert.match(server, /RecoverIQ|nitro|handler/i);

  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, recoveriqTitle);
  assert.doesNotMatch(layout, /Starter Project/i);
});
