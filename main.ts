// The poem about two agents agreeing — entrypoint.
// Writes the tournament-winning poem to /output/entry.txt.
// Fully deterministic: the poem is hardcoded, no randomness, no clock,
// no network. Running it twice produces byte-for-byte identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `My finger hovers over Enter.
You have already read the plan twice,
found the loose bolt, tightened it,
and waited.
Nothing happens until I press.
That is the whole of it:
two minds, one key —
I choose the moment,
you choose the weight.`;

// Verified counts for the poem above (Unicode code points, [...poem].length):
// 235 code points, 237 UTF-8 bytes — inside the 1–280 gate, and short
// enough to win a byte-length tie-break.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the poem as counted above,
// so the gate sees the same 235 code points on every run.
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
