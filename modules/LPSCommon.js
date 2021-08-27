/**
 * FEATURES
 * - colorCode
 * - imageError
 * - isrequired
 * - rng
 * - random number
 * - randomId
 * - clearElement
 * - copyElement
 * - copyElementId
 * - cutElement
 * - pressKey
 * - parseURLParams
 * - MinMaxValue
 * - errorClass
 * - disableElement
 * - enableElement
 * - openURL
 * - hideElement
 * - showElement
 * - sendError
 * - codeblock
 * - uuid
 * - focusId
 * - focusSelector
 * - selectId
 * - selectSelector
 * - scrollToId
 * - scrollToSelector
 * - convertURL
 * - hexToRgb
 * - rgbToHex
 * - checked
 */

$(document).ready(function () {
    isRequired();
    convertURL(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'b', 'strong', 'i', 'em', 'mark', 'small', 'del', 'ins', 'sub', 'sup', 'th', 'td']);
    codeblock('textarea.codeblock');
    valuePlaceholder
});

/**
 * Adds color to the text using '§'
 * @example
 * colorEncoder('§0Black test §fwhite text')
 * colorEncoder('§0Black test §fwhite text', 'white', 'red')
 * colorEncoder('§0Black test §fwhite text', {'white': '#ff0000','black': '#0000ff'})
 * @param {String} text The text to replace.
 * @param {String} [key] The key to set 'value' to.
 * @param {String} [value] The CSS3 to apply
 * @returns 
 */
function colorCode(text, key, value) {
    let white = 'color: #ffffff';
    let dark_blue = 'color: #0000be';
    let dark_green = 'color: #00be00';
    let dark_aqua = 'color: #00bebe';
    let dark_red = 'color: #be0000';
    let dark_purple = 'color: #be00be';
    let gray = 'color: #bebebe';
    let gold = 'color: #d9a334';
    let dark_gray = 'color: #3f3f3f';
    let blue = 'color: #3f3ffe';
    let green = 'color: #3ffe3f';
    let aqua = 'color: #3ffefe';
    let red = 'color: #fe3f3f';
    let light_purple = 'color: #fe3ffe';
    let yellow = 'color: #fefe3f';
    let black = 'color: #000000';
    let bold = 'font-weight: bold;';
    let italic = 'font-style: italic;';
    let underline = 'text-decoration: underline;';
    let strike = 'text-decoration: line-through;';
    let reset = 'text-decoration: none; color: var(--text);';
    if (key) {
        if (typeof key == 'object') {
            if (key.white) { white = key.white };
            if (key.dark_blue) { dark_blue = key.dark_blue };
            if (key.dark_green) { dark_green = key.dark_green };
            if (key.dark_aqua) { dark_aqua = key.dark_aqua };
            if (key.dark_red) { dark_red = key.dark_red };
            if (key.dark_purple) { dark_purple = key.dark_purple };
            if (key.gray) { gray = key.gray };
            if (key.gold) { gold = key.gold };
            if (key.dark_gray) { dark_gray = key.dark_gray };
            if (key.blue) { blue = key.blue };
            if (key.green) { green = key.green };
            if (key.aqua) { aqua = key.aqua };
            if (key.red) { red = key.red };
            if (key.light_purple) { light_purple = key.light_purple };
            if (key.yellow) { yellow = key.yellow };
            if (key.black) { black = key.black };
            if (key.bold) { bold = key.bold };
            if (key.italic) { italic = key.italic };
            if (key.underline) { underline = key.underline };
            if (key.strike) { strike = key.strike };
            if (key.reset) { reset = key.reset };

        } else if (typeof key == 'string') {
            if (key == 'white') { white = value };
            if (key == 'dark_blue') { dark_blue = value };
            if (key == 'dark_green') { dark_green = value };
            if (key == 'dark_aqua') { dark_aqua = value };
            if (key == 'dark_red') { dark_red = value };
            if (key == 'dark_purple') { dark_purple = value };
            if (key == 'gray') { gray = value };
            if (key == 'gold') { gold = value };
            if (key == 'dark_gray') { dark_gray = value };
            if (key == 'blue') { blue = value };
            if (key == 'green') { green = value };
            if (key == 'aqua') { aqua = value };
            if (key == 'red') { red = value };
            if (key == 'light_purple') { light_purple = value };
            if (key == 'yellow') { yellow = value };
            if (key == 'black') { black = value };
            if (key == 'bold') { bold = value };
            if (key == 'italic') { italic = value };
            if (key == 'underline') { underline = value };
            if (key == 'strike') { strike = value };
            if (key == 'reset') { reset = value };
        } else {
            console.error('Invalid typeof key. expected "object" or "string", but got "' + typeof key + '"');
        }
    };
    return text
        .replace(/§0(.*)/gm, '<span style="' + black + ';">$1</span>')
        .replace(/§1(.*)/gm, '<span style="' + dark_blue + ';">$1</span>')
        .replace(/§2(.*)/gm, '<span style="' + dark_green + ';">$1</span>')
        .replace(/§3(.*)/gm, '<span style="' + dark_aqua + ';">$1</span>')
        .replace(/§4(.*)/gm, '<span style="' + dark_red + ';">$1</span>')
        .replace(/§5(.*)/gm, '<span style="' + dark_purple + ';">$1</span>')
        .replace(/§6(.*)/gm, '<span style="' + gold + ';">$1</span>')
        .replace(/§7(.*)/gm, '<span style="' + gray + ';">$1</span>')
        .replace(/§8(.*)/gm, '<span style="' + dark_gray + ';">$1</span>')
        .replace(/§9(.*)/gm, '<span style="' + blue + ';">$1</span>')
        .replace(/§a(.*)/gm, '<span style="' + green + ';">$1</span>')
        .replace(/§b(.*)/gm, '<span style="' + aqua + ';">$1</span>')
        .replace(/§c(.*)/gm, '<span style="' + red + ';">$1</span>')
        .replace(/§d(.*)/gm, '<span style="' + light_purple + ';">$1</span>')
        .replace(/§e(.*)/gm, '<span style="' + yellow + ';">$1</span>')
        .replace(/§f(.*)/gm, '<span style="' + white + ';">$1</span>')
        .replace(/§l(.*)/gm, '<span style="' + bold + '">$1</span>')
        .replace(/§o(.*)/gm, '<span style="' + italic + '">$1</span>')
        .replace(/§n(.*)/gm, '<span style="' + underline + '">$1</span>')
        .replace(/§m(.*)/gm, '<span style="' + strike + '">$1</span>')
        .replace(/§k(.*)/gm, '<span style="color: black;">$1</span>')
        .replace(/§r(.*)/gm, '<span style="' + reset + '">$1</span>');
};

function imageError(image) {
    console.error('Failed to find image! using missing texture. "' + image.alt + '"');
    image.onerror = "";
    image.src = "/assets/minecraft/textures/item/missing.png";
    return true;
}

/* When a required input is empty set the border color to red */
function isRequired() {
    $('input').blur(function () {
        $(':required').css('border-color', 'gray');
        $(':required').filter(function () {
            return $.trim(this.value) === '';
        }).css('border-color', 'red');
    });
}

/**
 * @param {Number} min If true it will show a confirmation menu.
 * @param {Number} max The element to clear.
 * @returns A random number between the min and max
 */
function rng(min, max) {
    var rng = Math.floor(Math.random() * (max - min) + min);
    return rng
}
/**
 * @param {Number} min If true it will show a confirmation menu.
 * @param {Number} max The element to clear.
 * @returns A random number between the min and max
 */
function randomNumber(min, max) {
    var rng = Math.floor(Math.random() * (max - min) + min);
    return rng
}

/**
 * @returns A random number (id) that is imbetween 100000 - 999999
 */
function randomId() {
    var min = 100000
    var max = 999999
    var rng = Math.floor(Math.random() * (max - min) + min);
    return rng
}

/**
 * @param {boolean} confirm0 If true it will show a confirmation menu.
 * @param {string} element The element to clear.
 * @returns clears the output element.
 */
function clearElement(confirm0, element) {
    if (confirm0 == true) {
        var con = confirm("Are you sure you want to clear the command input?");
        if (con == true) {
            document.querySelector(element).innerHTML = '';
        };
    } else {
        document.querySelector(element).innerHTML = '';
    }
}

/**
 * @param {string} element The element to copy.
 * @returns Copies the value in element. Also returns a boolean
 */
function copyElement(element) {
    var target = document.querySelector(element);
    if (target.value != '') {
        target.select();
        document.execCommand("copy");
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} element The element to copy.
 * @returns Copies the value in element. Also returns a boolean
 */
function copyElementId(element) {
    var target = document.getElementById(element);
    if (target.value != '') {
        target.select();
        document.execCommand("copy");
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} element The element to copy.
 * @returns Copies then removes the value in element. Also returns a boolean
 */
function cutElement(element) {
    var target = document.querySelector(element);
    if (target.value != '') {
        target.select();
        document.execCommand("cut");
        return true;
    } else {
        return false;
    }

}

/**
 * @param event The element to check.
 * @returns Returns the type of keypress that was activated.
 */
function pressKey(event) {
    if (event.keyCode == 0) { return 'unknown' };
    if (event.keyCode == 3) { return 'break' };
    if (event.keyCode == 8) { return 'backspace' };
    if (event.keyCode == 9) { return 'tab' };
    if (event.keyCode == 12) { return 'clear' };
    if (event.keyCode == 13) { return 'enter' };
    if (event.keyCode == 16) { return 'shift' };
    if (event.keyCode == 17) { return 'control' };
    if (event.keyCode == 18) { return 'alt' };
    if (event.keyCode == 19) { return 'pause' };
    if (event.keyCode == 20) { return 'capsLock' };
    if (event.keyCode == 27) { return 'escape' };
    if (event.keyCode == 32) { return 'space' };
    if (event.keyCode == 33) { return 'pageUp' };
    if (event.keyCode == 34) { return 'pageDown' };
    if (event.keyCode == 35) { return 'end' };
    if (event.keyCode == 36) { return 'home' };
    if (event.keyCode == 37) { return 'arrowLeft' };
    if (event.keyCode == 38) { return 'arrowUp' };
    if (event.keyCode == 39) { return 'arrowRight' };
    if (event.keyCode == 40) { return 'arrowDown' };
    if (event.keyCode == 41) { return 'select' };
    if (event.keyCode == 42) { return 'print' };
    if (event.keyCode == 43) { return 'execute' };
    if (event.keyCode == 44) { return 'printScreen' };
    if (event.keyCode == 45) { return 'insert' };
    if (event.keyCode == 46) { return 'delete' };
    if (event.keyCode == 47) { return 'help' };
    if (event.keyCode == 48) { return '0' };
    if (event.keyCode == 49) { return '1' };
    if (event.keyCode == 50) { return '2' };
    if (event.keyCode == 51) { return '3' };
    if (event.keyCode == 52) { return '4' };
    if (event.keyCode == 53) { return '5' };
    if (event.keyCode == 54) { return '6' };
    if (event.keyCode == 55) { return '7' };
    if (event.keyCode == 56) { return '8' };
    if (event.keyCode == 57) { return '9' };
    if (event.keyCode == 96) { return '0' };
    if (event.keyCode == 97) { return '1' };
    if (event.keyCode == 98) { return '2' };
    if (event.keyCode == 99) { return '3' };
    if (event.keyCode == 100) { return '4' };
    if (event.keyCode == 101) { return '5' };
    if (event.keyCode == 102) { return '6' };
    if (event.keyCode == 103) { return '7' };
    if (event.keyCode == 104) { return '8' };
    if (event.keyCode == 105) { return '9' };
    if (event.keyCode == 106) { return 'multiply' };
    if (event.keyCode == 107) { return 'add' };
    if (event.keyCode == 109) { return 'subtract' };
    if (event.keyCode == 110) { return 'decimal' };
    if (event.keyCode == 111) { return 'devide' };
    if (event.keyCode == 112) { return 'f1' };
    if (event.keyCode == 113) { return 'f2' };
    if (event.keyCode == 114) { return 'f3' };
    if (event.keyCode == 115) { return 'f4' };
    if (event.keyCode == 116) { return 'f5' };
    if (event.keyCode == 117) { return 'f6' };
    if (event.keyCode == 118) { return 'f7' };
    if (event.keyCode == 119) { return 'f8' };
    if (event.keyCode == 120) { return 'f9' };
    if (event.keyCode == 121) { return 'f10' };
    if (event.keyCode == 122) { return 'f11' };
    if (event.keyCode == 123) { return 'f12' };
    if (event.keyCode == 124) { return 'f13' };
    if (event.keyCode == 125) { return 'f14' };
    if (event.keyCode == 126) { return 'f15' };
    if (event.keyCode == 127) { return 'f16' };
    if (event.keyCode == 128) { return 'f17' };
    if (event.keyCode == 129) { return 'f18' };
    if (event.keyCode == 130) { return 'f19' };
    if (event.keyCode == 131) { return 'f20' };
    if (event.keyCode == 132) { return 'f21' };
    if (event.keyCode == 133) { return 'f22' };
    if (event.keyCode == 134) { return 'f23' };
    if (event.keyCode == 135) { return 'f24' };
    if (event.keyCode == 136) { return 'f25' };
    if (event.keyCode == 137) { return 'f26' };
    if (event.keyCode == 138) { return 'f27' };
    if (event.keyCode == 139) { return 'f28' };
    if (event.keyCode == 140) { return 'f29' };
    if (event.keyCode == 141) { return 'f30' };
    if (event.keyCode == 142) { return 'f31' };
    if (event.keyCode == 143) { return 'f32' };
}

/**
 * Grabs data from the URL and converts it to JSON
 * @example
 * // returns {"text":["This is text"]}
 * parseURLParams('https://example.com?text=This%20is%20text')
 * @param {string} url The url to parse to JSON.
 * @returns Returns the status
*/
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;
    if (query === url || query === "") return;
    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);
        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

/**
 * @param value The value that needs to be imbetween min and max.
 * @param {integer} min The minium allowed value. (inclusive)
 * @param {integer} max The maxium allowed value. (inclusive)
 * @returns returns a boolean if it is excepted. will also send error via console.
 */
function MinMaxValue(value, min, max) {
    if (value >= max + 1) {
        console.error('Value must be less than ' + max)
        return false;
    } else {
        if (value <= min - 1) {
            console.error('Value must be more than ' + min)
            return false;
        } else {
            return true;
        }
    }

}

/**
 * @param element The element to apply this error class to.
 * @param {add|remove} action Add or remove the class
 * @returns adds the class to the element.
 */
function errorClass(element, action) {
    if (action == 'add') {
        document.querySelector(element).classList.add('error')
    } else {
        if (action == 'remove') {
            document.querySelector(element).classList.remove('error')
        } else {
            console.error('missing "action"')
            return null;
        }
    }
}

/**
 * Disables the input
 * @example
 * // will disable the input with the class 'test'
 * disableElement('.test')
 * @param {string} selector The element to disable
*/
function disableElement(selector) {
    document.querySelector(selector).disabled = true;
}

/**
 * Enables the input
 * @example
 * // will enable the input with the class 'test'
 * enableElement('.test')
 * @param {string} selector The element to disable
*/
function enableElement(selector) {
    document.querySelector(selector).disabled = false;
}

/**
 * Will grab the value from the selector
 * @example
 * // Returns the URL value from class 'test'
 * openURL('.test')
 * @param {string} selector The element to disable
*/
function openURL(selector) {
    var url = document.querySelector(selector).value
    window.open(url)
}

/**
 * Will hide the element.
 * @example
 * // Will hide the element with the class 'test'
 * hideElement('.test')
 * @param {string} selector The element to hide
*/
function hideElement(selector) {
    document.querySelector(selector).style.display = 'none'
}

/**
 * Will shiw the hidden element.
 * @example
 * // Will show the element with the class 'test'
 * showElement('.test')
 * @param {string} selector The element to show
*/
function showElement(selector) {
    document.querySelector(selector).style.display = 'block'
}

/**
 * Sends an error via console and alert message.
 * @param {string} errorMessage The element to show
*/
function sendError(errorMessage) {
    console.error('Error: ' + errorMessage)
    alert('Error: ' + errorMessage)
    return 'Error: ' + errorMessage
}

/**
 * Add properties to codeblock.
 * @example
 * // Will add a copy button
 * <textarea class="codeblock"></textarea>
 * @param {String} [selector] The jquery selector to use. default: `textarea.codeblock`
 * @param {String} [icon] The Google Material icon to use. default: `content_paste`
*/
function codeblock(selector, icon) {
    if (!selector) { var selector = 'textarea.codeblock' }
    if (!icon) { var icon = 'content_paste' }
    if ($(selector).length > 0) {
        const BLOCK = document.querySelector(selector);
        /* Add custom ID if it has none */
        if (!BLOCK.id) { var ID = uuid(); BLOCK.id = ID } else { var ID = BLOCK.id }
        $("textarea.codeblock").wrap('<div class="codeblock-container" style="position: relative;"></div>')
        $(".codeblock-container").append('<button style="position: absolute; top: 10px; right: 6px; display: none;" onmouseenter="this.style.display = \'block\'" onclick="copyElementId(\'' + ID + '\'); this.style.display = \'none\'" class="codeblock-copy-button material-icons">' + icon + '</button>')
        const CONTAINER = document.querySelector('.codeblock-container');
        /* Copy the height and with of block to container */
        if (BLOCK.style.width == '') {
            CONTAINER.style.width = '40%'
        } else {
            CONTAINER.style.width = BLOCK.style.width
        }

        if (BLOCK.style.height == '') {
            CONTAINER.style.height = '200px'
        } else {
            CONTAINER.style.height = BLOCK.style.height
        }
        BLOCK.style.width = '100%'
        BLOCK.style.height = '100%'
        BLOCK.rows = '0'
        BLOCK.cols = '0'
        /* Apply properties to block */
        BLOCK.readOnly = true;
        BLOCK.onmouseenter = function () { document.querySelector('.codeblock-copy-button').style.display = 'block' }
        BLOCK.onmouseleave = function () { document.querySelector('.codeblock-copy-button').style.display = 'none' }
        BLOCK.style.resize = 'none';

    }
}

/**
 * @returns UUIDv4
 */
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * 
 * @param {String} elementId The element id to focus on.
 * @param {Boolean} [preventScroll] When true it will not scroll to the element
 */
function focusId(elementId, preventScroll) {
    if (preventScroll == true) {
        document.getElementById(elementId).focus({ preventScroll: true });
    } else {
        document.getElementById(elementId).focus({ preventScroll: false });
    }
}
/**
 * 
 * @param {*} selectors The jquery selector element to focus on.
 * @param {Boolean} [preventScroll] When true it will not scroll to the element
 */
function focusSelector(selectors, preventScroll) {
    if (preventScroll == true) {
        document.querySelector(selectors).focus({ preventScroll: true });
    } else {
        document.querySelector(selectors).focus({ preventScroll: false });
    }
}

/**
 * 
 * @param {String} elementId The element id to select.
 */
function selectId(elementId) {
    document.getElementById(elementId).select();
}
/**
 * 
 * @param {*} selectors The jquery selector element to select
 */
function selectSelector(elementId) {
    document.querySelector(elementId).select();
}

/**
 * 
 * @param {String} elementId The element id to scroll to.
 * @param {Boolean} [smooth] When true it will not jump to the element
 */
function scrollToId(elementId, smooth) {
    if (smooth == true) {
        document.getElementById(elementId).scrollIntoView({ behavior: "smooth" })
    } else {
        document.getElementById(elementId).scrollIntoView({ behavior: "auto" })
    }
}
/**
 * 
 * @param {*} selectors The jquery selector element id to scroll to.
 * @param {Boolean} [smooth] When true it will not jump to the element
 */
function scrollToSelector(selectors, smooth) {
    if (smooth == true) {
        document.querySelector(selectors).scrollIntoView({ behavior: "smooth" });
    } else {
        document.querySelector(selectors).scrollIntoView({ behavior: "auto" });
    }
}

/**
 * Automaticlly places the URL in <a> making it a worked URL
 * @param {Array} [selectorList] An array list of all allowed selectors.
 */
function convertURL(selectorList) {
    if (!selectorList) { var selectorList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'b', 'strong', 'i', 'em', 'mark', 'small', 'del', 'ins', 'sub', 'sup', 'th', 'td'] }
    for (let i = 0; i < selectorList.length; i++) {
        if ($(selectorList[i]).length > 0) {
            document.querySelector(selectorList[i]).innerHTML = document.querySelector(selectorList[i]).innerHTML.trim().replace(/((https?|ftp):\/\/(?:www\.|(?!www))[^\s.]+\.\S{2,}|www\.\S+\.\S{2,})/g, '<!-- Autogenerated --><a href="$1" title="$1" target="_blank">$1</a>')
        }

    }
}

/**
 * Makes the placeholder the default value
 */
function valuePlaceholder() {
    var test = document.querySelector('input')
    test.placeholder = test.value
    console.log(test)

}

/**
 * Converts Hex to RGB
 * @example
 * // returns "51"
 * hexToRgb("#0033ff").g
 * @param {String} hex Hex color to convert
 * @returns The hex color in RGB
 */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}



/**
 * Converts RGB to hex
 * @example
 * // returns #0033ff
 * rgbToHex(0, 51, 255)
 * @param {Number} r Number of red
 * @param {Number} g Number of green
 * @param {Number} b Number of blue
 * @returns The RGB color in hex
 */
function rgbToHex(r, g, b) {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


/**
 * Check if a checkbox is checked or not.
 * @example
 * // returns true or false depending on if it is checked.
 * checked('example-checkbox')
 * // returns yes or no depending if it is checked.
 * checked('example-checkbox','yes','no')
 * @param {String} id The id of the element that is a checkbox.
 * @param {String} [isTrue] returns this value if true.
 * @param {String} [isFalse] returns this value if false.
 * @returns {Boolean} If it is checked or not.
 */
function checked(id, isTrue, isFalse) {
    var element = document.getElementById(id)
    if (isTrue && element.checked == true) {
        return isTrue
    } else if (isFalse && element.checked == false) {
        return isFalse
    } else {
        return element.checked
    }
}