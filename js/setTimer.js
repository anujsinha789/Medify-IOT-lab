let totalHrs = document.getElementById('hr');
let totalMin = document.getElementById('min');
let totalSec = document.getElementById('sec');


let setVal = () => {
    localStorage.setItem('totalHrs',totalHrs.value);
    localStorage.setItem('totalMin',totalMin.value);
    localStorage.setItem('totalSec',totalSec.value);
    console.log(totalSec.value);
};

let submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click' , () => {
    setVal();
    window.document.location = '../html/soundPlayer.html';
});


document.addEventListener('DOMContentLoaded' , function() {
    setVal();
});