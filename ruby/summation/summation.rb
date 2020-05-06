def summation(num)
  puts num
  sum = 0
  for i in (1..num)
    sum += i
  end
  puts sum
  sum
end

summation(rand(100))

### BEST PRACTICE ###

def summation(num)
  (1..num).sum
end

summation(rand(100))
