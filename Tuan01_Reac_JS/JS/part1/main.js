function BMI_caculate (mass,height){
 const BMI = mass / height ** 2
 return BMI
}
document.getElementById("M_btn").onclick = () =>{
    const M_mass = document.getElementById("M_mass").value
    const M_height = document.getElementById("M_height").value
    const M_BMI = BMI_caculate(M_mass,M_height)
    document.getElementById("M_res").value = M_BMI
}
document.getElementById("J_btn").onclick = () =>{
    const J_mass = document.getElementById("J_mass").value
    const J_height = document.getElementById("J_height").value
    const J_BMI = BMI_caculate(J_mass,J_height)
    document.getElementById("J_res").value = J_BMI
}
document.getElementById("compare_btn").onclick = () =>{
    const M_BMI = document.getElementById("M_res").value
    const J_BMI = document.getElementById("J_res").value
    const mark_higher = M_BMI > J_BMI
    const equal_BMI = M_BMI === J_BMI
    if(mark_higher){
        document.getElementById("compare_input").value = `Mark's BMI ${(M_BMI)} is higher than Jack's BMI ${(J_BMI)}`
    }
    else if(equal_BMI){
        document.getElementById("compare_input").value = `Mark's BMI ${(M_BMI)} is equal to Jack's BMI ${(J_BMI)}`
    }
    else{
        document.getElementById("compare_input").value = `Jack's BMI ${(J_BMI)} is higher than Mark's BMI ${(M_BMI)}`
    }
}


// Coding challenge #3

const min_score = 100
document.getElementById("testcase_1_btn").onclick = () =>{
    const dolphins_score = [96, 108, 89]
    const koalas_score = [88, 91, 110]
    const dolphins_sum = dolphins_score.reduce((acc, curr) => acc + curr, 0)
    const dolphins_average =  dolphins_sum/ dolphins_score.length
    const koalas_sum = koalas_score.reduce((acc, curr) => acc + curr, 0)
    const koalas_average = koalas_sum / koalas_score.length
    if(dolphins_average > koalas_average && dolphins_sum >= min_score){
        document.getElementById("testcase_1_res").value = "Dolphins win the trophy"
    }
    else if(dolphins_average < koalas_average && koalas_sum >= min_score){
        document.getElementById("testcase_1_res").value = "Koalas win the trophy"
    }
    else if(dolphins_average == koalas_average && dolphins_sum >= min_score){
        document.getElementById("testcase_1_res").value = "Both win the trophy"
    }
    else{
        document.getElementById("testcase_1_res").value = "No one wins the trophy"
    }
}
document.getElementById("testcase_2_btn").onclick = () =>{
    const dolphins_score = [97, 112, 101]
    const koalas_score = [109, 95, 123]
    const dolphins_sum = dolphins_score.reduce((acc, curr) => acc + curr, 0)
    const dolphins_average =  dolphins_sum/ dolphins_score.length
    const koalas_sum = koalas_score.reduce((acc, curr) => acc + curr, 0)
    const koalas_average = koalas_sum / koalas_score.length
    if(dolphins_average > koalas_average && dolphins_sum >= min_score){
        document.getElementById("testcase_2_res").value = "Dolphins win the trophy"
    }
    else if(dolphins_average < koalas_average && koalas_sum >= min_score){
        document.getElementById("testcase_2_res").value = "Koalas win the trophy"
    }
    else if(dolphins_average == koalas_average && dolphins_sum >= min_score){
        document.getElementById("testcase_2_res").value = "Both win the trophy"
    }
    else{
        document.getElementById("testcase_2_res").value = "No one wins the trophy"
    }
}
document.getElementById("testcase_3_btn").onclick = () =>{ 
    const dolphins_score = [97, 112, 101]
    const koalas_score = [109, 95, 123]
    const dolphins_sum = dolphins_score.reduce((acc, curr) => acc + curr, 0)
    const dolphins_average =  dolphins_sum/ dolphins_score.length
    const koalas_sum = koalas_score.reduce((acc, curr) => acc + curr, 0)
    const koalas_average = koalas_sum / koalas_score.length
    if(dolphins_average > koalas_average && dolphins_sum >= min_score){
        document.getElementById("testcase_3_res").value = "Dolphins win the trophy"
    }
    else if(dolphins_average < koalas_average && koalas_sum >= min_score){
        document.getElementById("testcase_3_res").value = "Koalas win the trophy"
    }
    else if(dolphins_average == koalas_average && dolphins_sum >= min_score){
        document.getElementById("testcase_3_res").value = "Both win the trophy"
    }
    else{
        document.getElementById("testcase_3_res").value = "No one wins the trophy"
    }
}



// coding challenge #4


document.getElementById("tip_btn").onclick = () =>{
    const bill_value = Number(document.getElementById("bill_value").value)
    const tip = Number(bill_value >= 50 && bill_value <= 300 ? bill_value * 0.15 : bill_value*0.2)
    const sum = Number(bill_value + tip)
    document.getElementById("tip_res").innerText = `The bill was ${bill_value}, the tip was ${tip}, and the total value was ${sum}`

}
