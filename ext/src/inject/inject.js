chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
    var j = jQuery.noConflict();
    var badWords = /node(\.js)? is the only|real dev(eloper)? lang(uage)?/i;
    var killNode = function() {
      j('.UFIImageBlockContent').each(function() {
        if (badWords.test(this.textContent) == true) {
          j(this).parents('.UFIComment').css('backgroundColor', '#EF5350').slideUp(500);
        }
      });
    };
    j('span:contains("more comments")').each(function() {

      j(this).on('click', function() {
        setTimeout(function() {
          killNode();
          console.log('clicked');
        }, 2000);
      });
    });
    killNode();
	}
	}, 10);
});


