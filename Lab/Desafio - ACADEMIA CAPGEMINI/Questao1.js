let array = []
function escada(n) {
    for (let i = 0; i < n; i++) {
        array.push(" ".repeat(n-i-1) + "*".repeat(i+1))
    } 
    for (var n of array) {
        console.log(n)
    }
}
/* inicializando função */
escada(6);