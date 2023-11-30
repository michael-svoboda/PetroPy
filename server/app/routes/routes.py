from flask import Blueprint, jsonify

bp = Blueprint('api', __name__)

@bp.route('/tasks', methods=['GET'])
def get_tasks():
    # Your implementation for getting tasks
    return jsonify({'tasks': []})
