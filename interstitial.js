var animat = function() {
    var index = 0;
    var positions = [];
    var id;
    var el = document.getElementById('ad');
    for (var i=0; i<=30; i++){
        positions.push(i);
    }
    var run = function(){
        el.style.top = positions[index] + '%';
        index ++;
        if (index === positions.length){
            clearInterval(id);
        }
    }
    id = setInterval(run, 10);
};
