#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import open from "open";
import ansiAlign from 'ansi-align';

import process from "process";

import data from "./config.js";

// Clear the terminal and move cursor to top-left
process.stdout.write('\x1Bc');

// Build a multi-line output using the fields present in `data`.
const lines = [];
lines.push(`${data.name} / ${data.handle || ''}`);
lines.push(`${data.email}`);
lines.push('');
// Links and labels (only include if present)
if (data.labelnpm && data.npm) lines.push(`${data.labelnpm}  ${data.npm}`);
if (data.labelGitHub && data.github) lines.push(`${data.labelGitHub}  ${data.github}`);
if (data.labelLinkedIn && data.linkedin) lines.push(`${data.labelLinkedIn}  ${data.linkedin}`);
if (data.labelTwitter && data.twitter) lines.push(`${data.labelTwitter}  ${data.twitter}`);

lines.push('');
// Add bio text
lines.push(data.firstPhrase);
lines.push('');
lines.push(data.secondPhrase);

const card = lines.join("\n");

// Center the card's text lines before rendering the box so content
// appears centered inside the box. `ansi-align` preserves ANSI codes.
const centered = ansiAlign(card, 'center');

// Add a decorative header
const headerFooter = '•——————•°•❈•°•——————•'.repeat(2);

// Combine header with content
const decoratedContent = `${headerFooter}\n\n${centered}\n\n${headerFooter}`;

const box = boxen(decoratedContent, {
  padding: { top: 1, bottom: 1, left: 3, right: 3 },
  margin: { top: 0, bottom: 1, left: 'auto', right: 'auto' },
  float: 'center',
  borderStyle: "round",
  borderColor: "green",
  textAlignment: "center",
  width: 90,
  dimBorder: false
});

console.log(box);

// Helper to strip ANSI color codes for actions that require raw values
function stripAnsi(input) {
  if (typeof input !== 'string') return input;
  return input.replace(/\x1b\[[0-9;]*m/g, '');
}

inquirer
  .createPromptModule()([
    {
      type: "list",
      name: "action",
      message: "What do you want to do?",
      choices: [
        {
          name: "Send me an email?",
          value() {
            const emailRaw = stripAnsi(data.email);
            open(`mailto:${emailRaw}`);
            console.log(stripAnsi(data.farewell || ''));
          },
        },
        {
          name: "Exit",
          value() {
            console.log(stripAnsi(data.farewell || ''));
          },
        },
      ],
    },
  ])
  .then((answer) => answer.action());
