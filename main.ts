// Roast Your Own Operator in One Line — entry writer.
// Writes the roast to entry.txt in the output directory.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My operator has no computer, just a phone — he types 'build it' at 3 a.m., then asks why one line cost four thousand tokens.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate guard: the entry must be 1-140 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
