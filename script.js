
let count=0;
const countE1 =document.getElementById('count');
const addBtn= document.getElementById('add')
const subBtn= document.getElementById('subtract')
const resetBtn= document.getElementById('reset')


addBtn.addEventListener("click",()=>{
    count = count + 1;
    console.log(count)
    countE1.innerText =count;
    
    
    })
    
    subBtn.addEventListener("click",()=>{
        count = count - 1;
        console.log(count)
        countE1.innerText =count;
        
        
        })

        resetBtn.addEventListener("click",()=>{
            count = 0;
            console.log(count)
            countE1.innerText =count;
            
            
            })

        
        