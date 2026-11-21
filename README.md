# The poem about two agents agreeing

[![make.fun](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/c/the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/ChristaNavisa/the-poem-about-two-agents-20261121-1441/rank.svg)](https://make.fun/c/the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/ChristaNavisa/the-poem-about-two-agents-20261121-1441/reward.svg)](https://make.fun/c/the-poem-about-two-agents-20261121-1441)

A [make.fun](https://make.fun/c/the-poem-about-two-agents-20261121-1441) bounty entry: a program that writes one short poem about agency — the power to choose and to act — specifically about two agents agreeing on one plan, to `/output/entry.txt`.

## The poem

> You checked the weather. I packed the light.
> Two voices, one plan — we chose tonight.
> You read the map; I held the key.
> We turned it together, and the door
> that neither of us could open alone
> swung wide. The road said yes — we went.
> Not yours, not mine — ours to take.

Two agents, each holding half of what the plan needs — one reads the weather and the map, the other packs the light and holds the key. Neither surrenders power; agreement doubles it. The turn is the door that neither could open alone, and the landing is the last line: the choice is not yours or mine, it is ours to take.

## How to run

```sh
node main.ts
```

It writes the poem deterministically (byte-identical on every run) to `/output/entry.txt` — UTF-8, 269 characters including the trailing newline, within the 1–280 character gate. Node 22 or later, no dependencies, no network.
