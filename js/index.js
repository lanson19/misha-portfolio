$(document).on("scroll", function () {
    let pageTop = $(document).scrollTop()
    let pageBottom = pageTop + $(window).height()
    let hide = $(".hide")
  
    for (var i = 0; i < hide.length; i++) {
      var tag = hide[i]
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
})

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert("coppied");
}