/**
 * @module ui/map.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Map
 * @extends Component
 */
exports.Map = Component.specialize(/** @lends Map# */ {
    constructor: {
        value: function Map() {
            this.super();
        }
    },
    didDraw: function(e) {
        this.super(e);
        alert("Test");   
    }
});
