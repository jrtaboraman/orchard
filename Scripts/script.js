const blurMe = () => {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
};

function toggle1() {
  blurMe();
  document.getElementById("popup1").classList.toggle("active");
}

function toggle2() {
  blurMe();
  document.getElementById("popup2").classList.toggle("active");
}

function toggle3() {
  blurMe();
  document.getElementById("popup3").classList.toggle("active");
}

const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");

image1.addEventListener("click", (e) => {
  console.log(e.target);
});

image2.addEventListener("click", (e) => {
  console.log(e.target);
});

image3.addEventListener("click", (e) => {
  console.log(e.target);
});
