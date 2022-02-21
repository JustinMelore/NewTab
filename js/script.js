$(document).ready(function() {
    $("#music").hide();


    $(".musicIcon").on("mousedown",function() {
        $("main").slideUp(750);
        setTimeout(() => {
            $("main").children().hide();
            $("#music").show();
            $("main").slideDown(750);
        }, 1000);
    });

    $("#music").children("img").on("mousedown",function() {
        $("main").slideUp(750);
        setTimeout(() => {
            $("main").children().show();
            $("#music").hide();
            $("main").slideDown(750);
        }, 1000);
    })

    $(".musicIcon").eq(0).on("mousedown",function() {
        $("#music").children("div").html(`<iframe height="315" src="https://www.youtube.com/embed/lv5uiDbbWv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <iframe height="315" src="https://www.youtube.com/embed/gC4t39f0URI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <iframe height="315" src="https://www.youtube.com/embed/Y4UckOGdZtI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`);
    });

    $(".musicIcon").eq(1).on("mousedown",function() {
        $("#music").children("div").html(`<iframe height="315" src="https://www.youtube.com/embed/JhulBGMA7G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <iframe height="315" src="https://www.youtube.com/embed/A2VpR8HahKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <iframe height="315" src="https://www.youtube.com/embed/em0MknB6wFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`);
    });
    
    $(".musicIcon").eq(2).on("mousedown",function() {
        $("#music").children("div").html(`<iframe height="315" src="https://www.youtube.com/embed/Z4_qbgRIMQE" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   ></iframe>
                <iframe height="315" src="https://www.youtube.com/embed/CARHyGAsv6Y" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   ></iframe>
                <iframe height="315" src="https://www.youtube.com/embed/8jXUSxq30hA" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`);
    });

    $(".musicIcon").eq(3).on("mousedown",function() {
        $("#music").children("div").html(`<iframe height="315" src="https://www.youtube.com/embed/le1QF3uoQNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <iframe height="315" src="https://www.youtube.com/embed/TnlPtaPxXfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <iframe height="315" src="https://www.youtube.com/embed/ZEcqHA7dbwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`);        
    });

})