from ctypes import sizeof
from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():

    return render_template('checkerboard.html',size=1,toggle=True)

if __name__ == '__main__':
    app.static_folder = 'static' 
    app.run(debug=True)
 
#  <!-- based on the folder structure on the right -->
# <!-- linking a css style sheet -->
# <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='my_style.css') }}">
# <!-- linking a javascript file -->
# <script type="text/javascript" src="{{ url_for('static', filename='my_script.js') }}"></script>
# <!-- linking an image -->
# <img src="{{ url_for('static', filename='my_img.png') }}">

