function centercdiv(){
        //console.log("hi");
        var cw=$('#contactdiv').width();
        var w=$(window).width();
        var left=0;
        if(w>1000){
            $('#contactdiv').css('width', '1000px');
                left=(w-1000)/2;
        }else{
             $('#contactdiv').css('width', w);
        }
        $('#contactdiv').css('margin-left',left);
}

$(document).ready(function() {

    $('.barlink').hover(function(){
        $(this).css('background-color', '#C0BFBF');
    },
    function(){
        $(this).css('background-color', '#E2E2E2');
    });

    $('.gitpic').hover(function(){
        $(this).stop().animate({width: "90px", height: "90px"})
    },
    function(){
        $(this).stop().animate({width: "70px", height:"70px"})
    });

    $(window).resize(centercdiv);

})