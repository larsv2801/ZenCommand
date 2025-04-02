![Demo Image](https://github.com/larsv2801/ZenCommand/blob/main/ZenCommandDemoImg.png?raw=true)

# ZenCommand.js

**ZenCommand.js** is a minimalist JavaScript library for creating a command panel interface that can be toggled with a keyboard shortcut. It’s perfect for adding a sleek, simple command input area to your website without the need for complex setups.

---

## Features

- **Minimalist UI**: Clean, modern design with a smooth, blurred backdrop and a sleek input bar.
- **Keyboard Shortcut**: Toggle the command panel with a keyboard combination (`Ctrl + M`).
- **Customizable Options**: Dynamically populate the command panel with options that execute custom actions when selected.
- **Easy Integration**: Simple to add to your web pages with just a `<script>` tag.
- **User-Defined Actions**: Execute custom functions when an option is selected or Enter is pressed.

---

## Installation

You can link to ZenCommand.js directly from a CDN (hosted on GitHub Pages):

```html
<script src="https://larsv2801.github.io/ZenCommand/main.js"></script>
```
Alternatively, you can download the .js file and host it locally.

---

## Usage
Basic Setup
1. Add the following script tag to your HTML:

```html
<script src="https://larsv2801.github.io/ZenCommand/main.js"></script>
```
2. Call the logMessage() function to display the command panel:

```js
window.onload = function() {
    ZenCommand.logMessage([
        { label: "Option 1", url: "https://example.com/option1" },
        { label: "Option 2", url: "https://example.com/option2" },
    ]);
};
```
3. define your own function to be executed when an option is selected. The function must be assigned to window.userFunction.

```js
window.userFunction = function(url) {
    // Custom logic here
    console.log("User selected: " + url);
};
```

---

## Keyboard Shortcut
By default, the command panel can be toggled using Ctrl + M (or Cmd + M on macOS). This opens the panel and focuses the input bar.

---

## Example Code
Here’s a full example of how to integrate ZenCommand.js into a webpage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZenCommand Example</title>
    <script src="https://your-username.github.io/ZenCommand.js/zencommand.min.js"></script>
</head>
<body>

<script>
    window.onload = function() {
        ZenCommand.logMessage([
            { label: "Home", url: "/home" },
            { label: "About", url: "/about" },
            { label: "Contact", url: "/contact" },
        ]);
    };

    window.userFunction = function(url) {
        window.location.href = url;
    };
</script>

</body>
</html>
```

