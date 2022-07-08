$(document).ready(function(){
    $('.single-item').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });
    // add jquery animation to the button
    $('#animation').click(function(){
        let div=$('#forAnimation');
        let i=1;
        while(200000>i){
            div.animate({left:(Math.floor(Math.random()*800)+'px')}, "fast");
            div.animate({right:(Math.floor(Math.random()*800)+'px')}, "fast");
            div.animate({top:(Math.floor(Math.random()*800)+'px')}, "fast");
            div.animate({bottom:(Math.floor(Math.random()*800)+'px')}, "fast");
            i++;
        }
});

    $('#ajax').click(function(){
        $('#forAJAX').load('/ajax.txt', function(responseTxt, statusTxt, xhr){
            if(statusTxt=="success"){
                alert(responseTxt+"External content loaded successfully!");
            }
            if(statusTxt=="error"){
                alert("Error: "+xhr.status+": "+xhr.statusText);
            }
    }   
    );
    });

});