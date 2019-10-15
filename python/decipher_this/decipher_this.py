import re


def decipher_this(string):
    print(f'string: {string}')
    cleaned_string = ''.join([i for i in string if not i.isdigit()])
    cleaned_string = cleaned_string.split(' ')
    swapped_list = []

    for i in cleaned_string:
        if len(i) == 1:
            swapped_list.append(i)
        else:
            new_str = i[-1:] + i[1:-1] + i[:1]
            swapped_list.append(new_str)

    ints = re.findall(r'\d+', string)
    chars = []

    for i in ints:
        i = int(i)
        i = chr(i)
        chars.append(i)

    deciphered_words = []

    for i in range(len(chars)):
        new_str = chars[i] + swapped_list[i]
        deciphered_words.append(new_str)

    solution = " ".join(deciphered_words)
    print(f'solution: {solution}')
    print()
    return solution


decipher_this("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")
decipher_this("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")
decipher_this("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare")
decipher_this("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")
decipher_this("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")
