var GetFamousQuote = function() {};
GetFamousQuote.prototype = {
    getQuote: function(data) {
        var http = new XMLHttpRequest();
        var url = "https://andruxnet-random-famous-quotes.p.mashape.com/";
        var params = "lorem=ipsum&name=binny";

        document.getElementsByClassName("btn").href = "xyz.php";
        http.open("POST", url, true);
        http.setRequestHeader("X-Mashape-Key", "LN2cRRkVWKmshmqzmtqXgDecHpycp1sMttKjsneiFQNOn8Msqn");
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.setRequestHeader("Accept", "application/json");

        http.onreadystatechange = function() { //Call a function when the state changes.
            if (http.readyState === 4 && http.status === 200) {
                data = JSON.parse(http.responseText);
                $('#quote').html(data.quote);
                $('#author').html(data.author);
            }
        };
        http.send(params);
        return data;
    },

    navigateTwitter: function(data) {
        if (data) {
            var phrase = data.quote.concat(' - ').concat(data.author);
            var tweetUrl = 'https://twitter.com/share?text=' +
                encodeURIComponent(phrase) +
                '.' +
                '&url=';

            window.open(tweetUrl);
        }
    }

};

/* GetFamousQuoteProxy class*/
var GetFamousQuoteVirtualProxy = function() { // implements Library
    this.quote = null;
    this.data = null; // Store the argument to the constructor.
};
GetFamousQuoteVirtualProxy.prototype = {
    _initializeTweet: function() {
        if (this.quote === null) {
            this.quote = new GetFamousQuote();
        }
    },
    getQuote: function(data) {
        this._initializeTweet();
        this.data = this.quote.getQuote(data);
        return this.data;
    },
    navigateTwitter: function(data) {
        this._initializeTweet();
        return this.quote.navigateTwitter(data);
    },
    loadQuote: function() {
        this._initializeTweet();
        var twit = this.getQuote();
        var quot = this.navigateTwitter(twit);
        return quot;
    }
};

function loadQuote() {
    var q = new GetFamousQuoteVirtualProxy();
    q.loadQuote();
}
