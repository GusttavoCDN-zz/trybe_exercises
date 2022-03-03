// Calculo de salario liquido

const salary = 3000;

let INSS = 0
let IR = 0

if (salary <= 1556.94) {
    INSS = salary * 0.08;
} else if (salary <= 2594.92) {
    INSS = salary * 0.09;
} else if (salary <= 5189.82) {
    INSS = salary * 0.11;
} else {
    INSS = 570.88;
}

let salaryDeducted = salary - INSS;

if (salaryDeducted <= 1903.98) {
    IR = 0;
} else if (salaryDeducted <= 2826.65) {
    IR = (salaryDeducted * 0.075) - 142.80;
} else if (salaryDeducted <= 3751.05) {
    IR = (salaryDeducted * 0.15) - 354.80;
} else if (salaryDeducted <= 4664.68) {
    IR = (salaryDeducted * 0.225) - 636.13;
} else {
    IR = (salaryDeducted * 0.275) - 869.36;
}

let netSalary = salaryDeducted - IR;

console.log(IR)
console.log(INSS)

console.log(netSalary)