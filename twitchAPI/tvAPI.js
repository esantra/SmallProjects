getQuote();

function getQuote() {
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
            setQuote(data);
        }
    };
    http.send(params);
}
