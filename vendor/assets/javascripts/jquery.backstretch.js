/* ==========================================================================
   Update Background Image using Backstretch.js and Underscore.js
   ========================================================================== */

(function($,W,D,undefined)
{
     var JQUERY4U = {};
     JQUERY4U.BG =
     {
         cache: {},
         init: function()
         {

            // Create the listener function (debounce).
            var updateBgImage = _.debounce(function(e) {

                console.log('updateBgImage....');

                //switch to mobile version background for lower res devices.
                var bgImage = (window.innerWidth > 640) ? '<%= asset_path "batman.jpg" %>' : '<%= asset_path "batman2.jpg" %>';

                /* backstretch responsive bg image */
                $.backstretch([
                    bgImage
                ], {
                    centeredY: false
                });


            }, 500); // Maximum run of once per 500 milliseconds

            //detect actions on window resize
            $(window).on("resize", function()
            {
                updateBgImage();
            });

            //init bg image
            updateBgImage();

         }
     }

     $(function() {
        JQUERY4U.BG.init();
     });

})(jQuery, window, document);