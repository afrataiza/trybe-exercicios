document.getElementById('header-container').style.backgroundColor = 'green';

let emergencyTasks = document.getElementsByClassName('emergency-tasks');
emergencyTasks[0].style.backgroundColor = 'pink';

let h3Emergency = document.querySelectorAll('.h3-emergency');
for (index = 0; index < h3Emergency.length; index += 1) {
    h3Emergency[index].style.backgroundColor = 'purple';
}

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
noEmergencyTasks[0].style.backgroundColor = 'yellow';

let h3NoEmergency = document.querySelectorAll('.h3-no-emergency');
for (index = 0; index < h3NoEmergency.length; index += 1) {
    h3NoEmergency[index].style.backgroundColor = 'black';
}

document.getElementById('footer-container').style.backgroundColor = 'seagreen';
