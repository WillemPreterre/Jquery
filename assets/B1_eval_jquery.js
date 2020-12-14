

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

function exercice5() {
    if ($('.redsquare-controls').hasClass('is-active'));
    $('#shapeCircle').click(function (e) { 
        e.preventDefault();
        $('.square').css('border-radius', '25px')
    })
}

function exercice6() {
    if ($('.redsquare-controls').hasClass('is-active'));
    $('#shapeSquare').click(function (e) { 
        e.preventDefault();
        $('.square').css('border-radius', 'none')
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
    exercice5()
    exercice6()
    jumbotron()
})  