const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 1500,
  delay: 100,
  reset: true,
});

sr.reveal(".txt", {});



const br = ScrollReveal({
  origin: "left",
  distance: "40px",
  duration: 1500,
  delay: 100,
  reset: true,
});

br.reveal(".progress", {});


var about = document.getElementById("About")
var abt1 = document.getElementById("1").getBoundingClientRect().y
console.log(abt1)

about.addEventListener("click", function handleClick() {

    console.log(abt1)

    window.scrollTo(0, abt1);
  });

var skills = document.getElementById("Skills")
var skill1 = document.getElementById("3").getBoundingClientRect().y
console.log(skill1)

skills.addEventListener("click", function handleClick() {

    console.log(skill1)

    window.scrollTo(0, skill1);
  });