for (var i=1; i<=100; i++) {
    a = ''
    if (i % 3 == 0) a = 'Fizz'
    if (i % 5 == 0) a += 'Buzz'
    if (a == '') console.log(i) else console.log(a)
}
