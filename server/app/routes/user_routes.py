# app/routes/user_routes.py

from flask import Blueprint, jsonify

user_bp = Blueprint('user', __name__)

@user_bp.route('/users', methods=['GET'])
def get_users():
    # Your implementation for getting users
    return jsonify({'users': []})
