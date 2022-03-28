//main.js
//pc-menu
$(function(){
    $('#pc-gnb > ul').mouseover(function(){
        $('#pc-gnb .depth2').addClass('on');
        $('.box1').addClass('on');
    })
   
    $('#pc-gnb > ul > li > .depth2').mouseleave(function(){
       $('#pc-gnb .depth2').removeClass('on');
       $('.box1').removeClass('on');
   })

   $('.box1').mouseleave(function(){
       $('#pc-gnb .depth2').removeClass('on');
       $('.box1').removeClass('on');
   })
   
   //toggle-menu
   $('.toggle-menu').on('click', function(){
           $('.box2').show();
           $('#mobile-gnb').show().animate({
               right:0
           });  
       });
       $('.toggle-close-btn').on('click', function(){
        $('.box2').hide();
           $('#mobile-gnb').animate({
               right: '-' + 65 + 'vw'
                   },function(){
   $('#mobile-gnb').hide(); 
   }); 
       });

   //  tab버튼
   $('.tab-group > a:first').click(function(){
       $('.tab-group > a').removeClass('on')
       $(this).addClass('on')
       $('#faq').removeClass('on')
       $('#news').addClass('on');
   })
   $('.tab-group > a:last').click(function(){
       $('.tab-group > a').removeClass('on')
       $(this).addClass('on')
       $('#news').removeClass('on')
       $('#faq').addClass('on');
   })
   // sitemap-menu
   $('.sitemap-btn').click(function(){
       $('.sitemap-modal').addClass('on')
       $('#sitemap-modal-close').addClass('on');
   })
   // sitemap-close
   $('#sitemap-modal-close').click(function(){
       $('.sitemap-modal').removeClass('on')
       $('#sitemap-modal-close').removeClass('on');
   })
});

$(window).resize(function(){
    console.log(innerWidth);
    if(innerWidth >= 768) {
        $('.box2').hide();
        $('#mobile-gnb').hide();
    }
})