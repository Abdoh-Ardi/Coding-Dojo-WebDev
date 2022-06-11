class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_lion(self, name):
        self.animals.append(Lion(name,10))

    def add_tiger(self, name):
        self.animals.append(Tiger(name,5))

    def add_bear(self, name):
        self.animals.append(Bear(name,5))

    def print_all_info(self):
        print("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.display_info()


class Animal:
    def __init__(self, name, age=2, healthLevel=10, happyLevel=10):
        self.name = name
        self.age = age
        self.healthLevel = healthLevel
        self.happyLevel = happyLevel
    
    def feed(self):
        self.healthLevel+=10
        self.happyLevel+=10
        return self

    def display_info(self):
        print("Name:",self.name,"Health:",self.healthLevel,"Happiness:",self.happyLevel)


class Lion(Animal):
    def __init__(self, name, age=3, healthLevel=20, happyLevel=20):
        super().__init__(name, age, healthLevel, happyLevel)

    def feed(self):
        self.happyLevel+=20
        self.healthLevel+=20
        return self
    


class Tiger(Animal):
    def feed(self):
        self.happyLevel+=15
        self.healthLevel+=15
        return self
    
class Bear(Animal):
    def __init__(self, name, age=3, healthLevel=30, happyLevel=30, color="brown"):
        super().__init__(name, age, healthLevel, happyLevel)
        self.color = color
    
    def feed(self):
        self.happyLevel+=30
        self.healthLevel+=30
        return self

zoo1 = Zoo("John's Zoo")
zoo1.add_lion("Nala")
zoo1.add_lion("Simba")
zoo1.add_tiger("Rajah")
zoo1.add_tiger("Shere Khan")
zoo1.print_all_info()
