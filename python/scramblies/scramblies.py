def scramble(s1, s2):
    print(s1, s2)

    for i in set(s2):
        if s1.count(i) < s2.count(i):
            print(False)
            return False
    print(True)
    return True


scramble('rkqodlw', 'world')
scramble('cedewaraaossoqqyt', 'codewars')
scramble('katas', 'steak')
scramble('scriptjava', 'javascript')
scramble('scriptingjava', 'javascript')
