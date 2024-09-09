function hover(element) {
    element.setAttribute('src', element.src.slice(0, -4) + "_hover.png");
}

function unhover(element) {
    element.setAttribute('src', element.src.split("_")[0] + ".png");
}

function projecthover(element, index) {
    element.style.width = "90%";
    document.getElementsByClassName("miniheader")[index].style.width = "90%";
}

function projectunhover(element, index) {
    element.style.width = "80%";
    document.getElementsByClassName("miniheader")[index].style.width = "80%";
}

function minimize() {
    if (document.getElementById("wrapper").style.display === "none") {
        document.getElementById("wrapper").style.display = "block";
        document.getElementById("logo").style.display = "none";
    }
    else {
        document.getElementById("wrapper").style.display = "none";
        document.getElementById("logo").style.display = "flex";
    }
}

function maximize() {
    if (document.getElementById("wrapper").style.display === "inline") {
        document.getElementById("wrapper").style.display = "block";
    }
    else {
        document.getElementById("wrapper").style.display = "inline";
    }
}

function navminimize() {
    if (document.getElementById("navcontent").style.display === "none") {
        document.getElementById("navcontent").style.display = "block";
    }
    else {
        document.getElementById("navcontent").style.display = "none";
    }
}

function projectimgminimize(index) {
    if (document.getElementsByClassName("collapsibleimg")[index].style.display === "none") {
        document.getElementsByClassName("collapsibleimg")[index].style.display = "block";
    }
    else {
        document.getElementsByClassName("collapsibleimg")[index].style.display = "none";
    }
}

function toggleMute(element) {
  if (document.getElementById("audio").muted) {
    element.setAttribute("src", "../img/buttons/unmute");
    unhover(element)
    hover(element)
    document.getElementById("audio").muted = false;
  }
  else {
    element.setAttribute("src", "../img/buttons/mute");
    unhover(element)
    hover(element)
    document.getElementById("audio").muted = true;
  }
}

function playAudio() {
  document.getElementById("audio").play()
}

function pauseAudio() {
  document.getElementById("audio").pause()
}
