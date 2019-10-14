import re


def decipher_this(string):
    print(string)

    result = ''.join([i for i in string if not i.isdigit()])
    result = result.split(' ')
    print(f'result: {result}')
    for i in result:
        if i != "":
            i[0], i[-1] = i[-1], i[0]
            # print(i[0], i[-1])
    print(f'result: {result}')

    ints = re.findall(r'\d+', string)
    print(f'ints: {ints}')

    chars = []

    for i in ints:
        i = int(i)
        i = chr(i)
        chars.append(i)

    print(f'chars: {chars}')

    for i in chars:
        print(f'i: {i}')
        index = chars.index(i)
        print(f'result[index]: {result[index]}')
        new_str = i + result[index]
        print(f'new_str: {new_str}')


decipher_this("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")
decipher_this("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")
decipher_this("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare")
decipher_this("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")
decipher_this("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")
