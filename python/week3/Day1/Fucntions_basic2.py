# Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
# Example: countdown(5) should return [5,4,3,2,1,0]

def countDown(number):
    countDownList=[]
    for x in range(number,-1,-1):
        countDownList.append(x)
    return countDownList



# Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
# Example: print_and_return([1,2]) should print 1 and return 2

def pAndR(numberList):
    print(numberList[0])
    return numberList[1]

# First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
# Example: first_plus_length([1,2,3,4,5]) should return 6 (first value: 1 + length: 5)

def firstPlusLength(valueList):
    return len(valueList)+valueList[0]
    
# Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
# Example: values_greater_than_second([5,2,3,2,1,4]) should print 3 and return [5,3,4]
# Example: values_greater_than_second([3]) should return False

def valuesGreaterThanSecond(valueList):
    tempList=[]
    if len(valueList)<2:
        return False
    for index in range(len(valueList)): # to get index
        if index!= 1 and valueList[index] > valueList[1]:
            tempList.append(valueList[index])
    return tempList

    


# This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
# Example: length_and_value(4,7) should return [7,7,7,7]
# Example: length_and_value(6,2) should return [2,2,2,2,2,2]

def lengthAndValue(size,value):
    tempList=[]
    for x in range(0,size):
        tempList.append(value)
    return tempList





print("countDown")
print(countDown(5))
print("print and return")
print(pAndR([1,3,2]))
print("First Plus Length")
print(firstPlusLength([1,2,3,4]))
print("values greater than second")
print(valuesGreaterThanSecond([1,2,3,4,5]))
print(valuesGreaterThanSecond([5]))
print("length and value")
print(lengthAndValue(3,3))
