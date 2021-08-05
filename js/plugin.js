/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */
$(document).ready(function() {
    // code

    // function Scroll To
    $(function() {
        "use strict";
        $("body").append(
            "<input type='text' class='offsetTo' placeholder='Scroll To'>"
        );
        // Input Style Css
        $(".offsetTo").css({
            width: "137px",
            fontSize: "13px",
            border: "10px solid #333",
            borderRadius: "10px",
            padding: "5px 5px",
            position: "fixed",
            bottom: "0",
            left: "0",
            textAlign: "left",
        });
        $("body").on("change", ".offsetTo", function() {
            // code
            var inputVal = $(".offsetTo").val();
            $(window).scrollTop(inputVal);
        });
    });
});

$(function() {
    // code
    $(window).scrollTop(0);
});
// *********************************//