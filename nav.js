let progress = document.getElementById("progressbar");
let p = document.getElementById("percent");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
  p.innerHTML = "Page Scrolled " + Math.round(progressHeight) + "%";
  console.log(p);
};
