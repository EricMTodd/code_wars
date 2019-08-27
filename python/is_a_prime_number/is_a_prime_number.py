def is_prime(n):
    if (n <= 1):
        print(n, "is not a prime number")
        return False
    if (n <= 3):
        print(n, "is a prime number")
        return True
    if (n % 2 == 0 or n % 3 == 0):
        print(n, "is not a prime number")
        return False

    i = 5
    while(i * i <= n):
        if (n % i == 0 or n % (i + 2) == 0):
            print(n, "is not a prime number")
            return False
        i = i + 6
    print(n, "is a prime number")
    return True


is_prime(0)
is_prime(1)
is_prime(2)
is_prime(73)
is_prime(75)
is_prime(-1)
is_prime(3)
is_prime(5)
is_prime(7)
is_prime(41)
is_prime(5099)
is_prime(4)
is_prime(6)
is_prime(8)
is_prime(9)
is_prime(45)
is_prime(-5)
is_prime(-8)
is_prime(-41)
