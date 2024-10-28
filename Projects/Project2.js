const from = document.querySelector('form');

from.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const reuslts = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        reuslts.innerHTML = `Please Enter Valid Height ${height}`;
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        reuslts.innerHTML = `Please Enter Valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
            reuslts.innerHTML = `<span>${bmi}</span>`;
        
    }
})