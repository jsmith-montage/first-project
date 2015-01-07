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
    enterDocument: {
        value: function() {
            //debugger;
            //var mapEl = this.element.querySelector("div");
            var map = new OpenLayers.Map();
            var wms = new OpenLayers.Layer.WMS( "OpenLayers WMS",
                                               "http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );
            map.addLayer(wms);
            map.zoomToMaxExtent();
            map.render(this.element.querySelector("div"));
        }
    }
});
