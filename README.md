ScrollParallaxJS
===========

[![NPM package][npm]][npm-url]

#### Light weight Javascript text splitter ####

This Javascript text splitter has been created to allow easy and seo friendly text splitting (for animations) in two lines of code, it's including words, letters, spaces and special characters splitting.

[Example](https://codepen.io/Saucy_/pen/aeWeRE) &mdash;
[Repository](https://github.com/SaucySpray/scroll-parallax-js) &mdash;
[Questions](http://stackoverflow.com/questions/tagged/scroll-parallax-js)

### Usage ###

Download the [file](https://registry.npmjs.org/scroll-parallax-js/-/scroll-parallax-js-1.0.0.tgz) and include it in your HTML
```html
<script src="/ScrollParallaxJS.js"></script>
```

-----------

Or install and import it as a [module](https://www.npmjs.com/package/scroll-parallax-js)

```sh
$ npm install scroll-parallax-js
```

First, **import** _ScrollParallaxJS_ :

```javascript
import ScrollParallaxJS from 'scroll-parallax-js';
```

Then, **use** _ScrollParallaxJS_ :

```html
<div class="container">
    <!-- You have to wrap your elements with .ScrollParallaxJS__wrapper -->
    <div class="ScrollParallaxJS__wrapper">
        <!-- You have to use .ScrollParallaxJS__el on animated elements -->
        <div
            class="el ScrollParallaxJS__el"
            ScrollParallaxJS-scale="0.8"
            ScrollParallaxJS-y="100"
            ScrollParallaxJS-opacity="0.5"
        ></div>
        <!-- Define animations on scroll with ScrollParallaxJS data attributes -->
        <div
            class="el ScrollParallaxJS__el"
            ScrollParallaxJS-rotate="45deg"
            ScrollParallaxJS-y="-50"
        ></div>
        <div
            class="el ScrollParallaxJS__el"
            ScrollParallaxJS-scale="1.2"
            ScrollParallaxJS-x="100"
            ScrollParallaxJS-y="75"
        ></div>
    </div>
</div>
```

The css is entirely yours, but you can use my example :
```css
.container {
    width: 100%;
    height: 200vh;
    display: flex;
    justify-content: center;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 96rem;
    height: calc(100vh - 8rem);
    top: 4rem;
    border: 1px solid red;
}

.el {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}
```

```javascript
// Select the DOM element wich contains the target animation
const container = document.querySelector('.container');

// Define the container of the parallax and add options
const containerParallax = new ScrollParallaxJS(container, {simultaneous: true});
```

### Change log ###

[Releases](https://github.com/SaucySpray/scroll-parallax-js/releases)


[npm]: https://img.shields.io/npm/v/scroll-parallax-js.svg
[npm-url]: https://www.npmjs.com/package/scroll-parallax-js