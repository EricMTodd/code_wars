def is_square(x)
  puts("\n#{x}")
  root = x ** 0.5
  if x < 0
    false
  elsif x % root == 0
    puts true
    true
  else
    # puts false
    false
  end
end

is_square(25)
is_square(26)
10.times do is_square(rand(100))
end