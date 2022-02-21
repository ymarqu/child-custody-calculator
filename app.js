const allDayChecks = document.querySelectorAll('.all-day-check');
const forms = document.querySelectorAll('form');
const lockBtn = document.querySelectorAll('.lock-btn');
let totalMinutes = 0;
const hoursInWeek = 168;
let totalPercentage = 0;


for(let allDayCheck of allDayChecks){
allDayCheck.addEventListener('change', (e)=> {
    if(allDayCheck.checked){
    let input = allDayCheck.value;
     disAbleTime(input);
     addFullDay();
}})}

for(let form of forms){
form.addEventListener('submit', (e) => {
    e.preventDefault();
    TimeCalucation(form.startTime.value, form.end.value);
})};

const disAbleTime = (userInputs) => {
    for(let form of forms) {
        if(userInputs === form.name){
         let inputs = form.querySelectorAll("input[type=time]");
         for(let i of inputs){
             i.disabled = true;
         }
        }
    }
}


const TimeCalucation = (time1, time2) => {
    let fullTime = time1.split(':');
    let fullTime2 = time2.split(':');
    let start = new Date(0,0,0,fullTime[0], fullTime[1], 0);
    let end = new Date(0,0,0,fullTime2[0], fullTime2[1], 0);
    let difference = end.getTime() - start.getTime();
    let minutes = (difference / 1000 / 60 / 60);
    totalMinutes = totalMinutes + minutes;
  
}
const addFullDay = () => {
    totalMinutes = totalMinutes + 24;
    calPercentage(totalMinutes);

}

const calPercentage = (time) => {
    let weekPercentage = time * 52.1429;
    totalPercentage = weekPercentage / (365 * 24);
    document.querySelector('.percent').innerHTML = (totalPercentage * 100).toFixed(2);  
}