$(document).ready(function () {
    var currentFloor = 2; // переменная где хранится текущий этаж
    var counterUp = $(".counter-up"); // каждый отдельный этаж в SVG
    var counterDown = $(".counter-down"); // кнопка увеличения этажа
    var floorPath = $(".home-image path"); // кнопка уменьшения этажа
    
    // функция при наведении мышкой на этаж 
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); /* удаляем активный класс у этажей */
        currentFloor = $(this).attr('data-floor'); /* получаем значение текущего этажа */ 
        $(".counter").text(currentFloor); /* записываем значение этажа в счетчик */
    });

    counterUp.on("click", function () { /* отслеживаем клик по кнопке вверх */
        if (currentFloor < 18) { /* проверяем значение этажа */
            currentFloor++; /* прибавляем 1 этаж */
            /* форматируем переменную с этажом в 01, а не 1 */
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false })
            $(".counter").text(usCurrentFloor); /* записываем значение этажа в счетчик */
            floorPath.removeClass("current-floor"); /* удаляем активный класс у этажей */
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); /* подсвечиваем текущий этаж */
        }
    });

    counterDown.on("click", function () { /* отслеживаем клик по кнопке вниз */
        if (currentFloor > 2) { /* проверяем значение этажа */
            currentFloor--; /* отнимаем 1 этаж */
            /* форматируем переменную с этажом в 01, а не 1 */
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false })
            $(".counter").text(usCurrentFloor); /* записываем значение этажа в счетчик */
            floorPath.removeClass("current-floor"); /* удаляем активный класс у этажей */
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); /* подсвечиваем текущий этаж */
        }
    });
});

