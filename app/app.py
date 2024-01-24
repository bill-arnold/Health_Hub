from flask import Flask
from flask_restful import Api
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from user_resource import UserResource, UsersResource, UserLoginResource
from authorization_resource import AuthorizationResource, AuthorizationsResource
from doctor_resource import DoctorResource, DoctorsResource
from patient_resource import PatientResource, PatientsResource
from disease_resource import DiseaseResource, DiseasesResource
from appointment_resource import AppointmentResource, AppointmentsResource
from symptom_resource import SymptomResource, SymptomsResource  # Added import
from models import db, User, Authorization, Doctor, Patient, Symptom, Disease, Appointment
from flask_migrate import Migrate
#from flask_bcrypt import Bcrypt 

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///health_database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = ' sPm4WNol2VMoqikAbWr1EkkG9AyxBOBzDafha9hi5pc'
jwt = JWTManager(app)  
#bcrypt = Bcrypt(app)
db.init_app(app)
migrate = Migrate(app, db)
api = Api(app)


# Add API resources here using the resource classes
api.add_resource(UserResource, '/user/<int:user_id>')
api.add_resource(UsersResource, '/users')
api.add_resource(UserLoginResource, '/login') 

api.add_resource(AuthorizationResource, '/authorization/<int:authorization_id>')
api.add_resource(AuthorizationsResource, '/authorizations')

api.add_resource(DoctorResource, '/doctor/<int:doctor_id>')
api.add_resource(DoctorsResource, '/doctors')

api.add_resource(PatientResource, '/patient/<int:patient_id>')
api.add_resource(PatientsResource, '/patients')

api.add_resource(SymptomResource, '/symptom/<int:symptom_id>')  
api.add_resource(SymptomsResource, '/symptoms')  

api.add_resource(DiseaseResource, '/disease/<int:disease_id>')
api.add_resource(DiseasesResource, '/diseases')  

api.add_resource(AppointmentResource, '/appointment/<int:appointment_id>')
api.add_resource(AppointmentsResource, '/appointments')






if __name__ == '__main__':
    app.run(debug=True)
