class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, num, *nums):
        # your code here
        self.result += num
        for i in nums:
            self.result += i
        return self
    
    def subtract(self, num, *nums):
        # your code here
        self.result -= num
        for i in nums:
            self.result -= i
        return self
# create an instance:
md = MathDojo()
# to test:
x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)	# should print 5
# run each of the methods a few more times and check the result!
x = md.add(2).result
print(x)
x = md.add(6,7,9).subtract(1,5).result
print(x)
x = md.subtract(9).result
print(x)
x = md.subtract(1,1).result
print(x)
x = md.add(6,7,9).subtract(1,5).result
print(x)

