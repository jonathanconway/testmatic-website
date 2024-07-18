---
sidebar_position: 2
---

# Installing the local UI

Get started by installing Testmatic via the UI.

#### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above.

#### Install Testmatic local UI

Install globally via NPM:

```bash
npm install -g testmatic-ui
```

#### Run the Testmatic local UI

You can start the UI from your command line.

```bash
testmatic-ui
```

You will want to first switch to the directory where you want to locate your Testmatic project.

For example, if you want to put your Testmatic project under `~/Sources/my-app`, run this:

```bash
cd ~/Sources/my-app
testmatic-ui
```

This will set up your Testmatic project in the following folder: `~/Sources/my-app/.testmatic`.