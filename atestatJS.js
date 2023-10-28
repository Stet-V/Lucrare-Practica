var sidehover = document.getElementById("sidehover");
var sidebar = document.getElementById("sidebar");

sidehover.onmouseover = sidebar.onmouseover = function() {
    sidebar.style.left = "0px";
};

sidehover.onmouseout = sidebar.onmouseout = function() {
    sidebar.style.left = "-300px";
};

function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.add('hidden');
    }
    document.getElementById(pageId).classList.remove('hidden');
}
