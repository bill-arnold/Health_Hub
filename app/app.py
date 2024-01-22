from flask import Flask
from flask_restful import Api
from resources.user_resource import UserResource, UsersResource
from resources.authorization_resource import AuthorizationResource, AuthorizationsResource
from resources.doctor_resource import DoctorResource, DoctorsResource
from resources.patient_resource import PatientResource, PatientsResource
from resources.disease_resource import DiseaseResource, DiseasesResource
from resources.doctor_patient_resource import DoctorPatientResource, DoctorPatientsResource
from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///health_database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
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

api.add_resource(DiseaseResource, '/disease/<int:disease_id>')
api.add_resource(DiseasesResource, '/diseases')

api.add_resource(DoctorPatientResource, '/doctorpatient/<int:dp_id>')
api.add_resource(DoctorPatientsResource, '/doctorpatients')

if __name__ == '__main__':
    app.run(debug=True)
