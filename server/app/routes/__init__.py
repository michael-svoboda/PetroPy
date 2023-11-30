# app/__init__.py

from flask import Flask
from flask_cors import CORS  # Import the CORS extension
from app.routes.user_routes import user_bp
from app.routes.task_routes import task_bp

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True) #enabling CORS for all routes

    # Configuration settings (can be loaded from config.py)
    app.config['SECRET_KEY'] = 'your-secret-key'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # Example for SQLite, change for other databases

    # Initialize any extensions (e.g., SQLAlchemy)
    # db.init_app(app)

    # Register Blueprints
    app.register_blueprint(user_bp, url_prefix='/user')
    app.register_blueprint(task_bp, url_prefix='/task')

    return app
