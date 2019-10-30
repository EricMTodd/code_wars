def parse_int(string):
    numwords = {
        "digits": ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],

        "tens": ["twenty", "thirty", "fourty", "fifty",
                 "sixty", "seventy", "eighty", "ninety"],

        "scales": ["hundred", "thousand", "million", "billion", "trillion"]

    }

    print(numwords)


parse_int('one')
# parse_int('twenty')
# parse_int('two hundred forty-six')
