class TextTypingAnimation {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10);
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

};

TextTypingAnimation.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = Math.random() * 150;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout( () => { that.tick() }, delta );
};

$(window).on("load", function () {
    const elements = $('.typewrite');
    let dataType = '\["Graphic Designer", "Front-End Developer", "Pet lover"\]';
    for (let i = 0; i < elements.length; i++) {
        let toRotate = dataType
        let period = 2000
        if (toRotate) {
            new TextTypingAnimation(elements[i], JSON.parse(toRotate), period);
        }
    }
});


$(window).scroll(function() {
    if ($(".navbar").offset().top > 500) {
        $(".navbar-fixed-top").addClass("navbar-active");
    } else {
        $(".navbar-fixed-top").removeClass("navbar-active");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });