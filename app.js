const hambergur = document.querySelector(".hambergur");
const navigation = document.querySelector(".primary-navigation");
hambergur.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
