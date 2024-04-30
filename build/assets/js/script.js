document.onreadystatechange=function(){
  document.readyState!=="complete"?(document.querySelector("body").style.visibility="hidden",
  document.querySelector("#loader").style.visibility="visible"):(document.querySelector("#loader").style.display="none",
  document.querySelector("body").style.visibility="visible")},
  document.addEventListener("DOMContentLoaded",function(){
    window.innerWidth>992&&document.querySelectorAll(".navbar .nav-item").forEach(
      function(everyitem){
        everyitem.addEventListener("mouseover",function(e){
          let el_link=this.querySelector('a[data-bs-toggle]');el_link&&(el_link.classList.add("show"),el_link.nextElementSibling.classList.add("show"))}),
          everyitem.addEventListener("mouseleave",function(e){
            let el_link=this.querySelector('a[data-bs-toggle]');el_link&&(el_link.classList.remove("show"),el_link.nextElementSibling.classList.remove("show"))
          })
        })
      }),
      $('.cysec-overlay').removeClass('cysec-overlay-active');
  
  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
      $('#scroll').fadeIn(); 
    } else { 
      $('#scroll').fadeOut(); 
    } 
  }); 
  $('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
  }); 
  
  $('.popup-button').click(function(e) {
    $('.wrapper').fadeIn(500);
    $('.popup-box').removeClass('transform-out').addClass('transform-in');
    $('.cysec-overlay').addClass('cysec-overlay-active');
    e.preventDefault();
  });

  $('.popup-close').click(function(e) {
    $('.wrapper').fadeOut(500);
    $('.popup-box').removeClass('transform-in').addClass('transform-out');
    $('.cysec-overlay').removeClass('cysec-overlay-active');
    e.preventDefault();
  });

  $('.aa').hover(
    function(){
       $('.to-top').addClass('to-top-hover');
     },
    function(){
       $('.to-top').removeClass('to-top-hover');
     }
   );
            $(document).ready(function(){$(window).on("scroll",function(){
              var link=$(".front_slider li.l"),top=$(window).scrollTop();
              $(".nav_name").each(function(){
                var id=$(this).attr("id"),
                height=$(this).height(),
                offset=$(this).offset().top-150;if(top>=offset&&top<offset+height){link.removeClass("active").removeClass("mb-50"),
                $(".front_slider").find('[data-scroll="'+id+'"]').parent("li").addClass("active").addClass("mb-50");
                //$(".front_slider ul li.active").hasClass("first")&&$(".navbar-light .navbar-nav .nav-link").css("color","white"),
                $(".front_slider ul .text-colo-white").hasClass("active")?$(".front_slider ul li").removeClass("dark"):$(".front_slider ul .text-colo-dark").hasClass("active")&&$(".front_slider ul li").addClass("dark");
                $(".front_slider ul li.active").hasClass("last")?$(".front_slider").addClass("bottom"):$(".front_slider").removeClass("bottom")}
              })
            }),
            function checkOffset(){
              $(".front_slider").offset().top+$(".front_slider").height()>= $("#footer").offset().top-1?$(".front_slider").css("position","absolute"):$(document).scrollTop()+window.innerHeight<$("#footer").offset().top&&$(".front_slider").css("position","fixed")
            },
              $(".footer-email").on("keyup",function(){
                var email=$(".footer-email").val();IsEmail(email)==!1?($(".email-tip").addClass("invalid").html("!Please enter valid mail").css("color","red"),void 0):($(".email-tip").removeClass("invalid").html(""),void 0)});
                var faders=document.querySelectorAll(".fadeInUp"),
                sliders=document.querySelectorAll(".animated"),
                wow=document.querySelectorAll(".Wow"),appearOptions={threshold:0,rootMargin:"0px 0px -0px 0px"},
                appearOnScroll=new IntersectionObserver(function(e,a){e.forEach(function(e){e.isIntersecting? (e.target.classList.add("appear"),
                appearOnScroll.unobserve(e.target)):void 0})},appearOptions);
                faders.forEach(function(e){appearOnScroll.observe(e)}),
                sliders.forEach(function(e){appearOnScroll.observe(e)}),
                sliders.forEach(function(e){appearOnScroll.observe(e)}) 
              });