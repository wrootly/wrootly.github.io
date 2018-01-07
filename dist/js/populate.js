function populate(selectedNav, title) {
    var header = document.getElementsByTagName("header")[0];
    var toSet = '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> \
                    <!--<a class="navbar-brand" href="#">Wrootly</a>--> \
                    <a class="navbar-brand" href="http://wrootly.com"><img src="/wrootly - white.png" alt="Wrootly" height="46" width="150"></a> \
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> \
                    <span class="navbar-toggler-icon"></span>\
                    </button>\
                    <div class="collapse navbar-collapse" id="navbarCollapse">\
                    <ul class="navbar-nav mr-auto">';

    var navOptions = ["Home", "Politics", "Technology", "Submit"];
    for (var i = 0; i < navOptions.length; i++) {
        toSet += '<li class="nav-item ' + (selectedNav == navOptions[i] ? 'active' : '') + '">';
        toSet += '<a class="nav-link" href="http://wrootly.com/' + (navOptions[i] == "Home" ? '">' : navOptions[i].toLowerCase() + '">') + navOptions[i] + "</a></li>";
    }
    toSet += "</ul></div></nav>";
    header.innerHTML = toSet;

    document.getElementsByTagName("head")[0].innerHTML += "<title>" + title + "</title>";

    document.getElementsByTagName("footer")[0].innerHTML = '<p class="float-right"><a href="#">Back to top</a></p>\
    <p>&copy; 2018 Wrootly &middot; <a href="mailto:contact@wrootly.com">Contact</a> &middot; <a href="https://twitter.com/wrootly">Twitter</a></p>';

    document.getElementsByTagName("head")[0].innerHTML += '<meta charset="utf-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\
    <meta name="description" content="">\
    <meta name="author" content="">\
    <link rel="icon" href="./favicon.ico">\
    <link href="/dist/css/bootstrap.min.css" rel="stylesheet" />\
    <link href="/carousel.css" rel="stylesheet" />';
}