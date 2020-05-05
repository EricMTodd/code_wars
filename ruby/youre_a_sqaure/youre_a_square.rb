def is_square(x)
  x >= 0 && Math.sqrt(x) % 1 == 0
end

is_square(25)
is_square(26)
10.times do is_square(rand(100))
end