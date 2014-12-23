chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    var j = jQuery.noConflict();
    var badWords = /node(\.js)? is the only|real dev(eloper)? lang(uage)?/i;
    var killNodejs = function() {
      j('.UFIImageBlockContent').each(function() {
        if (badWords.test(this.textContent) == true) {
          j(this).parents('.UFIComment').css('backgroundColor', '#EF5350').slideUp(800);
        }
      });
    };
    j('span:contains("more comments")').each(function() {
      $(this).on('click', killNodejs)
    })
	}
	}, 10);
});


