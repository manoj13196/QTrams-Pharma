# Vanilla Hot Toast 🍞

Vanilla Hot Toast is a lightweight, versatile, and delicious notification library for the web. It is built on top of  [react-hot-toast](https://react-hot-toast.com/?ref=vanilla-hot-toast), just bundled with Preact, allowing you to use it as a drop-in toast script on any website without the need for React. Enjoy modern toast experience like the old jQuery days.

## Features 🌟

- 🚀 Simple and lightweight (10KB gzipped)
- 🌐 Works on any website without the need for React
- 💅🏼 Easy-to-use API identical to react-hot-toast
- 🎨 Customizable styles and toaster settings
- ⚡️ Bundled with Preact for fast and efficient rendering

## Getting Started 🛠

### 1. Load the script on your website

Include the `vanilla-hot-toast.min.js` script in your HTML file, just before the closing `</body>` tag:

```html
<script src="path/to/vanilla-hot-toast.min.js"></script>
```

Alternatively, you can load it from a CDN like jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/vanilla-hot-toast/dist/vanilla-hot-toast.min.js"></script>
```

### 2. Start toasting with `toast()`

You can now use the `toast()` function to create toast notifications on your website. The API is the same as react-hot-toast:

```js
// Display a success toast
toast.success("🚀 Successfully toasted!");

// Display an error toast
toast.error("Oops! Something went wrong.");

// Display a custom toast
toast("This is a custom toast.", { duration: 3000, icon: "🔔" });
```

### 3. Change toaster settings with `toast.setConfig(options)` (Optional) 

You can customize the behavior and appearance of the toast notifications by using the `toast.setConfig()` method:

```js
toast.setConfig({
  position: "top-right", // top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
  reverseOrder: false, // render new toasts below existing ones
  toastOptions: {
    duration: 50000, // default toast duration (ms)
  }
});
```

For more information, check out the [react-hot-toast documentation](https://react-hot-toast.com/docs/toaster).


## License 📄

Vanilla Hot Toast is [MIT licensed](https://github.com/timolins/vanilla-hot-toast/blob/main/LICENSE).