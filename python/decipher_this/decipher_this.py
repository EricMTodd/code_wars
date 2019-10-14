import re


def decipher_this(string):
    print(string)

    ints = re.findall(r'\d+', string)
    print(ints)

    chars = []

    for i in ints:
        i = int(i)
        i = chr(i)
        chars.append(i)

    print(chars)


decipher_this("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")
decipher_this("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")
decipher_this("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare")
decipher_this("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")
decipher_this("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")
