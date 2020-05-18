ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.751005, 37.625470],
            zoom: 10,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Создаем многоугольник, используя вспомогательный класс Polygon.
    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [55.906564, 37.532005],
            [55.907768, 37.540044],
            [55.909528, 37.557684],
            [55.910691, 37.568965],
            [55.910981, 37.580764],
            [55.909761, 37.589250],
            [55.905749, 37.603740],
            [55.901744, 37.618815],
            [55.898372, 37.636410],
            [55.896569, 37.652762],
            [55.895406, 37.672633],
            [55.894605, 37.693769],
            [55.894081, 37.699496],
            [55.892542, 37.705025],
            [55.884093, 37.722518],
            [55.869676, 37.750870],
            [55.856531, 37.776300],
            [55.839902, 37.808694],
            [55.830621, 37.827189],
            [55.827528, 37.832068],
            [55.824656, 37.834983],
            [55.820552, 37.837443],
            [55.812852, 37.838962],
            [55.802328, 37.839731],
            [55.792839, 37.840996],
            [55.780873, 37.842304],
            [55.773154, 37.843073],
            [55.765878, 37.843013],
            [55.744308, 37.841576],
            [55.722709, 37.839475],
            [55.715569, 37.838565],
            [55.712965, 37.837577],
            [55.707511, 37.834503],
            [55.699389, 37.830441],
            [55.694800, 37.829233],
            [55.688785, 37.829672],
            [55.679604, 37.833295],
            [55.665431, 37.838642],
            [55.660826, 37.839638],
            [55.657387, 37.839105],
            [55.653947, 37.837183],
            [55.650145, 37.833768],
            [55.641292, 37.820485],
            [55.628085, 37.800198],
            [55.621865, 37.789525],
            [55.615281, 37.777570],
            [55.609058, 37.765936],
            [55.604258, 37.757172],
            [55.598924, 37.746249],
            [55.591429, 37.727144],
            [55.582200, 37.704373],
            [55.573870, 37.681864],
            [55.572055, 37.669874],
            [55.573023, 37.649167],
            [55.574730, 37.622068],
            [55.576086, 37.597117],
            [55.576928, 37.590520],
            [55.581560, 37.571193],
            [55.588215, 37.542677],
            [55.595260, 37.514977],
            [55.597677, 37.508963],
            [55.600729, 37.504224],
            [55.612406, 37.490844],
            [55.624080, 37.476906],
            [55.642033, 37.455803],
            [55.658893, 37.435950],
            [55.664770, 37.430334],
            [55.672951, 37.424196],
            [55.682615, 37.417038],
            [55.690707, 37.413326],
            [55.696376, 37.406636],
            [55.707459, 37.391490],
            [55.711744, 37.387160],
            [55.728172, 37.378416],
            [55.744412, 37.370291],
            [55.753671, 37.368649],
            [55.770279, 37.369021],
            [55.785425, 37.370199],
            [55.794273, 37.376796],
            [55.804636, 37.386098],
            [55.814636, 37.390362],
            [55.834343, 37.395874],
            [55.839781, 37.395317],
            [55.845997, 37.391899],
            [55.850138, 37.392560],
            [55.862943, 37.400365],
            [55.871291, 37.412166],
            [55.877403, 37.430471],
            [55.881861, 37.445211],
        ]
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Многоугольник"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#ffd45860',
        // Ширина обводки.
        strokeWidth: 8,
        // Цвет обводки
        strokeColor: '#ffd458',
        // Тип обводки
        strokeStyle: 'shortdash'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myPolygon);
}

// Change color
// var modal = document.querySelector(".catalog-inner__card-button");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);