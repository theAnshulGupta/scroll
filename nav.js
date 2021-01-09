let progress = document.getElementById("scroll");
let p = document.getElementById("percent");
let max = document.body.scrollHeight - window.innerHeight;
let change = (window.pageYOffset / max) * 100;

window.onresize = function (event) {
  max = document.body.scrollHeight - window.innerHeight;
  change = (window.pageYOffset / max) * 100;
};

console.log(change);
if (change == 0) {
  p.innerHTML = "Page Scrolled " + Math.round(change) + "%";
}

window.onscroll = function () {
  change = (window.pageYOffset / max) * 100;
  progress.style.height = change + "%";
  p.innerHTML = "Page Scrolled " + Math.round(change) + "%";
};
