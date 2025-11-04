# 📇 NPM card

My personal CLI  card. Run `npx samxiao` to see it in action!

<p align="center">
  <img src="https://img.shields.io/npm/v/samxiao?color=green&label=version&style=flat-square" />
  <img src="https://img.shields.io/npm/dt/samxiao?color=blue&style=flat-square" />
  <img src="https://img.shields.io/github/license/samxiao0/npx-card?color=yellow&style=flat-square" />
</p>

## 👀 Preview

```bash
npx samxiao
```

This will display an interactive CLI business card with:
- 💼 Professional information
- 🔗 Social links
- 💌 Direct email option
- 🎨 Custom styling and emojis
- 🖼️ Centered layout with decorative borders

## 🚀 Create Your Own

Want to make your own CLI business card? Follow these steps:

1. Fork this repository
2. Clone your fork:
```bash
git clone https://github.com/samxiao/npx-card.git
cd npx-card
```

3. Install dependencies:
```bash
npm install
```

4. Edit the configuration in `src/config.js`:
```javascript
const data = {
  name: bold.green('YOUR NAME'),
  email: bold.green('your@email.com'),
  handle: cyan('@your_handle'),
  // ... customize other fields
};
```

5. Customize the styling:
- Modify colors using chalk
- Change border styles
- Add your own emojis
- Update the decorative elements

6. Test your changes:
```bash
npm start
```

7. Publish to npm:
```bash
# Login to npm if you haven't
npm login

# Update package.json with your details
# Change "name", "author", and "bin" fields

# Publish!
npm publish
```

## 🛠️ Technologies Used

- Node.js
- [boxen](https://github.com/sindresorhus/boxen) - Create boxes in the terminal
- [chalk](https://github.com/chalk/chalk) - Terminal string styling
- [inquirer](https://github.com/SBoudrias/Inquirer.js) - Interactive CLI prompts
- [open](https://github.com/sindresorhus/open) - Open URLs and email client

## 📦 Package Structure

```
.
├── src/
│   ├── config.js     # Your personal information
│   └── index.js      # Main CLI logic
├── package.json      # Project configuration
└── README.md        # Documentation
```

## ⚙️ Configuration Options

In `src/config.js`, you can customize:

- `name`: Your display name
- `email`: Contact email
- `handle`: Social media handle
- `npm`, `github`, `linkedin`: Social links
- `firstPhrase`, `secondPhrase`: Bio information
- `borderColor`: Box border color
- `borderStyle`: Box style ('single', 'double', 'round', etc.)

## 📜 License

MIT © [Syed Mohammad Sameer](https://github.com/samxiao0)

## 💖 Credits

Inspired by amazing developers(ultirequiem,ShreyamMaity) in the npm community who create CLI name cards.

## 🤝 Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">Made with ❤️ by <a href="https://github.com/samxiao0">Syed Mohammad Sameer</a></p>



