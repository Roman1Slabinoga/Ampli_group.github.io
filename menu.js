var element = document.getElementById("menu");

document.getElementById("burger").addEventListener("click", function() {
  console.log(element);
  element.classList.toggle("active");
  return false;
});
