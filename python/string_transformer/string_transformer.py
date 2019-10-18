def string_transformer(s):
    print(s)

    lower_case = "abcdefghijklmnopqrstuvwxyz"
    upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    solution = ""

    for i in s:
        if i in lower_case:
            i = i.upper()
            solution += i
        else:
            i = i.lower()
            solution += i

    print(solution)


string_transformer("Example string")
string_transformer("Example Input")
string_transformer("To be OR not to be That is the Question")
string_transformer("")
string_transformer("You Know When  THAT  Hotline Bling")
string_transformer(" A b C d E f G ")
