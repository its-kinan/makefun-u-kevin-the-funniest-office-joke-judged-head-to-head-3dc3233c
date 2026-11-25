// The Funniest Office Joke, Judged Head to Head
// Writes one single-line office joke to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — the same bytes
// on every run.
import { mkdirSync, writeFileSync } from "node:fs";

// First draft was 203 characters — over the 200-character gate — and
// padded with filler ("any time left", "my actual work", "back-to-back",
// "send him the notes"). Cut every word that is not setup or punchline:
// the joke is the meeting itself being the reason there is no time.
// Final: setup (boss books a meeting about no time) -> turn (moved it
// twice, stuck in meetings) -> punchline last.
const JOKE =
  "My boss booked a meeting to find out why I never have time to work, then moved it twice because he was stuck in meetings.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
