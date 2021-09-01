// https://legopitstop.github.io/widgets/widget.html?url=https://github.com/legopitstop/Lots-More-Food-Mods/issues&theme=dark

var WEBSITE = 'https://legopitstop.github.io/widgets/widget.html'

$(document).ready(function () {
    adjustPreviewSize();
});

function preserveRatio(input) {
    var width = document.getElementById('width')
    var height = document.getElementById('height')
    var ratio = document.getElementById('ratio')
    adjustPreviewSize()
    if (checked('useratio')) {
        if (input == 'width') {
            height.value = Math.floor(width.value * ratio.value);
        } else if (input == 'height') {
            width.value = Math.floor(height.value / ratio.value);
        } else if (input == 'other') {
            height.value = Math.floor(width.value * ratio.value);
        } else {
            console.error('unknown ratio input');
        }
    }
}
function adjustPreviewSize() {
    const frameWidth = document.querySelector(".preview-frame").clientWidth;
    const previewWidth = document.querySelector(".preview").clientWidth;
    var center = (previewWidth - frameWidth) / 2
    $('.preview').css({
        'padding-left': center
    });
}
function updatePreview() {
    var defaultRepo = 'https://github.com/legopitstop/datapacks/issues'
    var type = document.getElementById('type');
    var labels = checked('labels')
    var theme = document.getElementById('theme');
    var url = document.getElementById('repo-url');
    var width = document.getElementById('width');


    if (url.value <= 0) {
        document.getElementById('repo-url').value = defaultRepo;
        url = defaultRepo;
    } else { var url = url.value; }
    var src = WEBSITE + '?type=' + type.value + '&url=' + encodeURIComponent(url) + '&theme=' + theme.value + '&labels=' + labels;
    document.querySelector('.preview-frame').src = src;
    document.querySelector('.preview-frame').width = width.value;
    document.querySelector('.preview-frame').height = height.value;
    document.getElementById('frame-output').innerHTML = '<iframe src="' + WEBSITE + '?type=' + type.value + '&url=' + encodeURIComponent(url) + '&theme=' + theme.value + '&labels=' + labels + '" width="' + width.value + '" height="' + height.value + '" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>';
    adjustPreviewSize();
}