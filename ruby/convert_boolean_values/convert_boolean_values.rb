def bool_to_word(bool)
  bool == true ? bool = "Yes" : bool = "No"
  puts bool
  bool
end

bool_to_word(true)
bool_to_word(false)

### BEST PRACTICE ###

def bool_to_word bool
  bool ? 'Yes' : 'No'
end