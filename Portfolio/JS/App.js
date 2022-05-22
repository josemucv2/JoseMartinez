

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
        $(".icons-size").css('width', '70px');
      
    }
    
    $('.project-ecommerce').hover(
        function(){ 
            $(this).text('');
            $(this).append($('<a href="https://projectcoderecommerce.netlify.app" class="go-to-page"><button class="button-image" style="background-color: green">Go to Page</button></a>'));
        },
        
        function(){
            $(this).find('a').remove();
            $(this).text('E-commerce');
        })
        
        $('.project-landingPage').hover(
            function(){ 
                $(this).text('');
                $(this).append($('<a href="https://josemucv2.github.io/landingpage/" class="go-to-page"><button class="button-image" style="background-color: green">Go to Page</button></a>'));
            },
            
            function(){
                $(this).find('a').remove();
                $(this).text('Landing Page');
            })

            $('.project-Loginuser').hover(
            function(){ 
                $(this).text('');
                $(this).append($('<a href="https://loginuserproject.netlify.app" class="go-to-page"><button class="button-image" style="background-color: green">Go to Page</button></a>'));
            },
            
            function(){
                $(this).find('a').remove();
                $(this).text('Login User');
            })
            
    $('.img-developer').hover(
        function(){ 
            $(this).text('')
            $(this).append($(`<a href="https://latam.coderhouse.com/certificados/6130e1c8b05a7a00115695c8" class="go-to-page"><button class="button-image" style="background-color: green">Go to Page</button></a>`));
        },
        
        function(){
            $(this).find('a').remove();
            $(this).text('Certificate Developer Web');
        })
        
        $('.img-javascript').hover(
            function(){ 
                $(this).text('');
                $(this).append($('<a href="https://latam.coderhouse.com/certificados/618feed74bd4ae00271927b5" class="go-to-page"><button class="button-image" style="background-color: green">Go to Page</button></a>'));
            },
        
        function(){
            $(this).find('a').remove();
            $(this).text('Certificate Developer Web');
        })
        
        $('.img-React').hover(
            function(){ 
                $(this).text('');
                $(this).append($('<a href="https://latam.coderhouse.com/certificados/6213cd53adfa9b003f5bd763" class="go-to-page"><button class="button-image" style="background-color: green">Go to Page</button></a>'));
            }, 
            
            function(){
                $(this).find('a').remove();
                $(this).text('Certificate on React.js');
            })

            $('.react').hover(
            function(){ 
                $(this).text('');
                $(this).append($('<a href="https://latam.coderhouse.com/certificados/62578aa4bcf2cf0019a13ed5" class="go-to-page"><button class="button-image" style="background-color: green">Go to Page</button></a>'));
            }, 
            
            function(){
                $(this).find('a').remove();
                $(this).text('Certificate Developer Front End on React.js');
            })
        })




