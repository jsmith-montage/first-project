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
    
    init: {
        value: function() {
            //Not as clean to define property descriptors.....
            //Gets default getter and setters
            //Can't define writable, configurable, enumerable unless calling defineProperty()?
            this.defaultValue = "World";
        }
    },
    
    defaultValue: {
        value: "World"
    }
});
