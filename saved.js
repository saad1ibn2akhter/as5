
function getIDinfo() {
    const id = event.target.id;
    const ticket = document.getElementById(id);
    // ticket.classList.add('bg-green-300');


    const mainContainer = document.getElementById('item-container');
    const seat = ticket.innerText;
    const price = 550;
    const standardClass = "Economy";

    let ticketCount = document.getElementById('count').innerText;
    let ticketNumber = parseInt(ticketCount);
    ticketNumber = ticketNumber + 1;

    let totalSeat = document.getElementById('total-seat').innerText;
    let totalSeatNumber = parseInt(totalSeat);
    totalSeatNumber = totalSeatNumber - 1;
    
   

    const div = document.createElement('div');
    const h1 = document.createElement('div');
    h1.innerText = seat;
    const p = document.createElement('div'); // Fixed typo here
    p.innerText = price;
    const h2 = document.createElement('div');
    h2.innerText = standardClass;

    // div.appendChild(h1);
    // div.appendChild(p);
    // div.appendChild(h2);
    const div2 = document.createElement('div');
    div2.innerHTML = 
    `
    <div class = "flex justify-between items-center">
    <div>${seat}</div>
    <div>${standardClass}</div>
    <div>${price}</div>
    </div>

    `;
    
    
    mainContainer.appendChild(div2);

    
    
    if(ticketNumber<=4){
        ticket.classList.add('bg-green-300');
    }
    
    
    if(ticketNumber === 4){
        document.getElementById('apply-button').removeAttribute('disabled');
    }
    // const nextButton = document.getElementById('next-button');
    // const numberInput = document.getElementById('number-input').value;
    // console.log(numberInput);
    // const number  = parseInt(numberInput);

    // if(numberInput.length >=1 && ticketNumber >=1){
    //     nextButton.removeAttribute('disabled');
    // }
    
    if(ticketNumber === 5)
    {
        alert('ki koro vai.??');
        ticketNumber = 4;
        mainContainer.removeChild(div2);
        totalSeatNumber =36;
        if (!ticket.classList.contains('bg-green-300')) {
            ticket.classList.add('bg-gray-100');
        }
        
    }

    const nextButton = document.getElementById('next-button');
    const numberInput = document.getElementById('number-input')
    numberInput.addEventListener('keyup',function(event){
        const text = event.target.value;
        if(text.length >= 1 && ticketNumber >= 1){
            nextButton.removeAttribute('disabled');
        }
        else{
            nextButton.setAttribute('disabled');
        }
    });
    
   
    const ticketPrice = ticketNumber*550;
    document.getElementById('total-price').innerText = ticketPrice;
    document.getElementById('count').innerText = ticketNumber;
    document.getElementById('total-seat').innerText = totalSeatNumber;
    // ticketCount++;
    console.log(event);
}

// Get the button element
var scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top:1560,
        behavior: "smooth"
    });
});