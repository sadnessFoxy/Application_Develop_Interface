function calcAverange(score1,score2,score3){
  const res  = Number((score1 + score2 + score3)/3)
  return res
}
function checkWinner(avgDolhins,avgKoalas){
    const check = ""
    if(avgDolhins > (avgKoalas*2)){
     console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`)
    } else if( avgKoalas > (avgDolhins*2)){
     console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    } else{
     console.log("No one win!!!");
     
    }
    
}
const avgDol_1 = calcAverange(1,2,3)
const avgKoa_1 = calcAverange(4,5,6)
const res = checkWinner(avgDol_1,avgKoa_1)

// coding challenge #2
const bills = [125,555,44]
function calcTip(array){
    const tips = []
    for(let i = 0; i<array.length; i++){
      const array_val = array[i]
      const val = array_val >= 50 && array_val <= 300 ? array_val * 0.15 : array_val * 0.2
      tips.push(val)
    }
  return tips
}
const bill_res = calcTip(bills)
console.log(bill_res)

//coding challenge 3
const Mark = {
  fullName : "Mark Miller",
  mass : 78,
  height : 1.69
}
const John = {
  fullName : "John Smith",
  mass : 92,
  height : 1.95
}
function cal_and_print_BMI(person1,person2){
   const BMI1 = person1.mass / person1.height ** 2
   const BMI2 = person2.mass / person2.height ** 2
   const compare  = BMI1 > BMI2
   if(compare){
    console.log(`${person1.fullName} BMI (${BMI1}) is higher than ${person2.fullName} BMI (${BMI2})`)
   } else {
    console.log(`${person2.fullName} BMI (${BMI2}) is higher than ${person1.fullName} BMI (${BMI1})`)
   }
}
cal_and_print_BMI(Mark,John)




// coding challenge 4

const bills_array = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
function calcu_tip(array){
  for(let i=0; i<array.length; i++){
    const tip = array[i] >= 50 && array[i] <= 300 ? array[i] * 0.15 : array[i] * 0.2
    const total = array[i] + tip
    tips.push(tip)
    totals.push(total)
  }
  return  {tips,totals}
}
function calcu_averange(arr){
 let sum = 0
 for (let  i=0; i<arr.length; i++){
   sum += Number(arr[i])
  }
  return sum / arr.length
}

const check = calcu_tip(bills_array)
console.log(check);
const avg_total = calcu_averange(totals)
console.log(avg_total)


