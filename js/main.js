//main.js

$(function(){
    $('#gnb > ul').mouseover(function(){
        $('#gnb .depth2').addClass('on');
        $('.box1').addClass('on');
    })
$(function(){
        $('#gnb > ul > li > .depth2').mouseleave(function(){
            $('#gnb .depth2').removeClass('on');
            $('.box1').removeClass('on');
        })
        
        $('.box1').mouseleave(function(){
            $('#gnb .depth2').removeClass('on');
            $('.box1').removeClass('on');
        })

    })

    //mobile toggle

     $(document).ready(function(){
 
        $('.toggle-menu').on('click', function(){
            $('#gnb').show().animate({
                right:0
            });  
        });
        $('.toggle-close-btn').on('click', function(){
            $('#gnb').animate({
                right: '-' + 65 + 'vw'
                       },function(){
    $('#gnb').hide(); 
    }); 
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
})