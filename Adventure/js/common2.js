
    $(function lazyLoadImg() {

        $.extend($.expr[':'], {
            inview: function(el) {
                var e = $(el),
                    w = $(window),
                    wt = w.scrollTop(),
                    wb = wt + w.height(),
                    et = e.offset().top,
                    eb = et + e.height();

                return eb >= wt && et <= wb;
            }
        });

        $("img").lazyload({
            event : "scroll filter",
            effect : "fadeIn"
        });

        $.filtrify("container", "placeHolder", {
            block : "data-original",
            callback : function( query, match, mismatch ) {
                $(match).find("img:inview").trigger("filter");
            }
        });

    });

