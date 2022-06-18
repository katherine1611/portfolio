$(document).ready(function(){

    // SCROLL EFFECT NAV
    $(window).scroll(function(){
       $('.navbar').toggleClass('shadow-bottom', $(window).scrollTop() > 50)

    // NAV HIGHLIGHT CURRENT PAGE   
       const wrapper = $('.wrapper')
       let current = ''
       wrapper.each(function(){
           const wrapperTop = $(this).offset().top
           const wrapperHeight = $(this).height()
           if(pageYOffset >= wrapperTop){
               current = $(this).attr('id')
           }
       })
    
        const links = $('ul a')
        links.each(function(){

        if($(this).attr('href') === `#${current}`)
        {
            $(this).addClass('text-warning')
        }
        else{
            $(this).removeClass('text-warning')
        }
        })
    })
    })

    // NAV FILTER ALL ACTIVE
    const links = $('nav a')

    // CLICK ACTIVE
    links.each(function(){
        $(this).click(function(event){
            event.preventDefault()

            // remove active links
                links.filter(function(){
                    $(this).removeClass('text-warning')
                })

            // pass active links 
            $(this).addClass('text-warning')

            // SCROLL FOR MAC BROWSERS

            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
          
                // Store hash
                var hash = this.hash;
          
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                  scrollTop: $(hash).offset().top
                }, 800, function(){
          
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
                });
              } // End if


        })
    })

    // TOGGLE NAV ICON
    const navBarToggler = $('.navbar-toggler')
    navBarToggler.click(function(){
        const navIcon = $('nav .fas')
        navIcon.toggleClass('fa-times')
    })

    // DATA TOOLTIP -FOOTER
    $('[data-toggle="tooltip"]').tooltip(); 






