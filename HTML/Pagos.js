// JavaScript source code

function showPanel() {
    if (document.getElementById("divPanel").className == "panelHidden") {
        document.getElementById("divPanel").className = "panelShow";
    }
    else {
        document.getElementById("divPanel").className = "panelHidden";
    }
}