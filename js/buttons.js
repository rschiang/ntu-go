define(['utils', 'app'], function( utils, app ) {

    utils.on('orientation-button', 'click', function() {
        app.controls.enableTilt = !app.controls.enableTilt;
    });

    utils.on('fullscreen-button', 'click', function() {
        if (document.fullscreenElement != null)
            document.exitFullscreen();
        else
            document.body.requestFullscreen();
    });

    utils.on(document, 'fullscreenchange', function() {
        document.getElementById('fullscreen-button-text').innerText = (document.fullscreenElement ? 'fullscreen_exit' : 'fullscreen');
    });

});
