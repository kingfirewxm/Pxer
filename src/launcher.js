/**
 * Automatic generated by "launcher.build.js"
 * */
~function(){
    var libURL =/**/"//127.0.0.1/pea3nut/pxer/pxer-app/src/app/lib.js";//*/'';
    var supportURL =/**/"//127.0.0.1/pea3nut/pxer/pxer-app/src/app/support.js";//*/'';
    window['PXER_VERSION'] =/**/"7.0.0";//*/'';

    Promise.resolve().then(function(){
        var script = document.createElement('script');
        return new Promise(function(resolve ,reject){
            script.onload = resolve;
            script.onerror = reject;
            script.src = libURL;
            document.documentElement.appendChild(script);
        });
    }).then(function(){
        var script = document.createElement('script');
        return new Promise(function(resolve ,reject){
            script.onload = resolve;
            script.onerror = reject;
            script.src = supportURL;
            document.documentElement.appendChild(script);
        });
    });
}();