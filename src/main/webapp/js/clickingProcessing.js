Rpicked = function(radius) {document.getElementById('myCanvas').addEventListener('click', function(event) {
        const x = event.clientX ;//- this.offsetLeft;
        const y = event.clientY ;//- this.offsetTop;
        alert(`ВЫ ВЫБРАЛИ СМЕРТЬ И X: ${x} И ${y} + РАДИУС: ${radius}` )
        // Отправка координат на сервер для проверки
        checkCoordinates(x, y, radius);
    });
    }
