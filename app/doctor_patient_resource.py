# doctor_patient_resource.py
from flask_restful import Resource, reqparse
from models import db, DoctorPatient
from schema import DoctorPatientSchema

doctor_patient_schema = DoctorPatientSchema()
doctor_patients_schema = DoctorPatientSchema(many=True)

class DoctorPatientResource(Resource):
    def get(self, dp_id):
        doctor_patient = DoctorPatient.query.get_or_404(dp_id)
        return doctor_patient_schema.dump(doctor_patient)

    def put(self, dp_id):
        parser = reqparse.RequestParser()
        parser.add_argument('doctor_id', type=int)
        parser.add_argument('patient_id', type=int)
        parser.add_argument('disease_id', type=int)
        parser.add_argument('user_id', type=int)

        args = parser.parse_args()

        doctor_patient = DoctorPatient.query.get_or_404(dp_id)

        doctor_patient.doctor_id = args['doctor_id'] or doctor_patient.doctor_id
        doctor_patient.patient_id = args['patient_id'] or doctor_patient.patient_id
        doctor_patient.disease_id = args['disease_id'] or doctor_patient.disease_id
        doctor_patient.user_id = args['user_id'] or doctor_patient.user_id

        db.session.commit()

        return doctor_patient_schema.dump(doctor_patient)

    def delete(self, dp_id):
        doctor_patient = DoctorPatient.query.get_or_404(dp_id)
        db.session.delete(doctor_patient)
        db.session.commit()
        return {'message': 'DoctorPatient relationship deleted successfully'}

class DoctorPatientsResource(Resource):
    def get(self):
        doctor_patients = DoctorPatient.query.all()
        return doctor_patients_schema.dump(doctor_patients)

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('doctor_id', type=int, required=True)
        parser.add_argument('patient_id', type=int, required=True)
        parser.add_argument('disease_id', type=int, required=True)
        parser.add_argument('user_id', type=int, required=True)

        args = parser.parse_args()

        new_doctor_patient = DoctorPatient(
            doctor_id=args['doctor_id'],
            patient_id=args['patient_id'],
            disease_id=args['disease_id'],
            user_id=args['user_id']
        )

        db.session.add(new_doctor_patient)
        db.session.commit()

        return doctor_patient_schema.dump(new_doctor_patient), 201
