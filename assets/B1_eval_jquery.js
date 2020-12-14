

function exercice1() {


    $('.custom-control-label').click(function (e) { 
        e.preventDefault();
        
    $('.redsquare-app').removeClass('is-active');
    $(this).addClass('is-active');

         
    $('.redsquare-controls').removeAttr('disabled');
    $(this).attr('disabled');
    });
}

function exercice2() {

}


function exercice3() {
    if ($('.redsquare-controls').hasClass('is-active'));
    $('#scaleUp').click(function (e) { 
        e.preventDefault();
        $('.square').css('widht')
    })
}

function jumbotron() {

    $('.jumbotron a').click(function(event){
        event.preventDefault();
    });

    $('.jumbotron ul').addClass('list-group');
    $('.jumbotron il').addClass('list-group-item');
}

$(function () {
    console.log('Document chargé')
    exercice1()
    exercice2()
    exercice3()
    jumbotron()
})  