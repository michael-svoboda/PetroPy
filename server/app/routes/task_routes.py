# app/routes/task_routes.py

from flask import Blueprint, jsonify, request
from .appParser import AppParser

task_bp = Blueprint('task', __name__)

@task_bp.route('/tasks', methods=['GET'])
def get_tasks():
    # Your implementation for getting tasks
    return jsonify({'tasks': []})


# app/routes/task_routes.py

from flask import Blueprint, request, jsonify

task_bp = Blueprint('task', __name__)

@task_bp.route('/user_input', methods=['POST', 'OPTIONS'])
def receive_content():
    if request.method == 'OPTIONS':
        # Handle preflight request
        response = jsonify({'message': 'Preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response, 200
    elif request.method == 'POST':
        data = request.get_json()

        # Print the received data for debugging
        print('Received data:', data)

        parser = AppParser(data)
        parser.parse()
        latx_eq = parser.parsed_solution

        return jsonify({'latex_string':latx_eq}), 200



        return jsonify({'message': 'Content received successfully'}), 200
