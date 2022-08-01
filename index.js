const hourElement = document.getElementById('hour')
const minuteElement = document.getElementById('minutes')
const secondElement = document.getElementById('seconds')
const ampmElement = document.getElementById('am')

function updateClock(){
    //get hours, minutes and seconds from the computer
    // let now = new Date();
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = 'AM'
//check if hours is greater than 12 to be pm
    if (h > 12){
        h=-12
        am = 'PM'
    }

//add 0  if number is single
    h  = h<10 ? "0"+h : h;
    m  = m<10 ? "0"+m : m;
    s  = s<10 ? "0"+s : s;
 
   
//display the elements in html
    hourElement.innerText =h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    ampmElement.innerText = am;

    //call the function after every second
    setTimeout(() => {
        updateClock()
    }, 1000)
}
updateClock()

