import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{

    constructor(element, offset){
        this.itemsToReveal = element;
        this.offset        = offset;
        this.hideIntially();
        this.createWayPoints();
    }

    hideIntially(){
        this.itemsToReveal.addClass("reveal-item");
    }

    createWayPoints(){
        var that = this;
        this.itemsToReveal.each(function () {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass("reveal-item--is-visible")
                },
                offset: that.offset
            });
        });
    }
}

export default RevealOnScroll;
