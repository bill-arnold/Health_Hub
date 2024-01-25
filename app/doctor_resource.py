from flask_restful import Resource, reqparse
from models import db, Doctor
from schema import DoctorSchema
from flask import jsonify

doctor_schema = DoctorSchema()
doctors_schema = DoctorSchema(many=True)

class DoctorResource(Resource):
    def get(self, doctor_id):
        doctor = Doctor.query.get_or_404(doctor_id)
        return jsonify(doctor_schema.dump(doctor))

    def put(self, doctor_id):
        doctor = Doctor.query.get_or_404(doctor_id)
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str)
        parser.add_argument('specialization', type=str)
        parser.add_argument('contact_number', type=int)
        parser.add_argument('experience', type=str)
        parser.add_argument('location', type=str)
        parser.add_argument('experienc_years', type=str)
        args = parser.parse_args()

        # Update doctor attributes
        doctor.name = args['name'] or doctor.name
        doctor.specialization = args['specialization'] or doctor.specialization

        db.session.commit()
        return jsonify(doctor_schema.dump(doctor))

    def delete(self, doctor_id):
        doctor = Doctor.query.get_or_404(doctor_id)
        db.session.delete(doctor)
        db.session.commit()
        return '', 204

class DoctorsResource(Resource):
    def get(self):
        doctors = Doctor.query.all()
        return jsonify(doctors_schema.dump(doctors))

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('specialization', type=str, required=True)
        args = parser.parse_args()

        new_doctor = Doctor(
            name=args['name'],
            specialization=args['specialization']
        )

        db.session.add(new_doctor)
        db.session.commit()
        return jsonify(doctor_schema.dump(new_doctor)), 201
