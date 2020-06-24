/**
 * Author: Alexandre Chabeau
 * License: MIT
 * Contact: alexandrechabeau.pro@gmail.com
 * Original repos: https://github.com/saucyspray/scroll-parallax-js
 */

const defaultOptions = {
    duration: '100%',
    triggerHook: 0,
    offset: 0,
    pinned: true,
    indicators: false,
    simultaneous: true,
}

class ScrollParallaxJS {
    constructor(_container, _custom, _options = defaultOptions) {
        this.cache(_container, _custom, _options)
        this.events()
        this.mounted()
    }

    cache(_container, _custom, _options) {
        // Setup container, options, & variables
        this.container = _container
        this.options = {..._options, ..._custom}
        this.wrapper = this.container.querySelector('.ScrollParallaxJS__wrapper')
        this.layers = [...this.wrapper.querySelectorAll('.ScrollParallaxJS__el')]

        this.tl = new TimelineMax()
    }

    events() {
        
    }

    mounted() {
        // Create timelines for each parallax layers
        this.layers.forEach(layer => this.setLayersTimelines(layer))

        // Create scene & bind tl to it
        this.setScene()
    }

    setScene() {
        this.controller = new ScrollMagic.Controller()
        this.scene = new ScrollMagic.Scene({
            triggerElement: this.container,
            duration: this.options.duration,
            offset: this.options.offset,
            triggerHook: this.options.triggerHook
        })

        this.options.pinned ?
            this.scene.setPin(this.wrapper)
            : null

        this.options.indicators ? 
            this.scene.addIndicators({
                colorTrigger: "black",
                colorStart: "green",
                colorEnd: "red",
                indent: 5
            })
            : null

        this.scene.setTween(this.tl)

        this.scene.addTo(this.controller)
    }

    getAttributes(_el) {
        const attributes = [..._el.attributes]
        const sortedAttributes = {}

        // Check for each elements attributes if they contains "ScrollParallaxJS-"
        attributes.forEach(attribute => {
            if(attribute.localName.includes('ScrollParallaxJS-')) {
                // If they do, add the value to the sortedAttributes object
                Object.defineProperty(
                    sortedAttributes,
                    attribute.localName.replace('ScrollParallaxJS-', ''),
                    {
                        value: attribute.value,
                        writable: false,
                        enumerable: true
                    }
                )
            }
        })

        return sortedAttributes
    }

    setLayersTimelines(_el) {
        // Get values from data attributes
        const attributes = this.getAttributes(_el)

        // Add to timeline
        this.tl.to(
            _el,
            1,
            attributes,
            this.options.simultaneous ?
                '-=1'
                : null
        )
    }
}

module.exports = ScrollParallaxJS;