let btn = document.querySelectorAll('.nav__link');
let horaTotal = document.querySelectorAll('.hora__total');
let horaParcial = document.querySelectorAll('.hora__parcial');

btn[0].addEventListener('click', function () {
    btn[0].classList.add('ativo');
    btn[0].classList.remove('inativo');
    btn[1].classList.add('inativo');
    btn[1].classList.remove('ativo');
    btn[2].classList.add('inativo');
    btn[2].classList.remove('ativo');

    horaTotal[0].innerHTML = '5'
    horaParcial[0].innerHTML = 'Day - 7'

    horaTotal[1].innerHTML = '1'
    horaParcial[1].innerHTML = 'Day - 2'

    horaTotal[2].innerHTML = '0'
    horaParcial[2].innerHTML = 'Day - 1'

    horaTotal[3].innerHTML = '1'
    horaParcial[3].innerHTML = 'Day - 1'

    horaTotal[4].innerHTML = '1'
    horaParcial[4].innerHTML = 'Day - 3'

    horaTotal[5].innerHTML = '0'
    horaParcial[5].innerHTML = 'Day - 1'
})

btn[1].addEventListener('click', function () {
    btn[0].classList.add('inativo');
    btn[0].classList.remove('ativo');
    btn[1].classList.add('ativo');
    btn[1].classList.remove('inativo');
    btn[2].classList.add('inativo');
    btn[2].classList.remove('ativo');

    horaTotal[0].innerHTML = '32'
    horaParcial[0].innerHTML = 'Week - 36'

    horaTotal[1].innerHTML = '10'
    horaParcial[1].innerHTML = 'Week - 8'

    horaTotal[2].innerHTML = '4'
    horaParcial[2].innerHTML = 'Week - 7'

    horaTotal[3].innerHTML = '4'
    horaParcial[3].innerHTML = 'Week - 5'

    horaTotal[4].innerHTML = '5'
    horaParcial[4].innerHTML = 'Week - 10'

    horaTotal[5].innerHTML = '2'
    horaParcial[5].innerHTML = 'Week - 2'
})

btn[2].addEventListener('click', function () {
    btn[0].classList.add('inativo');
    btn[0].classList.remove('ativo');
    btn[1].classList.add('inativo');
    btn[1].classList.remove('ativo');
    btn[2].classList.add('ativo');
    btn[2].classList.remove('inativo');

    horaTotal[0].innerHTML = '103'
    horaParcial[0].innerHTML = 'Month - 128'

    horaTotal[1].innerHTML = '23'
    horaParcial[1].innerHTML = 'Month - 29'

    horaTotal[2].innerHTML = '13'
    horaParcial[2].innerHTML = 'Month - 19'

    horaTotal[3].innerHTML = '11'
    horaParcial[3].innerHTML = 'Month - 18'

    horaTotal[4].innerHTML = '21'
    horaParcial[4].innerHTML = 'Month - 23'

    horaTotal[5].innerHTML = '7'
    horaParcial[5].innerHTML = 'Month - 11'
})

