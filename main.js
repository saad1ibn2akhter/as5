let xy = 0;
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

    

    if(ticketNumber <= 4){
        if(ticket.classList.contains('bg-green-300')){
            alert('Sorry !! You cannot buy same ticket twice .');
            mainContainer.removeChild(div2);
            ticketNumber = ticketNumber - 1 ;
            totalSeatNumber = totalSeatNumber - 0;
        }
        ticket.classList.add('bg-green-300');
       
        
    }

    if(ticketNumber === 4){
    
        document.getElementById('apply-button').removeAttribute('disabled');
        // const applyButton = document.getElementById('apply-button');
        // const inputCoupon = document.getElementById('coupon-input');
        // inputCoupon.addEventListener('keyup',function(event){
        //     const coupon = event.target.value;
        //     if(coupon === 'NEW15'){
        //         discount = 330;
        //         document.getElementById('grand-total').innerText = parseInt(document.getElementById('total-price').innerText) - discount;
        //     }
        //     if(coupon === 'Couple20'){
        //         discount = 440;
        //         document.getElementById('grand-total').innerText = parseInt(document.getElementById('total-price').innerText) - discount;
        //     }
            
        // });
    }

    // document.getElementById('apply-button').addEventListener('keyup',function(event){
    //     const inputCoupon = document.getElementById('coupon-input');

    // });
    // const nextButton = document.getElementById('next-button');
    // const numberInput = document.getElementById('number-input').value;
    // console.log(numberInput);
    // const number  = parseInt(numberInput);

    // if(numberInput.length >=1 && ticketNumber >=1){
    //     nextButton.removeAttribute('disabled');
    // }
    
    if(ticketNumber === 5)
    {
        alert('Sorry !! You Cannot buy more than 4 tickets at a time.');
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
    document.getElementById('grand-total').innerText = ticketPrice ;
    document.getElementById('count').innerText = ticketNumber;
    document.getElementById('total-seat').innerText = totalSeatNumber;
    // ticketCount++;
    console.log(event);

    // xy = ticketPrice;
}

// Get the button element
var scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top:1560,
        behavior: "smooth"
    });
});


function getDiscount(){
    // const id = event.target.id;
    // const applyButton = document.getElementById(id);

}

const btn = document.getElementById('apply-button');
btn.addEventListener("click",function(){
    const couponElement = document.getElementById('coupon-input').value;
    console.log(couponElement);

    if(couponElement === "NEW15"){
        document.getElementById('grand-total').innerText = "1870";
    }
    if(couponElement === "Couple20"){
        document.getElementById('grand-total').innerText = "1650";
    }

    // document.getElementById('grand-total').innerText = couponElement;
});
