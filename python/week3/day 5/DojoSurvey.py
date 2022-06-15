from crypt import methods
from unittest import result
from flask import Flask, render_template,request,redirect
app = Flask(__name__)


@app.route('/')
def index():


    return render_template('DojoSurvey.html')

@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    name_from_form = request.form['name']
    email_from_form = request.form['email']
    return render_template("result.html", name_on_template=name_from_form, email_on_template=email_from_form)


@app.route("/result", methods=['POST'])
def sumbitInfo():
    pass
if __name__ == '__main__':
    app.run(debug=True)
 