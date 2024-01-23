from flask_restful import Resource, reqparse
from models import db, Disease
from schema import DiseaseSchema

disease_schema = DiseaseSchema()
diseases_schema = DiseaseSchema(many=True)

class DiseaseResource(Resource):
    def get(self, disease_id):
        disease = Disease.query.get_or_404(disease_id)
        return disease_schema.jsonify(disease)

    def put(self, disease_id):
        disease = Disease.query.get_or_404(disease_id)
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str)
        parser.add_argument('symptoms_id', type=int)
        parser.add_argument('treatment', type=str)
        args = parser.parse_args()

        # Update disease attributes
        disease.name = args['name'] or disease.name
        disease.symptoms_id = args['symptoms_id'] or disease.symptoms_id
        disease.treatment = args['treatment'] or disease.treatment

        db.session.commit()
        return disease_schema.jsonify(disease)

    def delete(self, disease_id):
        disease = Disease.query.get_or_404(disease_id)
        db.session.delete(disease)
        db.session.commit()
        return '', 204

class DiseasesResource(Resource):
    def get(self):
        diseases = Disease.query.all()
        return diseases_schema.jsonify(diseases)

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('symptoms_id', type=int, required=True)
        parser.add_argument('treatment', type=str, required=True)
        args = parser.parse_args()

        new_disease = Disease(name=args['name'], symptoms_id=args['symptoms_id'], treatment=args['treatment'])
        db.session.add(new_disease)
        db.session.commit()
        return disease_schema.jsonify(new_disease), 201
