(function() {

    var quotes = $(".my-quote");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2500)
            .delay(3000)
            .fadeOut(3000, showNextQuote);
    }

    showNextQuote();
})();
