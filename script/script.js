function openModal(id){
    $('.modal').modal('show');
    let date = $(`#${id}`).parent().find("[class*='date']").text();
    let city =  $(`#${id}`).parent().find("[class*='city']").text();
    $('#staticDate').val(`${city}: ${date}`);
}

function checkModal(){
    let name = $('#first-name').val();
    let surname = $('#last-name').val();
    let amount = $('#tickets-amount').val();
    let email = $('#email-input').val();

    if(name && surname && email && amount >= 1){
        $('.modal').modal('hide');
    }
}