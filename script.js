const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = (x / rect.width - 0.5) * 20;
const rotateX = (0.5 - y / rect.height) * 20;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});