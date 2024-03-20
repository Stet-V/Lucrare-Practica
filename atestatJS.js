var sidehover = document.getElementById("sidehover");
var sidebar = document.getElementById("sidebar");

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 200) {
        console.log('yes');
    } else {
        console.log('yes');
    }
});

sidehover.onmouseover = function() {
    console.log('test');
};

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