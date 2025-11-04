import chalk from 'chalk';

const { bold, cyan, gray, green, white } = chalk;

const data = {
  name: bold.green('SYED MOHAMMAD SAMEER'),
  email: bold.green('syedsame2244@gmail.com'),
  handle: cyan('@samxiao0'),

  // Links
  npm: gray('https://npmjs.com/') + green('samxiao0'),
  github: gray('https://github.com/') + green('samxiao0'),
  linkedin: gray('https://linkedin.com/in/') + green('samxiao0'),

  labelnpm: white.bold('  📦 NPM:'),
  labelGitHub: white.bold('  🐱 GitHub:'),
  labelLinkedIn: white.bold('  💼 LinkedIn:'),

  firstPhrase: `🎓 I am ${bold.green(
    'a Computer Science Engineer'
  )} specializing in ${bold.green('AI & ML')} at AITS college.`,
  secondPhrase: `💻 I love working with ${cyan('AI')} and ${cyan(
    'Web Development'
  )} ⚡`,

  bio: `🎓 I am ${bold.green(
    'a Computer Science Engineer'
  )} specializing in ${bold.green('AI & ML')} at AITS college.

💻 I love working with ${cyan('AI')} and ${cyan('Web Development')} ⚡`,

  farewell: bold.blue(' phir milenge! :)'),
  borderColor: 'green',
  borderStyle: 'single',
};

export default data;