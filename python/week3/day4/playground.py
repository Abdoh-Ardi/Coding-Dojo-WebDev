from flask import Flask, render_template
app = Flask(__name__)
@app.route('/play')
def play():
    return render_template('play.html',times=3,color= "lightblue") #default value
@app.route('/play/<times>')
def playRepeat(times):
    return render_template("play.html",times=int(times))

@app.route('/play/<times>/<color>')
def playRepeatColor(times,color):
    return render_template("play.html",times=int(times),color=color)

if __name__ == '__main__':
    # app.static_folder = 'templates'
    app.run(debug=True)
 