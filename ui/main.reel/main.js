/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    defaultValue: {
        value: "World"
    },

    handleIncrementAction: {
        value: function (event) {
            var value = Number(this.templateObjects.value.element.textContent);
            this.templateObjects.value.element.textContent = value+1;
        }
    },

    handleDecrementAction: {
        value: function (event) {
            var value = Number(this.templateObjects.value.element.textContent);
            this.templateObjects.value.element.textContent = value-1;
        }
    },

    handleSliderAction: {
        value: function (event) {
            alert(this.templateObjects.Slider.value);
        }
    }

});
