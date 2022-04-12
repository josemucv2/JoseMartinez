$(document).ready(() => {
     $('.disclaimer').css('display', 'none');
    const width = $(window).width();
    console.log(width);
    if(width < 768){
        $(".openMain").click(() =>{
            $('.desactive').slideToggle('fast');
            $('main').css('margin-top','120px');
        })
        
        $('.nav-bar-mobile').css('display', 'block');
        $(".add-et").append('<br/>')
    }

    $('.fa-whatsapp').hover(
        function(){ 
            $(this).append($('<button>Send Message</button>'));
           
            
    }
    
    , function(){
        $(this).find('button').remove();
        
    })
    

 


})



