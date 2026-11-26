import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "★★☆☆☆ — Monday made me read 312 emails before breakfast, sit through a meeting about a meeting, then rewarded me with a 'quick sync'.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
