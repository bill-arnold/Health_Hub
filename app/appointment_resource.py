from flask_restful import Resource, reqparse
from models import db, Appointment
from schema import AppointmentSchema

appointment_schema = AppointmentSchema()
appointments_schema = AppointmentSchema(many=True)

class AppointmentResource(Resource):
    def get(self, appointment_id):
        appointment = Appointment.query.get_or_404(appointment_id)
        return appointment_schema.jsonify(appointment)

    def put(self, appointment_id):
        appointment = Appointment.query.get_or_404(appointment_id)
        parser = reqparse.RequestParser()
        parser.add_argument('doctor_id', type=int)
        parser.add_argument('patient_id', type=int)
        parser.add_argument('disease_id', type=int)
        parser.add_argument('user_id', type=int)
        parser.add_argument('date', type=str)
        args = parser.parse_args()

        # Update appointment attributes
        appointment.doctor_id = args['doctor_id'] or appointment.doctor_id
        appointment.patient_id = args['patient_id'] or appointment.patient_id
        appointment.disease_id = args['disease_id'] or appointment.disease_id
        appointment.user_id = args['user_id'] or appointment.user_id
        appointment.date = args['date'] or appointment.date

        db.session.commit()
        return appointment_schema.jsonify(appointment)

    def delete(self, appointment_id):
        appointment = Appointment.query.get_or_404(appointment_id)
        db.session.delete(appointment)
        db.session.commit()
        return '', 204

class AppointmentsResource(Resource):
    def get(self):
        appointments = Appointment.query.all()
        return appointments_schema.jsonify(appointments)

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('doctor_id', type=int, required=True)
        parser.add_argument('patient_id', type=int, required=True)
        parser.add_argument('disease_id', type=int, required=True)
        parser.add_argument('user_id', type=int, required=True)
        parser.add_argument('date', type=str, required=True)
        args = parser.parse_args()

        new_appointment = Appointment(
            doctor_id=args['doctor_id'],
            patient_id=args['patient_id'],
            disease_id=args['disease_id'],
            user_id=args['user_id'],
            date=args['date']
        )

        db.session.add(new_appointment)
        db.session.commit()
        return appointment_schema.jsonify(new_appointment), 201
