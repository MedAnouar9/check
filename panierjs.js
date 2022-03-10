//////////////////////////////////////like btn///////////////////////
console.log(store)
let btnLike = document.getElementsByClassName("fa-heart");
for (let like of btnLike){ 
    like.addEventListener('click', function(){
        if(like.style.color==="gray"){
        like.style.color ='red';
    }else{
        like.style.color="gray"
    }
    })
}

//////////////////////////////////////plus+////////////////////////////
let btnPlus = document.getElementsByClassName("plus");
for (let plus of btnPlus){
    
    plus.addEventListener('click',function(){
         plus.previousElementSibling.innerHTML++;
         totalPrice()
    })
}

//////////////////////////////////////moin-////////////////////////////////
let btnMoin = document.getElementsByClassName("moin");
for (let moin of btnMoin){
    moin.addEventListener('click',function(){
        if(moin.nextElementSibling.innerHTML > 0){
         moin.nextElementSibling.innerHTML--;
         totalPrice()
        }
    })
}

//////////////////////////////////total/////////////////////////////////
function totalPrice(){
    let quantity=document.getElementsByClassName("quantity");
    let totPrice=document.getElementsByClassName("prix");
    let sum = 0;
    for(var i=0; i<totPrice.length; i++){
        sum+=totPrice[i].innerText * quantity[i].innerText
        console.log(sum);
        document.getElementById("totalPrix").innerText=sum;
    }
}

///////////////////////////////remove////////////////////////////
let btnremove = document.getElementsByClassName('remove');
for (let btn of btnremove){
    btn.addEventListener('click',function(){
        btn.parentElement.parentElement.remove();
        totalPrice()
    })
}