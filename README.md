# GithubHelper

A lightweight browser extension that makes GitHub issue and PR comment boxes **float** as draggable overlays. Keep context while writing replies, especially for long threads!


![Demo Screenshot](/assets/preview.gif)

---

## Features

* Turns GitHub's primary comment box into **draggable floating window**
* Lets you scroll up to read context while writing a comment
* Auto-detects navigation between PRs and Issues (no page reload needed)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/pedromassango/GithubHelper.git
cd GithubHelper
```

### 2. Load the extension in Chrome

1. Open `chrome://extensions/` in your browser.
2. Enable **Developer Mode** (top right).
3. Click **"Load unpacked"** and select the `GithubHelper` folder.
4. Navigate to any GitHub Issue or PR page and try it out!

---

## Current Issues & Limitations

* Doesn't work on the **new issue composer UI** (`MarkdownEditor-module__container`) — support in progress
* No styling/theme customization yet
* Only tested on Chrome — support for Firefox/Edge is untested
* Floating box might break if GitHub’s DOM structure changes

---

## Project Structure

```
GithubHelper/
├── content.js      # Core logic for floating comment box
├── manifest.json   # Extension configuration
├── icons/          # (Optional) icons for the extension
```

---

## License

MIT — free for personal and commercial use, with attribution.

---

## Inspiration

Tired of losing your comment while scrolling through long GitHub threads? This tool helps you write better responses by keeping the comment box in view — just like sticky notes for GitHub.

---

## Would you use this?

I’d love feedback! File an issue or tweet at me [@pedromassangom](https://twitter.com/pedromassangom).
Ideas, bugs, and PRs welcome!

---
