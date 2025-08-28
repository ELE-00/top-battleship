
function ship(shiplength, shipName){
    const name = shipName;

    let hits = 0;

    function hit(){
        hits++
        return hits;
    }
    
    function isSunk(){
        if(hits === shiplength){
            return true;
        }else{
            return false;
        }        
    }

    return { hit, isSunk, name};

};

export default ship;

