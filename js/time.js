let endDate = new Date("08/30/2024 00:00:00").getTime(); //month/day/year
let check = setInterval(function () {
    let now = new Date().getTime();
    let distance = endDate - now;
    let day = Math.floor(distance / (24 * 60 * 60 * 1000));
    let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60* 60*1000));
    let minute = Math.floor((distance % ( 60 * 60 * 1000)) /(60*1000));
    let seconds = Math.floor((distance % (60 * 1000)) / 1000);
    
    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('seconds').innerText = seconds;
    if (distance <= 0) {
        clearInterval(check);
    }
}, 1000)


// begin ms
// 1s = 1000 ms
// 1p = 60s = 60*1000 ms
// 1h = 60p = 60*60 s = 60* 60* 1000 ms
// 1d = 24h = 24*60p = 24*60*60s = 24*60*60*1000 ms


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav: true,
    autoplay:true,
    autoplayTimeout: 5000,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
let tabs = document.querySelectorAll('.tabs h3');
let tabsContent = document.querySelectorAll('.btn_text .flex_grid');
console.log(tabsContent);
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabsContent.forEach(content => {
            content.classList.remove("active");
        });
        tabs.forEach(tab => {
            tab.classList.remove("active");
        })
        tabsContent[index].classList.add("active");
        tabs[index].classList.add("active");
    })
})

let tabs_two = document.querySelectorAll('.tabs_two h3');
let tabsContent_two = document.querySelectorAll('.btn_text .flex_grid');
console.log(tabsContent_two);
tabs_two.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabsContent_two.forEach(content => {
            content.classList.remove("active");
        });
        tabs_two.forEach(tab => {
            tab.classList.remove("active");
        })
        tabsContent_two[index].classList.add("active");
        tabs_two[index].classList.add("active");
    })
})
// thêm class
function Add() {
    const down = document.getElementById('menu');
    down.classList.add('show');
}
//xóa class
function Close() {
     const close = document.getElementById('menu');
    close.classList.remove('show');
}


// thêm class
function AddDropp() {
  document.getElementById("menu1").classList.toggle("note");
}

function AddDrop() {
  document.getElementById("dropdown").classList.toggle("show");
}
//Auto
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);

//Draggle
const tabBox = document.querySelector('.tabs_two');
let isDragging = false;
const dragging = (e) => {
    if (!isDragging) return;
    tabBox.scrollLeft -= e.movementX;
}
const dragStop = () => {
    isDragging = false
}
tabBox.addEventListener("mousedown", () => isDragging = true);
tabBox.addEventListener("mousemove", dragging);
tabBox.addEventListener("mouseup", dragStop);