// JavaScript for filter functionality
const filterInput = document.getElementById("filter");
const skillsList = document.querySelector(".skills-list");

filterInput.addEventListener("input", function () {
  const searchTerm = filterInput.value.toLowerCase();
  const skills = Array.from(skillsList.children);

  skills.forEach((skill) => {
    const skillName = skill.textContent.toLowerCase();
    if (skillName.includes(searchTerm)) {
      skill.style.display = "inline-block";
    } else {
      skill.style.display = "none";
    }
  });
});

// // To check 
// // JavaScript for smooth scrolling when clicking on navigation links
// $(document).ready(function () {
//   $("a").on("click", function (event) {
//       if (this.hash !== "") {
//           event.preventDefault();
//           var hash = this.hash;
//           $("html, body").animate(
//               {
//                   scrollTop: $(hash).offset().top,
//               },
//               800,
//               function () {
//                   window.location.hash = hash;
//               }
//           );
//       }
//   });
// });
