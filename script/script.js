function openModal(id){
    document.querySelector('.modal').style.display = "block"
    let date = document.querySelector(`#${id}`).parentNode.querySelector("[class*='date']").innerText;
    let city = document.querySelector(`#${id}`).parentNode.querySelector("[class*='city']").innerText;

    document.querySelector('#staticDate').value = `${city}: ${date}`;
}

function checkModal(){
    let name = document.querySelector('#first-name').value;
    let surname = document.querySelector('#last-name').value;
    let amount = document.querySelector('#tickets-amount').value;
    let email = document.querySelector('#email-input').value;

    if(name && surname && email && amount >= 1){
        document.querySelector('.modal').style.display = "none"
    }
}