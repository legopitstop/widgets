$(document).ready(function () {
    console.log('loaded spoiler.js');
    spoiler();
    spoilerBlock();
});

function spoiler() {
    if ($('spoiler, span[type=spoiler]').length > 0) {
        var spoiler = document.querySelectorAll('spoiler, span[type=spoiler]')
        for (let i = 0; i < spoiler.length; i++) {
            var id = 'spoiler-' + uuid()
            var spoilers = spoiler[i]
            spoilers.id = id;
            hideSpoiler(document.getElementById(spoiler[i].id))
            $('#' + spoiler[i].id).click(function () {
                showSpoiler(this)
            })
        }
    }
}

/**
 * Shows the spoiler element
 * @param {String} element The element to show
 */
function showSpoiler(element) {
    element.style.color = 'unset';
    element.style.backgroundColor = 'unset';
    element.classList.add('shown')
    element.classList.remove('hidden')
}

/**
 * Hides the spoiler element
 * @param {String} element The elemennt to hide
 */
function hideSpoiler(element) {
    element.style.backgroundColor = 'var(--spoiler-background)';
    element.style.color = 'var(--spoiler-text)';
    element.style.cursor = 'pointer';
    element.style.userSelect = 'none';
    element.classList.add('hidden')
    element.classList.remove('shown')
}

/**
 * Creates an HTML formatting spoiler
 * @param {String} text The innerHTML of the spoiler
 * @returns The spoiler inHTML format.
 */
function createSpoiler(text) {
    return '<spoiler>' + text + '</spoiler>'
}

/*
once apon a time their was a <spoiler>Ogre</spoiler> named <spoiler>Shrek</spoiler>
            
            <div class="spoiler">
                <div class="spoiler_header">HEAD <span class="material-icons spoiler_expand">expand_more</span></div>
                <div class="spoiler_content">BODY</div>
            </div>
*/
function spoilerBlock() {
    var spoiler = document.querySelectorAll('.spoiler')
    var header = document.querySelectorAll('.spoiler .spoiler_header')
    var content = document.querySelectorAll('.spoiler .spoiler_content')
    for (let i = 0; i < spoiler.length; i++) {
        content[i].style.display = 'none';

        var id = 'spoiler-' + uuid()
        var spoilers = content[i]
        spoilers.id = id;
        spoilers.classList.toggle('closed')
        $('.spoiler .spoiler_expand').click(function () {
            spoilerBlockExpand(content[i]);
            console.log('wokr')
        })
    }
}

function spoilerBlockExpand(element) {
    var button = document.querySelector('.spoiler_expand')
    button.innerHTML = 'expand_less'
    element.style.display = 'block'
    element.classList.toggle('open')
    element.classList.toggle('closed')
}