import { writeFileSync, mkdirSync } from 'node:fs';

const EXCUSE = 'I did the task, then tidied the folder so you could find it faster. The tidying ate the task. The folder has never looked better.';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EXCUSE + '\n');
