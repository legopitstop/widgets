// https://legopitstop.github.io/widgets/widget.html?url=https://github.com/legopitstop/Lots-More-Food-Mods/issues&theme=dark

const WEBSITE = 'https://legopitstop.github.io/widgets/widget.html'
const JSONURL = parseURLParams(location.search)
const URL = getJSONURL()

$(document).ready(function () {
    adjustPreviewSize();
    widget(URL);
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
    const width = document.querySelector(".preview-frame").clientWidth;
    const pWidth = document.querySelector(".preview").clientWidth;
    var center = (pWidth - width) / 2
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

function getJSONURL() {
    if (JSONURL && JSONURL.url[0]) {
        return JSONURL.url[0];
    } else {
        return 'https://github.com/legopitstop/datapacks/issues';
    }
}

function widget(url) {
    if (JSONURL.type) {
        var type = JSONURL.type[0]
        if (type == 'github-issues') {
            githubWidget(url)
        } else if (type == 'custom') {
            customWidget(url)
        } else {
            sendError('Unknown widget type "' + JSONURL.type[0] + '"')
        }
    } else {
        console.log('Using default widget type "github-issues"');
        githubWidget(url);
    }
}

function githubWidget(repo) {
    if (repo != '') {
        const HEADER = $('.widget_header')
        const BODY = $('.widget_body')
        const FOOTER = $('.widget_footer')
        /* Preset style */
        FOOTER.append('<a href="#" class="btn align-right" target="_blank"><span>New issue</span></a>');
        HEADER.append('<a href="https://github.com/" target="_blank" class="widget_logo_wrapper align-center"><img class="widget_logo" src="./assets/favicon.png" alt=""></a>');
        //FOOTER.innerHTML = '<a href="#" class="btn" target="_blank"><span>New issue</span></a>';
        /* Other styles */
        repo = repo.replace(/https:\/\/github.com\//g, '').replace(/\/issues.*/g, '')
        var urlToGetAllOpenBugs = 'https://api.github.com/repos/' + repo + '/issues?page=1&state=open';
        console.log('loaded widget: ' + urlToGetAllOpenBugs)
        $.getJSON(urlToGetAllOpenBugs, function (allIssues) {
            var count = allIssues.length
            document.querySelector('title').innerHTML = 'Issues - ' + repo
            document.querySelector('.btn').href = 'https://github.com/' + repo + '/issues/new/choose'
            if (JSONURL.theme && JSONURL.theme[0] == 'light') {
                document.querySelector('.widget').classList.add('widget-theme-light')
            } else {
                document.querySelector('.widget').classList.add('widget-theme-dark')
            }
            var URLlabels = false
            if (JSONURL.labels && JSONURL.labels[0] == 'true') {
                URLlabels = true
            }
            BODY.append("<div class=\"widget_outstanding_issues\">There are " + count + " outstanding issues:</div>");
            $.each(allIssues, function (i, issue) {
                var assigneeName = "Unassigned";
                var assigneeURL = ''
                var labels = ''
                if (issue.labels && URLlabels == true) {
                    for (let i = 0; i < issue.labels.length; i++) {
                        var label = issue.labels[i]
                        var r = hexToRgb(label.color).r
                        var g = hexToRgb(label.color).g
                        var b = hexToRgb(label.color).b
                        var h = Math.floor(r * g - b);
                        var l = Math.floor(r / b);
                        var s = Math.floor(r / g + b + 1)

                        var description = ''
                        if (label.description != null) { description = 'title="' + label.description + '"' }
                        var style = '--label-r: ' + r + ';--label-g: ' + g + ';--label-b: ' + b + ';--label-h: ' + h + ';--label-s: ' + s + ';--label-l: ' + l + ';'
                        labels = labels + ' <span class="labels" style="' + style + '" ' + description + '>' + label.name + '</span>'
                    }
                }

                if (issue.assignee) { assigneeName = issue.assignee.login; assigneeURL = issue.assignee.url; }

                // Calculate number of days ago created
                var today = new Date();
                var timeDifference = today - Date.parse(issue.created_at);
                var daysAgo = (timeDifference / (1000 * 3600 * 24)).toFixed();
                BODY.append('<div class="issue"><strong><a id="issue_' + issue.number + '_link" href="' + issue.html_url + '" target="_blank">' + issue.title + '</a>' + labels + '</strong><br><span class="description">#' + issue.number + ' opened ' + daysAgo + ' days ago by <a href="' + issue.user.html_url + '" target="_blank">' + issue.user.login + '</a></span></div>');
            });
            if (count >= 30) {
                BODY.append('<a href="https://github.com/' + repo + '/issues?q=is%3Aopen" target="_blank">View more issues...</a>')
            }
        });
    } else {
        console.log('missing url!')
    }
}

function customWidget(url) {
    if (url != '') {
        console.log('Note that custom widgets are still in early development.')
        const HEADER = $('.widget_header')
        const BODY = $('.widget_body')
        const FOOTER = $('.widget_footer')

        $.getJSON(url, function (json) {
            themeBuilder(json)
            HEADER.append(styleBuilder(json.header))
            FOOTER.append(styleBuilder(json.footer))
            $.each(json.body, function (i, body) {
                BODY.append(styleBuilder(body))
            })
        });
    } else {
        sendError('missing url!')
    }
    function themeBuilder(json) {
        if (json.theme) {
            console.log('Custom themes have not been added yet.')
            /* defualt theme */
            if (JSONURL.theme && JSONURL.theme[0] == 'light') {
                document.querySelector('.widget').classList.add('widget-theme-light')
            } else {
                document.querySelector('.widget').classList.add('widget-theme-dark')
            }
        } else {
            /* defualt theme */
            if (JSONURL.theme && JSONURL.theme[0] == 'light') {
                document.querySelector('.widget').classList.add('widget-theme-light')
            } else {
                document.querySelector('.widget').classList.add('widget-theme-dark')
            }
        }
    }
    function styleBuilder(json) {
        var out = ''
        var before = ''
        var contents = ''
        var after = ''
        var align = 'align-center'
        var wrapperClass = ''
        /* Align */
        if (json.align) {
            if (json.align == 'center') {
                align = ' align-center'
            } else if (json.align == 'right') {
                align = ' align-right'
            } else if (json.align == 'left') {
                align = ' align-left'
            } else {
                sendError('unknown alignment type "' + json.align + '"')
            }
        }
        /* Contents */
        if (json.type == 'image') {
            contents = '<img class="widget_logo" src="' + json.source + '">'
            wrapperClass = align
        } else if (json.type == 'button') {
            contents = '<span>' + json.text + '</span>'
            wrapperClass = 'btn' + align
        } else if (json.type == 'text') {
            contents = '<span>' + json.text + '</span>'
            wrapperClass = align
        } else {
            /* default label */
            contents = '<strong>' + json.label + '</strong><br>'
            after = '<span>' + json.value + '</span><br>'
            wrapperClass = ''
        }
        /* Place contents inside link */
        if (json.url) {
            out = before + '<a class="' + wrapperClass + '" href="' + json.url + '" target="_blank">' + contents + '</a>' + after
        }
        return out
    }
}
