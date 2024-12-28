const dayBars = document.querySelectorAll('.day-bar');
const bars = document.querySelectorAll('.bar');
const totalMonth = document.getElementById('total-month');
let total = 0;
 

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let maxAmount = Math.max(...data.map(item => item.amount));
        dayBars.forEach((element, index) => {
            element.querySelector('.day').textContent = data[index].day;
            element.querySelector('.amount').textContent = '$' + data[index].amount;
            element.querySelector('.bar').style.height = data[index].amount * 2 + 'px';

            // show and hide the amount label above
            showHoverElement(element.querySelector('.bar'), element.querySelector('.amount'));

            if (maxAmount ===  data[index].amount) {
                // change the biggest amount on the chart into another color
                element.querySelector('.bar').style.backgroundColor = 'hsl(186, 34%, 60%)';
                // change the hover color on the chart to this biggest bar
                changeHoverColor(element.querySelector('.bar'));
            }

            total += Number(data[index].amount * 2);
        })


        totalMonth.textContent = '$' + total;
    })
    .catch(error => console.error('Error: ', error));


    // change the color of the bar on hover while keeping the other bars in the same color
    function changeHoverColor(element){
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = '#a3dbe1';
        });
        element.addEventListener('mouseout', () => {
            element.style.backgroundColor = 'hsl(186, 34%, 60%)';
        });
    }

    // show an element while hovering another
    function showHoverElement(element, hideElement) {
        element.addEventListener('mouseover', () => {
            hideElement.style.display = 'block';
        });
        element.addEventListener('mouseout', () => {
            hideElement.style.display = 'none';
        });
    }