function getIDinfo(e) {
    const id = event.target.id;
    const ticket = document.getElementById(id);
    ticket.classList.add('bg-green-300');

    const mainContainer = document.getElementById('item-container');
    const seat = ticket.innerText;
    const price = 550;
    const standardClass = "Economy";

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
    <div>${h1}</div>
    <div>${p}</div>
    <div>${h2}</div>
    </div>

    `

    mainContainer.appendChild(div2);

    console.log(event);
}





function getIDinfo(e) {
    const id = e.target.id;
    const ticket = document.getElementById(id);
    ticket.classList.add('bg-green-300');

    const mainContainer = document.getElementById('item-container');
    const seat = ticket.innerText;
    const price = 550;
    const standardClass = "Economy";

    const div2 = document.createElement('div');
    div2.innerHTML = `
        <div class="flex justify-between items-center">
            <div>${seat}</div>
            <div>${price}</div>
            <div>${standardClass}</div>
        </div>
    `;

    mainContainer.appendChild(div2);

    console.log(e);
}



let grandTotal = parseInt(document.getElementById('grand-total').innerText);
        grandTotal = grandTotal + parseInt(document.getElementById('total-price').innerText);
        const x = document.getElementById('grand-total');
        let totalPayable;
        if(text === 'NEW15'){
            totalPayable = grandTotal - (grandTotal*0.15);
            x.innerText =totalPayable;
        }
        else{
            totalPayable = grandTotal - (grandTotal*0.2);
            x.innerText = totalPayable;
        }