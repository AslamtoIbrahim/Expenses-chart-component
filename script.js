const dayBars = document.querySelectorAll('.day-bar');
const bars = document.querySelectorAll('.bar');
const totalMonth = document.getElementById('total-month');
let total = 0;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        dayBars.forEach((element, index) => {
            element.querySelector('.day').textContent = data[index].day;
            element.querySelector('.amount').textContent = '$' + data[index].amount;
            element.querySelector('.bar').style.height = data[index].amount * 2 + 'px';
            element.querySelector('.bar').addEventListener('click', function () {
                this.classList.toggle('changeColor');
                element.querySelector('.amount').classList.toggle('showAmount');
            })
            total += Number(data[index].amount * 2);
        })

        totalMonth.textContent = '$' + total;
    })
    .catch(error => console.error('Error: ', error));
