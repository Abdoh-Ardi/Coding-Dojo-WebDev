


def biggieSize(numList):
    for x in range(len(numList)):
        if(numList[x]>0):
            numList[x]="big"
    return numList



def countPositives(numList):
    count=0
    for x in numList:
        if x>0:
            count=count+1
    numList.append(count)
    return numList

def sumTotal(numList):
    sum=0
    for x in numList:
        sum+=x
    return sum

def average(numList):
    if len(numList)==0:
        return False
    sum=0
    for x in numList:
       sum+=x
    return sum/len(numList) 

def length(numList):
    return len(numList)
def mini(numList):
    if len(numList)==0:
        return False
    small=99999999
    for x in numList:
        if(x<small):
            small = x
    return small

def max(numList):
    if len(numList)==0:
        return False
    big=-99999999
    for x in numList:
        if(x>big):
            big = x
    return big

def ultimateAnalysis(numList):
    tempDict = {
        'sumTotal':0,
        'average':0,
        'minimum':99999999999,
        'maximum':-99999999999,
        'length':0
    }
    tempDict['sumTotal'] = sumTotal(numList)
    tempDict['average'] = average(numList)
    tempDict['minimum'] = mini(numList)
    tempDict['maximum'] = max(numList)
    tempDict["length"] = length(numList)
    return tempDict

def reverseList(numList):
    tempList = []
    for x in range(len(numList)-1,-1,-1):
        tempList.append(numList[x])
    return tempList


print(biggieSize([-1,1,2,3,4,5]))
print(countPositives([1,6,-4,-2,-7,-2]))
print(sumTotal([6,3,-2]))
print(average([1,2,3,4]))
print(length([1,2,3,4]))
print(length([]))
print(mini([1,2,3,4,5,6,-9]))
print(max([1,2,3,4,5,6,-9]))
print( ultimateAnalysis([37,2,1,-9]))
print(reverseList([-9,1,2,37]))

