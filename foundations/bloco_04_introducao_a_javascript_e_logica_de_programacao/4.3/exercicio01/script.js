var n = 5;
var asteriks = "";

for (var linha = 1; linha <= n; linha++) {
    for (var coluna = 1; coluna <= n; coluna++) {
        asteriks += "*";
    }
    asteriks += "\n";
}

console.log(asteriks)