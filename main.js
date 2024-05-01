$(document).ready(function () {
    
    $('.container2').hide();

    $('form').on('submit', function(e) {
    e.preventDefault();

    $('.container2').show();

    let nameAct = $('#nameAct').val();
    let desc = $('textarea').val();
    let date = new String();
    date = $('#date').val();

    let day = date[8]+=date[9];
    let month = date[5]+=date[6];
    let year = date[0]+=date[1]+=date[2]+=date[3];
    let split = "/"
    let formatDate = day+=split+=month+=split+=year;

    let newlin = $(`<li id="newlin" style="display: none">Atividade: ${nameAct} | Data limite: ${formatDate} | Descrição: ${desc} <button id="linBtn" onClick = "clear()">Done ✔</button> </li>`).appendTo($('#lin'))
    $(newlin).slideDown(); 

    $('#nameAct').val('');
    $('#date').val('');
    $('textarea').val('');

    })

    $('ul').on("click", "li button", e => $(e.target).closest('li').slideUp().remove(5000));

})