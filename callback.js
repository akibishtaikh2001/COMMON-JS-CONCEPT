function greeting(greetingHandeler, name) {
    greetingHandeler(name);

}

// const name = 'Halim mama';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo',  memory: '8gb'};

function greetingHandler(name) {
    console.log('Good Morning', name);

}

function greetEvening(name) {
    console.log('Good Evening', name);

}

function greetNight(name) {
    console.log('Good Night', name);

}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom solaiman');
greeting(greetEvening, 'Tom Salman');
greeting(greetNight, 'Rasel');

function submitHandler() {
    console.log('submit button clicked');

}

document.getElementById('btn_submit').addEventListener('click', submitHandler)