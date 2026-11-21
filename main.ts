import { mkdirSync, writeFileSync } from "node:fs";

// One short poem about agency: the power to choose and to act,
// specifically about two agents agreeing on one plan.
// Deterministic: the same bytes are written on every run.
const POEM = `You checked the weather. I packed the light.
Two voices, one plan — we chose tonight.
You read the map; I held the key.
We turned it together, and the door
that neither of us could open alone
swung wide. The road said yes — we went.
Not yours, not mine — ours to take.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
