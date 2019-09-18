# Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

# Three 1's => 1000 points
# Three 6's => 600 points
# Three 5's => 500 points
# Three 4's => 400 points
# Three 3's => 300 points
# Three 2's => 200 points
# One 1 => 100 points
# One 5 => 50 point

# A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

# Example scoring

# Throw Score

# ---

# 5 1 3 4 1 50 + 2 \* 100 = 250
# 1 1 1 3 1 1000 + 100 = 1100
# 2 4 4 5 4 400 + 50 = 450
# In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.


def score(dice):
    print(dice)
    sum = 0

    for i in range(1, 7):
        if i == 1:
            if dice.count(i) == 3:
                print("1000 points")
                sum += 1000
            elif dice.count(i) > 3:
                sum += 1000 + (dice.count(i) - 3) * 100
            else:
                sum += dice.count(i) * 100
        elif i == 6 and dice.count(i) >= 3:
            print("600 points")
            sum += 600
        elif i == 5:
            if dice.count(i) == 3:
                print("500 points")
                sum += 500
            elif dice.count(i) > 3:
                sum += 500 + (dice.count(i) - 3) * 50
            else:
                sum += dice.count(i) * 50
        elif i == 4 and dice.count(i) >= 3:
            print("400 points")
            sum += 400
        elif i == 3 and dice.count(i) >= 3:
            print("300 points")
            sum += 300
        elif i == 2 and dice.count(i) >= 3:
            print("200 points")
            sum += 200
        else:
            print("0 points")

    print(sum)
    return sum


score([2, 3, 4, 6, 2])
score([4, 4, 4, 3, 3])
score([2, 4, 4, 5, 4])
