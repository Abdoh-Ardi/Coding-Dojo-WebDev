from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World'


@app.route('/dojo')
def dojo():
    return "Dojo"


@app.route('/say/<name>')
def hello(name):
    return "Hi " + name


@app.route('/repeat/<int:number>/<word>')
def repeat(number, word):
    text = ""
    for i in range(int(number)):
        text += word
    return text

@app.errorhandler(404)
def pageNotFound(e):
    return "Sorry! No response. Try again"

if __name__ == "__main__":
    app.run(debug=True)
