function meny() {
  var x = document.getElementById("myLinks");
  var a = document.getElementById("Link1");
  var b = document.getElementById("Link2");
  var c = document.getElementById("Link3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
  }
}

function undermeny1() {
  var a = document.getElementById("Link1");
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
}

function undermeny2() {
  var b = document.getElementById("Link2");
  if (b.style.display === "block") {
    b.style.display = "none";
  } else {
    b.style.display = "block";
  }
}

function undermeny3() {
  var c = document.getElementById("Link3");
  if (c.style.display === "block") {
    c.style.display = "none";
  } else {
    c.style.display = "block";
  }
}

function bar() {
  var y = document.getElementById("searchbar");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
   y.style.display = "block";
  }
}