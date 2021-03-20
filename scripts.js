const dayElement = document.getElementById('days');
const hourElement = document.getElementById('hours');
const minutesElement = document.getElementById('seconds');
const secondsElement = document.getElementById('minutes');

const bdaydate = new Date( "Mar 25, 2021 00:00:00" );

function countDownForBday() {

    const secondsbwDate = Math.abs((bdaydate.getTime() - new Date().getTime()) / 1000);
    
    const totaldays = Math.floor(secondsbwDate/3600/24);
    const totalhours = Math.floor(secondsbwDate/3600)%24;
    const totalminutes = Math.floor(secondsbwDate)%60;
    const totalseconds = Math.floor(secondsbwDate/60)%60;

    dayElement.innerHTML = timeFormat(totaldays);
    hourElement.innerHTML = timeFormat(totalhours);
    minutesElement.innerHTML = timeFormat(totalminutes);
    secondsElement.innerHTML = timeFormat(totalseconds);

}

function timeFormat(time){
    return time < 10 ? (`0${time}`) : time;
}

function showTimer(){
    document.getElementById('show').style.display='flex';
}
function hideButton(){
    document.getElementById('btn').style.display='none';
}
countDownForBday();

setInterval(countDownForBday,1000);
