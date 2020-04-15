window.open = function(url) {
    fin.Platform.getCurrentSync().createView({url})
}