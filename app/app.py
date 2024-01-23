from flask import Flask
from flask_restful import Api
from user_resource import UserResource, UsersResource
from authorization_resource import AuthorizationResource, AuthorizationsResource
from doctor_resource import DoctorResource, DoctorsResource
from patient_resource import PatientResource, PatientsResource
from disease_resource import DiseaseResource, DiseasesResource
from appointment_resource import AppointmentResource, AppointmentsResource
from symptom_resource import SymptomResource, SymptomsResource  # Added import
from models import db, User, Authorization, Doctor, Patient, Symptom, Disease, Appointment
from flask_migrate import Migrate 

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///health_database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
migrate = Migrate(app, db)
api = Api(app)

# Add API resources here using the resource classes
api.add_resource(UserResource, '/user/<int:user_id>')
api.add_resource(UsersResource, '/users')

api.add_resource(AuthorizationResource, '/authorization/<int:authorization_id>')
api.add_resource(AuthorizationsResource, '/authorizations')

api.add_resource(DoctorResource, '/doctor/<int:doctor_id>')
api.add_resource(DoctorsResource, '/doctors')

api.add_resource(PatientResource, '/patient/<int:patient_id>')
api.add_resource(PatientsResource, '/patients')

api.add_resource(SymptomResource, '/symptom/<int:symptom_id>')  # Added line for Symptom resource
api.add_resource(SymptomsResource, '/symptoms')  # Added line for Symptoms resource

api.add_resource(DiseaseResource, '/disease/<int:disease_id>')
api.add_resource(DiseasesResource, '/diseases')  

api.add_resource(AppointmentResource, '/appointment/<int:appointment_id>')
api.add_resource(AppointmentsResource, '/appointments')

if __name__ == '__main__':
    app.run(debug=True)
