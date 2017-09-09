"""
An example.
"""
from flask import Flask, json
APP = Flask(__name__)

@APP.route('/')
def hello_world():
    """ test function

    """
    return 'Hello World!'

@APP.route('/wheel/move/<direction>/with/<float:speed>')
def move_wheel(direction, speed):
    """ move the wheel

    direction: 'forward' || 'backward' || 'left' || 'right'
    spped: -1 ~ 1

    """
    response_data = {'data': 'The wheel is moving %s with speed %f' % (direction, speed)}
    return json.jsonify(response_data)

if __name__ == '__main__':
    APP.run(debug=True)

