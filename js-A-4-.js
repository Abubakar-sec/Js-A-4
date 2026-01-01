
// Q1.Find the Product.all value price
let multiples = [1,2,3,4,5]
let reduces = multiples.reduce((acc,cv)=>{
    return acc*cv
})
console.log(reduces);

//Q2.Find the Sum. 
let arrsum = [3,5,9,4,8,5,2,1,5]
let maps = arrsum.reduce((acc,cv)=>{
    return acc+cv
})
console.log(maps);

//Q3 Count Occurrences 
let intigervalue = [1,2,5,3,6,4,1,5,2,3,4,1,6,2]
let intigerserch = 2
let stordata = 0
for (let i = 0; i < intigervalue.length; i++) {
    if (intigervalue[i]===intigerserch) {
        stordata++
    }
}
console.log(stordata);

// Q4.Even Odd
let evenOddmix = [22,5,1,8,7,3,5,1,4,88,31,12]
let even = []
let odds = []
for (let i = 0; i < evenOddmix.length; i++) {
    if (evenOddmix[i]%2===0) {
        even.push(evenOddmix[i])
    }else{
        odds.push(evenOddmix[i])
    }
}
console.log(even,'Even');
console.log(odds,'Odds');

//Q5.Find the number is present or not present in array
let fewvalues = [1,2,3,4]
let chackinnumbers = 5
if (fewvalues.includes(chackinnumbers)) {
    console.log(true);
}else{
    console.log(false);
}

//Q6.Higher Age 
let logins = (a)=>{
    let resullogin = []
    for (let i = 0; i < a.length; i++) {
        if (a[i]>=18) {
            resullogin.push(a[i])
        }
        return resullogin
    }
}
let peramiter=logins([15,24,1,5,24,15,64,28])
console.log(peramiter);