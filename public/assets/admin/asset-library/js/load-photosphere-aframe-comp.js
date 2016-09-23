AFRAME.registerComponent('load-photosphere', {

    schema: {
        src: {
            type: 'string'
        }
    },

    init: function() {

        var image = new Image();
        image.onload = (function(el) {
            return function() {

                var image_elem = document.createElement('img');
                image_elem.setAttribute('id', 'img');
                image_elem.setAttribute('src', this.src);
                var assets = document.querySelector('a-assets');
                assets.appendChild(image_elem);

                document.querySelector('#image-loading').setAttribute('visible', false);
                document.querySelector('#image-loading-anim').stop();

                el.setAttribute('material', 'src', '#img');
                document.querySelector('#scene-floor-grid').setAttribute('visible', false);
                el.setAttribute('visible', true);
            }
        }(this.el));
        image.src = this.data.src;

    }

});


