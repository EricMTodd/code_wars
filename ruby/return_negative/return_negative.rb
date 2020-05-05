def makeNegative(num)
  puts
  if num > 0
    puts num
    num -= num*2
    puts num
  end
  num
end

# Test.assert_equals(makeNegative(42), -42)
10.times do makeNegative(rand(-100..100))
end