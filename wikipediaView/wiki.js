function getRandomArticle() {
    var url = "https://en.wikipedia.org/wiki/Special:Random";
    window.open(url, '_blank');
}

function data(action, generator, gsrsearch, prop, format) {
    this.action = action;
    this.generator = generator;
    this.utf8 = 1;
    this.gsrsearch = gsrsearch;
    this.prop = prop;
    this.exintro = 1;
    this.exlimit = 20;
    this.exchars = 200;
    this.titles = gsrsearch;
    this.format = format;
}

function getSearchedArticle() {
    $(document).ready(function() {
        var searchTerm = document.getElementById("searchText").value;
        var datar = new data('query', 'search', searchTerm, 'extracts', 'json');

        $.ajax({
            type: "GET",
            url: 'http://en.wikipedia.org/w/api.php',
            data: datar,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: 'jsonp',
            success: function(x) {
                for (i = 0; i < 6; i++) {
                    var obj = x.query.pages[Object.keys(x.query.pages)[i]];
                    var text = obj.extract.replace(new RegExp('\r?\n','g'), '<br />');
                    var snip =
                    "<a target='__blank' href='https://en.wikipedia.org/?curid='" +
                        obj.pageid + "><h3>" +
                        obj.title + "</h3></a>" +
                        "" + JSON.stringify(text);
                    snip = snip.replace(/['"]+/g, '');
                    console.log(snip);
                    document.getElementById("article" + i).innerHTML = snip;
                    document.getElementById("articleDiv" + i).style.visibility = "visible";
                }
            },
            error: function(errorMessage) {}
        });
    });
}
