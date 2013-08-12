for i in 1..100
  if i%3 === 0 then a = 'Fizz' else a ='' end
  if i%5 === 0 then a += 'Buzz' end
  if a === '' then puts i else puts a end
end
