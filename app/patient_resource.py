from flask_restful import Resource, reqparse
from models import db, Patient
from schema import PatientSchema

patient_schema = PatientSchema()
patients_schema = PatientSchema(many=True)

class PatientResource(Resource):
    def get(self, patient_id):
        patient = Patient.query.get_or_404(patient_id)
        return patient_schema.jsonify(patient)

    def put(self, patient_id):
        patient = Patient.query.get_or_404(patient_id)
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str)
        parser.add_argument('age', type=int)
        parser.add_argument('gender', type=str)
        parser.add_argument('contact_number', type=int)
        parser.add_argument('address', type=str)
        args = parser.parse_args()

        # Update patient attributes
        patient.name = args['name'] or patient.name
        patient.age = args['age'] or patient.age
        patient.gender = args['gender'] or patient.gender
        patient.contact_number = args['contact_number'] or patient.contact_number
        patient.address = args['address'] or patient.address

        db.session.commit()
        return patient_schema.jsonify(patient)

    def delete(self, patient_id):
        patient = Patient.query.get_or_404(patient_id)
        db.session.delete(patient)
        db.session.commit()
        return '', 204

class PatientsResource(Resource):
    def get(self):
        patients = Patient.query.all()
        return patients_schema.jsonify(patients)

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('age', type=int, required=True)
        parser.add_argument('gender', type=str, required=True)
        parser.add_argument('contact_number', type=int, required=True)
        parser.add_argument('address', type=str, required=True)
        args = parser.parse_args()

        new_patient = Patient(name=args['name'], age=args['age'], gender=args['gender'],
                              contact_number=args['contact_number'], address=args['address'])
        db.session.add(new_patient)
        db.session.commit()
        return patient_schema.jsonify(new_patient), 201
