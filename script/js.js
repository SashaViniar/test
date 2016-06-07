var mas = [16];

for (var i = 0; i < 16; i++) {
    mas[i] = 0;
}



function reorder() {
    var grp = $("#pole").children();
    var cnt = grp.length;

    var temp, x;
    for (var i = 0; i < cnt; i++) {
        temp = grp[i];
        x = Math.floor(Math.random() * cnt);
        grp[i] = grp[x];
        grp[x] = temp;
    }
    $(grp).remove();
    $("#pole").append($(grp));
}

reorder();


function mytest() {
    if (mas[0] + mas[15] == 17) {
        $("#a1").css("display", "none");
        $("#a16").css("display", "none");


    }
    if (mas[1] + mas[14] == 17) {
        $("#a2").css("display", "none");
        $("#a15").css("display", "none");


    }

    if (mas[2] + mas[13] == 17) {
        $("#a3").css("display", "none");
        $("#a14").css("display", "none");


    }
    if (mas[3] + mas[12] == 17) {
        $("#a4").css("display", "none");
        $("#a13").css("display", "none");


    }

    if (mas[4] + mas[11] == 17) {
        $("#a5").css("display", "none");
        $("#a12").css("display", "none");


    }
    if (mas[5] + mas[10] == 17) {
        $("#a6").css("display", "none");
        $("#a11").css("display", "none");


    }
    if (mas[6] + mas[9] == 17) {
        $("#a7").css("display", "none");
        $("#a10").css("display", "none");


    }
    if (mas[7] + mas[8] == 17) {
        $("#a8").css("display", "none");
        $("#a9").css("display", "none");


    }
}




$(document).ready(function() {

    $("#a1").click(function() {
        $("#a1").css("background-color", "#00FF00");
        mas[0] = 1;
        mytest();
        
    });
    $("#a16").click(function() {
        $("#a16").css("background-color", "#00FF00");
        mas[15] = 16;
        mytest();
        
    });


    $("#a2").click(function() {
        $("#a2").css("background-color", "#003366");
        mas[1] = 2;
        mytest();
        
    });
    $("#a15").click(function() {
        $("#a15").css("background-color", "#003366");
        mas[14] = 15;
        mytest();
        
    });

    $("#a3").click(function() {
        $("#a3").css("background-color", "#00CCCC");
        mas[2] = 3;
        mytest();
        
    });
    $("#a14").click(function() {
        $("#a14").css("background-color", "#00CCCC");
        mas[13] = 14;
        mytest();
        
        
    });

    $("#a4").click(function() {
        $("#a4").css("background-color", "#660066");
        mas[3] = 4;
        mytest();
        
        
    });
    $("#a13").click(function() {
        $("#a13").css("background-color", "#660066");
        mas[12] = 13;
        mytest();
        
        
    });

    $("#a5").click(function() {
        $("#a5").css("background-color", "#990000");
        mas[4] = 5;
        mytest();
        
        
    });
    $("#a12").click(function() {
        $("#a12").css("background-color", "#990000");
        mas[11] = 12;
        mytest();
        
        
    });

    $("#a6").click(function() {
        $("#a6").css("background-color", "#CC3300");
        mas[5] = 6;
        mytest();
        
        
    });
    $("#a11").click(function() {
        $("#a11").css("background-color", "#CC3300");
        mas[10] = 11;
        mytest();
        
        
    });

    $("#a7").click(function() {
        $("#a7").css("background-color", "#808080 ");
        mas[6] = 7;
        mytest();
        
        
    });
    $("#a10").click(function() {
        $("#a10").css("background-color", "#808080");
        mas[9] = 10;
        mytest();
        
        
    });

    $("#a8").click(function() {
        $("#a8").css("background-color", "#ff9900");
        mas[7] = 8;
        mytest();
        
    });
    $("#a9").click(function() {
        $("#a9").css("background-color", "#ff9900");
        mas[8] = 9;
        mytest();
        
    });


});