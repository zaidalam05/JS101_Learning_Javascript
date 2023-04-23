let sum = 0 ;
let count = 0 ;
let i = 1;
let avg = 0;
while (i <= 100){
  if ( i % 2 == 0 ){
    count = count + 1
    sum = sum + i ;
  }
   i ++;
}
    avg = sum/count;
    console.log(avg)