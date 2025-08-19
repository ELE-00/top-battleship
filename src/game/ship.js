
function ship(shiplength){

    let hits = 0;

    function hit(){
        hits++
    }
    
    function isSunk(){
        return hits >= shiplength;
    }

    return { hit, isSunk };

};

export default ship;

