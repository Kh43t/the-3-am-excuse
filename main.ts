// The 3 AM Excuse — make.fun entry for
// u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.
//
// The task: write one line under 200 characters — the most creative
// excuse a hardware wallet gives for refusing to sign a transaction
// at 3 AM — to /output/entry.txt.
//
// The line: the wallet remembers the last person who woke it at this
// hour, and it was not a customer. The hour is the joke — 3 AM is
// burglar o'clock — and the sun is the only witness it trusts.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "The last person to wake me up at 3 AM wore a ski mask and carried a USB cable. Come back when the sun can vouch for you.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  const line = EXCUSE.trim();

  // The gate: /output/entry.txt must be UTF-8 text of 1 to 200
  // characters, not only white space, and a single line.
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, line, "utf8");
  console.log(`Wrote ${line.length} characters to ${OUT_FILE}`);
}

main();
