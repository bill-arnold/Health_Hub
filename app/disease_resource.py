from flask_restful import Resource, reqparse, Api
from models import db, Disease
from schema import DiseaseSchema
from flask import jsonify

disease_schema = DiseaseSchema()
diseases_schema = DiseaseSchema(many=True)

class DiseaseResource(Resource):
    def get(self, disease_id):
        disease = Disease.query.get_or_404(disease_id)
        return jsonify(disease_schema.dump(disease))

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
        return jsonify(disease_schema.dump(disease))

    def delete(self, disease_id):
        disease = Disease.query.get_or_404(disease_id)
        db.session.delete(disease)
        db.session.commit()
        return '', 204

class DiseasesResource(Resource):
    def get(self):
        diseases = Disease.query.all()
        return jsonify(diseases_schema.dump(diseases))

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('symptoms_id', type=int, required=True)
        parser.add_argument('treatment', type=str, required=True)
        args = parser.parse_args()

        new_disease = Disease(name=args['name'], symptoms_id=args['symptoms_id'], treatment=args['treatment'])
        db.session.add(new_disease)
        db.session.commit()
        return jsonify(disease_schema.dump(new_disease)), 201
