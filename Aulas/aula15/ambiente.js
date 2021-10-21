let num = [5,8,2,9,3]
num[5] = 10
//ou
num.push(10)
num.sort()//deixa os numeros do array em ordem crescente

console.log(`Nosso array tem ${num.length} posiçoes`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)