let num = [50, 8, 4]
num[3] = 6
num.push(7)
num.sort()

/*
for (let i = 0; i < 5; i++) {
    console.log(num[i])
}
*/

for (let pos in num) {
    console.log(num[pos])
}

console.log("indice: " + num.indexOf(8))


//console.log(`Nosso vetor é contém ${num}. Comprimento: ${num.length}. Popped = ${n}`)