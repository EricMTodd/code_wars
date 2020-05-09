def XO(str)
  str = str.downcase
  x = 0
  o = 0
  str.each_char { |i|
    if i == "x"
      x += 1
    elsif i == "o"
      o += 1
    else
      print
    end 
  }
  
  x == o ? true : false
end

XO('xo')
XO('XO')
XO('xo0')
XO('xxxoo')
XO("xxOo")

### BEST PRACTICE ###

def XO(str)
  str.count('Xx') == str.count('Oo')
end