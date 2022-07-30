particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

     gsap.to(".pi", {
      text:"My name is Olga. I`m web-developer...",
      duration:4,
      repeatDelay:.7,
      ease:"power1.in",
      yoyo:true,
    
      delay:2,
      })

      gsap.to (".pii", {
      text:"Junior frontend web developer. "+" ",
      y:-15, 
      repeatDelay:1.7,
      ease:"power1.in",
      yoyo:true,
      delay:6,
      duration:5, 
      repeat:-1,
      stagger:.1})

  gsap.from(".wrapper", {opacity:0, duration:2, delay:2, stagger:.3})
  gsap.to(".btn", {x:10,opacity:1,ease:"power1.in", yoyo:true, duration:3, delay:9})
  gsap.from(".container-about",{x:-1000, duration:5,delay:.5, ease: "elastic.out(1, 0.3)"})
  gsap.from(".skill-item",  {y:30, opacity:0, duration:4, delay:1, stagger:.6})

  $(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 100) {
        $('#scroll_top').show();
      } else {
        $('#scroll_top').hide();
      }
    });
   
    $('#scroll_top').click(function(){
      $('html, body').animate({scrollTop: 0}, 90);
      return false;
    });
  });


  // modal window
   let modal = document.querySelector('#myModal');
let btn = document.querySelector("#myBtn");
let span =document.querySelector(".close");


btn.addEventListener("click", open)

function open () {
    modal.style.display = "block";
}

span.addEventListener("click", close)

function close (){
  modal.style.display = "none";
}
