// about = document.getElementById("Home")
// abt1 = document.getElementById("1").getBoundingClientRect().y

// about = document.getElementById("About")
// abt1 = document.getElementById("2").getBoundingClientRect().y

// about = document.getElementById("Skills")
// abt1 = document.getElementById("3").getBoundingClientRect().y

// about = document.getElementById("Contact")
// abt1 = document.getElementById("4").getBoundingClientRect().y

// about.addEventListener('click', function handleClick(){
//     window.scrollTo(0,abt1);
// })

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 100,
      reset: true
  });
  
  sr.reveal('.txt',{}); 