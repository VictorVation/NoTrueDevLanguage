var j = jQuery.noConflict();
var badWords = /node(\.js)? is the only real|real dev(eloper)? lang(uage)?/i;
setInterval(function() {
  j('.UFIImageBlockContent').map(function() {
    if (badWords.test(this.textContent) == true) {
      j(this).parents('.UFIComment').slideUp(200);
    }
  });
}, 3500);
