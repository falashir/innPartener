var otherPulseDiv = document.createElement("DIV");
otherPulseDiv.id = "pulse_smatbot_unique";

var mainDiv = document.createElement("DIV");
otherPulseDiv.appendChild(mainDiv);
mainDiv.id = "closed";

var img = document.createElement("Img");
img.id = "main_icon_smatest";
img.src =
  "https://s3.ap-south-1.amazonaws.com/custpostimages/sb_images/chat-loading.gif";

var imgLogo = document.createElement("Img");
imgLogo.id = "logo-smatest";
imgLogo.classList.add("logo-smatest");
mainDiv.appendChild(img);
mainDiv.classList.add("pointer");
mainDiv.classList.add("smat-div-before");
img.classList.add("smat-main-btn-before");
otherPulseDiv.classList.add("pulse-div-before");
document.addEventListener("DOMContentLoaded", function(event) {
  document.body.appendChild(otherPulseDiv);
});

!(function(t, e) {
  "use strict";
  var r = function(t) {
    try {
      var r = e.head || e.getElementsByTagName("head")[0],
        a = e.createElement("script"),
        b = document.getElementsByTagName("script")[0];

      a.setAttribute("type", "text/javascript"),
        a.setAttribute("src", t),
        (a.async = !0),
        r.insertBefore(a, b);
    } catch (t) {}
  };

  (t.chatbot_id = 1602),
    r("https://s3.amazonaws.com/smatbot/files/smatbot_plugin.js.gz");
})(window, document);
