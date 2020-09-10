window.addEventListener('load', function () { //все в один блок, т.к. вам же надо получить #obj ?
    //console.log(1);
    /* 
    это не нужно
    dL = 0,
        dT = 0, //обявление dL=dT=0 не работает!
        */
    var O = document.getElementById('obj'),
        X = 0,
        Y = 0,mouseX=0,mouseY=0; //надо  объявлять X/Y здесь, т.к они используются за пределами замыкания обработчика
    window.addEventListener('mousemove', function (ev) {
        ev = window.event || ev; //если window.event определен, то это IE<9, поддерживаем 
        X=ev.pageX;
        Y=ev.pageY;
        /* //всё это не нужно, а если нужно, то неправильно рассчитано, если вых хотите чтобы объект плавно бегал за курсором, то вам нужно просто знак посчитать и прибавлять шаги к X,Y 
        X = O.style.left;
        Y = O.style.top;        
        if (ev.pageX != mouseX) {
            dL = ev.pageX - mouseX;
            X = X + dL;
            mouseX = ev.pageX;
        }
        if (ev.pageY != mouseY) {
            dT = ev.pageY - mouseY;
            Y = Y + dT;
            mouseY = ev.pageY; 
        }*/
    });

    function move() { //зачем аргумент ?
        var p = 'px';
        console.log(X,Y);
        O.style.left = X + p;
        O.style.top = Y + p;
        
        setTimeout(move, 1);
    }
    move();

});