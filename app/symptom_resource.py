from flask_restful import Resource, reqparse
from models import db, Symptom
from schema import SymptomSchema

symptom_schema = SymptomSchema()
symptoms_schema = SymptomSchema(many=True)

class SymptomResource(Resource):
    def get(self, symptom_id):
        symptom = Symptom.query.get_or_404(symptom_id)
        return symptom_schema.jsonify(symptom)

    def put(self, symptom_id):
        symptom = Symptom.query.get_or_404(symptom_id)
        parser = reqparse.RequestParser()
        parser.add_argument('description', type=str)
        parser.add_argument('severity', type=str)
        args = parser.parse_args()

        # Update symptom attributes
        symptom.description = args['description'] or symptom.description
        symptom.severity = args['severity'] or symptom.severity

        db.session.commit()
        return symptom_schema.jsonify(symptom)

    def delete(self, symptom_id):
        symptom = Symptom.query.get_or_404(symptom_id)
        db.session.delete(symptom)
        db.session.commit()
        return '', 204

class SymptomsResource(Resource):
    def get(self):
        symptoms = Symptom.query.all()
        return symptoms_schema.jsonify(symptoms)

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('description', type=str, required=True)
        parser.add_argument('severity', type=str, required=True)
        args = parser.parse_args()

        new_symptom = Symptom(
            description=args['description'],
            severity=args['severity']
        )

        db.session.add(new_symptom)
        db.session.commit()
        return symptom_schema.jsonify(new_symptom), 201
