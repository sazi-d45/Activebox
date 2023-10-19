
var container = document.getElementById('container')

var heading = document.getElementById('heading')

function responsiveManu(){

    document.getElementById('header-manu').classList.toggle('Active');
}




window.addEventListener('scroll', function(){
    var scrolledAmount = scrollY;
    if(scrolledAmount > 100){
        heading.style.backgroundColor = '#3A3E64';
        container.style.borderBottom = 'none';
    }

    else{
        heading.style.backgroundColor = 'transparent';
        container.style.borderBottom = '1px solid rgba(253, 252, 252 ,0.2)';
    }
})