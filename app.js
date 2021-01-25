let count = 0;

const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');


btn.forEach(function(btn){
    btn.addEventListener('click',function(ele){
        let click_list = ele.currentTarget.classList;
        if (click_list.contains('decrease')){
            count--;
        }
        else if (click_list.contains('increase')){
            count++;
        } 
        else{
            count =0;
        }
        if (count < 0){
            value.style.color = 'red';
        }
        if (count > 0){
            value.style.color = 'green';
        }
        if (count === 0){
            value.style.color = 'white';
        }
       value.textContent = count; 
    })
})

