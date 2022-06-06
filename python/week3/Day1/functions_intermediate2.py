# Update Values in Dictionaries and Lists
from operator import length_hint


x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# 1: Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0] = 15 
# 2:Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name']="Bryant"
# 3:In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0]="Andres"
# 4:Change the value 20 in z to 30
z[0]['y']=30

print(x)
print(students)
print(sports_directory)
print(z)
# Iterate Through a List of Dictionaries
def iterateDictionary(students):
    for x in students:
        print(x)

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
iterateDictionary(students) 
# Get Values From a List of Dictionaries
def iterateDictionary2(key_name, some_list):
    for x in range(len(some_list)):
        print(some_list[x][key_name])
        
print(iterateDictionary2('first_name', students))
print(iterateDictionary2('last_name', students))

# Iterate Through a Dictionary with List Values
def iteratedict(key,someDict):
    for x in someDict[key]:
        print(x)


def printInfo(some_dict):
    print(str(len(some_dict["locations"]))+" LOCATIONS")
    iteratedict('locations',some_dict)
    print("\n")
    print(str(len(some_dict["instructors"]))+" INSTRUCTORS")
    iteratedict('instructors',some_dict)


dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)
