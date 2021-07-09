let add = document.getElementById('add');
let sub = document.getElementById('low');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
    if(integer >=50 ) {
        integer =49;
    }
    integer += 1;
    int.innerHTML = integer; 
   
})

sub.addEventListener('click', function(){
    if(integer <= 0) {
        integer = 1
    }
    integer -= 1;
    int.innerHTML = integer;
   
    
})

