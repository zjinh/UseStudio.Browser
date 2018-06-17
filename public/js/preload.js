const remote = require('electron').remote;
const {ipcRenderer} = require('electron');
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    if(e.path[0].src||e.path[0].href) {
        let data = {
            "tag": e.path[0].tagName,
            "href": e.path[0].href || null,
            "src": e.path[0].src || null,
        };
        ipcRenderer.send('elm', data)
    }
});