
function ship(shiplength){

    let hits = 0;

    function hit(){
        hits++
    }
    
    function isSunk(){
        if(hits >= shiplength) return true
    }

    return { hit, isSunk };

};

export default ship;

