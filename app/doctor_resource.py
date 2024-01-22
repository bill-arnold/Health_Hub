# doctor_resource.py
from flask_restful import Resource, reqparse
from models import db, Doctor
from schema import DoctorSchema

doctor_schema = DoctorSchema()
doctors_schema = DoctorSchema(many=True)

class DoctorResource(Resource):
    def get(self, doctor_id):
        doctor = Doctor.query.get_or_404(doctor_id)
        return doctor_schema.dump(doctor)

    def put(self, doctor_id):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str)
        parser.add_argument('specialization', type=str)
        parser.add_argument('experience_years', type=int)
        parser.add_argument('location', type=str)
        parser.add_argument('contact_number', type=int)

        args = parser.parse_args()

        doctor = Doctor.query.get_or_404(doctor_id)

        doctor.name = args['name'] or doctor.name
        doctor.specialization = args['specialization'] or doctor.specialization
        doctor.experience_years = args['experience_years'] or doctor.experience_years
        doctor.location = args['location'] or doctor.location
        doctor.contact_number = args['contact_number'] or doctor.contact_number

        db.session.commit()

        return doctor_schema.dump(doctor)

    def delete(self, doctor_id):
        doctor = Doctor.query.get_or_404(doctor_id)
        db.session.delete(doctor)
        db.session.commit()
        return {'message': 'Doctor deleted successfully'}

class DoctorsResource(Resource):
    def get(self):
        doctors = Doctor.query.all()
        return doctors_schema.dump(doctors)

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('specialization', type=str, required=True)
        parser.add_argument('experience_years', type=int, required=True)
        parser.add_argument('location', type=str, required=True)
        parser.add_argument('contact_number', type=int, required=True)

        args = parser.parse_args()

        new_doctor = Doctor(
            name=args['name'],
            specialization=args['specialization'],
            experience_years=args['experience_years'],
            location=args['location'],
            contact_number=args['contact_number']
        )

        db.session.add(new_doctor)
        db.session.commit()

        return doctor_schema.dump(new_doctor), 201
