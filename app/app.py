from flask import Flask
from flask_restful import Api
from models import db, User, Authorization, Doctor, Patient, Disease, DoctorPatient

from flask_migrate import Migrate
from models import db, User, Authorization, Doctor, Patient, Disease, DoctorPatient
from schema import UserSchema, AuthorizationSchema, DoctorSchema, PatientSchema, DiseaseSchema, DoctorPatientSchema


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///health_database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)  

api = Api(app)

# Add API resources here using the schemas and models

if __name__ == '__main__':
    app.run(debug=True)
