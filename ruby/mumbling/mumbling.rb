def accum(s)
  count_modifier = 0
  s = s.downcase
  new_string = ""
  complete_string = ""

  puts
  s.each_char do |i|
    count_modifier += 1
    count_modifier.times do
      new_string << i
    end
    new_string = new_string.capitalize
    complete_string << new_string + "-"
    new_string = ""
  end
  complete_string[-1] = ""
  puts complete_string
  complete_string
end

accum("ZpglnRxqenU")
accum("NyffsGeyylB")
accum("MjtkuBovqrU")
accum("EvidjUnokmM")
accum("HbideVbxncC")

### BEST PRACTICE ###

def accum(s)
  s.chars.each_with_index.map{ |c, i| c.upcase + c.downcase * i }.join('-')
end