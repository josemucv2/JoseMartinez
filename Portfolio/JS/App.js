$(document).ready(() => {

    const width =  screen.width;
     
      
    if(width < 768){
        $(".openMain").click(() =>{
            $('.desactive').slideToggle('fast');
            
        })


        $('.nav-bar-mobile').css('display', 'block');
        $(".add-et").append('<br/>')
       


    }
    


  const height = screen.height
  console.log(height)
  $('.disclaimer').css('display', 'none');


})



