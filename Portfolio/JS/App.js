$(document).ready(() => {
    
    $('.disclaimer').css('display', 'none');
    
    const width = $(window).width();
   
    if((width < 768) || (width < 800)) {
        
        $(".openMain").click(() =>{
            $('.desactive').slideToggle('fast');
            $('main').css('margin-top','120px');
        })
        
        $('.nav-bar-mobile').css('display', 'block');
        $(".add-et").append('<br/>')
        $('.sub-title-developer').append('Desarrollo Web')
        $('.sub-title-javascript').append('Javascript')
        $('.sub-title-React').append('React.js')
      
    }
    
    $('.project-ecommerce').hover(
        function(){ 
            $(this).append($('<a href="https://projectcoderecommerce.netlify.app" class="go-to-page"><button class="button-image">Go to Page</button></a>'));
        },
        
        function(){
            $(this).find('a').remove();
        })
        
        $('.project-landingPage').hover(
            function(){ 
                $(this).append($('<a href="https://josemucv2.github.io/landingpage/" class="go-to-page"><button class="button-image">Go to Page</button></a>'));
            },
            
            function(){
                $(this).find('a').remove();
            })
            
    $('.img-developer').hover(
        function(){ 
            $(this).append($('<a href="https://latam.coderhouse.com/certificados/6130e1c8b05a7a00115695c8" class="go-to-page"><button class="button-image">Go to Page</button></a>'));
        },
        
        function(){
            $(this).find('a').remove();
        })
        
        $('.img-javascript').hover(
            function(){ 
                $(this).append($('<a href="https://latam.coderhouse.com/certificados/618feed74bd4ae00271927b5" class="go-to-page"><button class="button-image">Go to Page</button></a>'));
            },
        
        function(){
            $(this).find('a').remove();
        })
        
        $('.img-React').hover(
            function(){ 
                $(this).append($('<a href="https://latam.coderhouse.com/certificados/6213cd53adfa9b003f5bd763" class="go-to-page"><button class="button-image">Go to Page</button></a>'));
            }, 
            
            function(){
                $(this).find('a').remove();
            })

})



