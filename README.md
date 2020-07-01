## ScrollParallaxJS ##

[![NPM package][npm]][npm-url]

#### Scroll Parallax Javascript handled by HTML class & attributes ####

ScrollParallaxJS is an easy to use parallax on scroll package. It allow user friendly parallax setings via HTML data-attributes.
Only two lines of javascript, non-mandatory custom options, HTML class & attributes and you'r ready to go.

[Example](https://codesandbox.io/s/ecstatic-moon-qx7m7?file=/index.html) &mdash;
[Repository](https://github.com/SaucySpray/scroll-parallax-js) &mdash;
[Questions](http://stackoverflow.com/questions/tagged/scroll-parallax-js)

### Usage ###

Download the [file](https://registry.npmjs.org/scroll-parallax-js/-/scroll-parallax-js-1.0.1.tgz) and include it in your HTML
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
    <!-- You have to wrap your animated elements with .scrollparallaxjs__wrapper -->
    <div class="wrapper scrollparallaxjs__wrapper">
        <!-- You have to use .scrollparallaxjs__el on animated elements -->
        <div
            class="el scrollparallaxjs__el"
            scrollparallaxjs-scale="0.8"
            scrollparallaxjs-y="100"
            scrollparallaxjs-opacity="0.5"
            scrollparallaxjs-duration="1"
        ></div>
        <!-- Define animations on scroll with scrollparallaxjs data attributes -->
        <div
            class="el scrollparallaxjs__el"
            scrollparallaxjs-rotate="45deg"
            scrollparallaxjs-y="-50"
            scrollparallaxjs-delay="0.1"
        ></div>
        <div
            class="el scrollparallaxjs__el"
            scrollparallaxjs-scale="1.2"
            scrollparallaxjs-x="100"
            scrollparallaxjs-y="75"
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
const containerParallax = new ScrollParallaxJS(container, { simultaneous: false });
```

### Options ###

ScrollParallaxJS comes with multiples options :
```javascript
{
    duration: '100%',
    triggerHook: 0,
    offset: 0,
    pinned: true,
    indicators: false,
    simultaneous: true,
    prefix: 'scrollparallaxjs'
}
```
You can overwrite theses options when you create a new parallax :
```javascript
const container = document.querySelector('.container');
const scrollParallax = new ScrollParallaxJS(container, { duration: 50%, pinned: false, prefix: 'custom-prefix' });
```


### Change log ###

[Releases](https://github.com/SaucySpray/scroll-parallax-js/releases)


[npm]: https://img.shields.io/npm/v/scroll-parallax-js.svg
[npm-url]: https://www.npmjs.com/package/scroll-parallax-js
