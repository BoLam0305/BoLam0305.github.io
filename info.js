//Responsive layout
window.addEventListener('resize', function (event) {


    //responsive table
    if (window.innerWidth < 780) {
        let star = document.querySelectorAll('.fa-star');
        let mark = document.querySelectorAll('.mark-rating');
        let mobileBar = document.getElementById("mobile-bar-container");
        let menuBar = document.getElementById("menu-bar");

        star.forEach(star => {
            star.style.display = 'none';
        });

        mark.forEach(mark => {
            mark.style.display = 'inherit';
        });

        mobileBar.style.display = 'inherit';
        menuBar.style.display = 'none';

    } else {
        let star = document.querySelectorAll('.fa-star');
        let mark = document.querySelectorAll('.mark-rating');
        let mobileBar = document.getElementById("mobile-bar-container");
        let menuBar = document.getElementById("menu-bar");
        star.forEach(star => {
            star.style.display = 'inherit';
        });

        mark.forEach(mark => {
            mark.style.display = 'none';
        });

        mobileBar.style.display = 'none';
                menuBar.style.display = 'inherit';

    }


}, true);


var barAnimateCount = 1;
window.addEventListener("scroll", function (event) {


    var trigger_element = document.getElementById("php-bar");
    var hT = trigger_element.offsetTop;
    var hH = trigger_element.offsetHeight;
    var wH = window.innerHeight;
    var wS = (window.pageYOffset || document.body.scrollTop) - (document.body.clientTop || 0);
    var result = hT + hH - wH;
    if (wS > result && barAnimateCount == 1) {
        moveBar();
        barAnimateCount -= 1;
    }
});


// check scroll position
function moveBar() {
    let id = ["java-bar", "python-bar", "cpp-bar", "cs-bar", "html-bar", "css-bar", "js-bar", "jq-bar", "bs-bar", "php-bar", "spring-bar", "django-bar", "react-bar"];
    let rate = [60, 60, 50, 50, 80, 70, 65, 60, 55, 55, 60, 55, 40];
    for (let i = 0; i < id.length; i++) {
        bar_anim(id[i], rate[i]);
    }
}

function bar_anim(id, rate) {
    //Progress bar
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById(id);
        var width = 1;
        var id = setInterval(frame, 20);

        function frame() {
            if (width >= rate) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function scrollToInfo(id) {
    let element = document.getElementById(id);
    element.scrollIntoView();
}

function showCV(prefix) {
    let right_id = prefix + '-' + 'right';
    let down_id = prefix + '-' + 'down';
    let div_id = prefix + '-' + 'container';
    let down = document.getElementById(down_id);
    let right = document.getElementById(right_id);
    let div = document.getElementById(div_id);

    if (right.style.display === "none") {
        down.style.display = "none";
        right.style.display = "block";
        div.style.display = "block";

    } else {
        right.style.display = "none";
        down.style.display = "block";
        div.style.display = "none";

    }
}
