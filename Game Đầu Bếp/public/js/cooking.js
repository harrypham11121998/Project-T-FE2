import { validationFood } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Get element
const timeCountDown = $('#time-count-down');
const divMoney = $('.point-price');

//Khai bao bien
let totalTime = 30;
let totalMoney = 400;
let timeCooked = 0;
let countDown = totalTime + 2;
let isCooking = false;


//Innet Text
timeCountDown.innerText = `${totalTime + 2}`;
divMoney.innerText = `${totalMoney} $`;

let setTime;
function reducedTime() {
    const swt = $('.switch');
    let percenReduced = (1 / totalTime) * 100;
    const numMinus = (swt.offsetHeight * percenReduced) / 100;
    setTime = setInterval(reducert, 1000);
    function reducert() {
        if (countDown > 0) {
            countDown--;
            swt.style.height = `${swt.offsetHeight - numMinus}px`;
            timeCountDown.innerText = countDown;
        }
        else {
            swt.style.height = `0px`;
            clearInterval(setTime);
        }
    }
}
reducedTime();

//set su kien cho nguyen lieu
const allPriceFood = $$('.food-price');
$$('.food-img1').forEach((element, index) => {
    element.addEventListener('click', () => {
        validationFood($('.plate-food'), element, insertFood);
        function insertFood() {
            $('.plate-food').style.display = 'block';
            totalMoney -= +allPriceFood[index].textContent;
            divMoney.innerText = `${totalMoney} $`;
        }

    });
});

//Set su kien cho nguyen lieu
var timer = false;
const allQuantityFood = $$('.food-quantity');
const allUnityFood = $$('.food-unit');
$$('.food-img2').forEach((element, index) => {
    element.addEventListener('mousedown', () => {
        if (isCooking) {
            alert('Bạn đang nấu ăn');
        }
        else if ($('.plate-food').getAttribute('src') !== '') {
            let count = +allQuantityFood[index].textContent;
            $('.plate-spice').setAttribute('src', element.getAttribute('src'));
            $('.plate-spice').style.display = 'block';
            timer = setInterval(function () {
                count++;
                allQuantityFood[index].innerText = count;
                $('.plate-weigh-num').innerText = count;
                $('.plate-weigh').style.display = 'block';
                $('.plate-weigh-unit').innerText = allUnityFood[index].textContent;
            }, 200);
        } else {
            alert('Hiện tại chưa có món ăn để nêm gia vị');
        }
    });
    element.addEventListener('mouseleave', removeOnDW);
    element.addEventListener('mouseup', removeOnDW);
    function removeOnDW() {
        if (timer) {
            clearInterval(timer);
            $('.plate-weigh-num').innerText = 0;
            $('.plate-weigh').style.display = 'none';
            $('.plate-spice').style.display = 'none';
        }
    }
});


let setTimeCook;
// Set event click nau an
$('.btn-plate').addEventListener('click', () => {
    $('.time-cook').innerText = timeCooked;
    if (isCooking) {
        alert('Bạn đang nấu');
    }
    else if ($('.plate-food').getAttribute('src') === './public/images/lemonade.svg' || $('.plate-food').getAttribute('src') === './public/images/water.svg') {
        alert('Món này không nấu được');
    }
    else if ($('.plate-food').getAttribute('src') !== '') {
        $('.plate-food').style.display = 'none';
        $('.oven-overlay').style.display = 'block';
        $('.oven-time').style.opacity = 1;
        setTimeCook = setInterval(() => {
            timeCooked++;
            $('.time-cook').innerText = timeCooked;
        }, 1000);
        isCooking = true;
    }
    else {
        alert('Hiện tại không có món để nấu');
    }
});

// Set event click tat lo vi song
$('.btn-off').addEventListener('click', () => {
    if (setTimeCook) {
        clearInterval(setTimeCook);
    }
    $('.oven-overlay').style.display = 'none';
});

// Set event click thung rac
$('.garbage').addEventListener('click', () => {
    let check = confirm("Bạn có chắn bỏ món ăn đang nấu ?");
    if (check) {
        $('.btn-off').click();
        timeCooked = 0;
        $('.time-cook').innerText = timeCooked;
        $('.oven-time').style.opacity = 0;
        $('.plate-food').setAttribute('src','');
        $('.plate-food').style.display = 'none';
        isCooking = false;
        resetQuantityFood();
    } 
});

// Reset nguyen lieu
function resetQuantityFood() {
    allQuantityFood.forEach(element =>{
        element.innerText = 0
    });
}