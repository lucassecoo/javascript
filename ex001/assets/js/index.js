const num= []
function teste(){
   for(i=0; i < 10; i++){
    num[i] = window.prompt('digite um numero')
        for(j=0; j < 10; j++){
            if(num[i] !== num[j]){
                console.log(num[i])
            }
        }
   } 
}