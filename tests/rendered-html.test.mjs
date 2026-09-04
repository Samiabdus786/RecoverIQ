import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const recoveriqTitle = /title:\s*"RecoverIQ . AI Revenue Recovery"/i;

test("builds RecoverIQ production metadata", async () => {
  const serverUrl = new URL("../dist/server/index.js", import.meta.url);
  serverUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const server = await import(serverUrl.href);

  assert.equal(typeof server.default, "function");
  assert.ok("generateStaticParamsMap" in server);

  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, recoveriqTitle);
  assert.doesNotMatch(layout, /Starter Project/i);
});
