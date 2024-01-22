from flask_restful import Resource, reqparse
from models import db, Disease
from schema import DiseaseSchema

disease_schema = DiseaseSchema()
diseases_schema = DiseaseSchema(many=True)

class DiseaseResource(Resource):
    def get(self, disease_id):
        disease = Disease.query.get_or_404(disease_id)
        return disease_schema.dump(disease)

    def put(self, disease_id):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str)
        parser.add_argument('severity', type=str)
        
        args = parser.parse_args()

        disease = Disease.query.get_or_404(disease_id)

        disease.name = args['name'] or disease.name
        disease.severity = args['severity'] or disease.severity

        db.session.commit()

        return disease_schema.dump(disease)

    def delete(self, disease_id):
        disease = Disease.query.get_or_404(disease_id)
        db.session.delete(disease)
        db.session.commit()
        return {'message': 'Disease deleted successfully'}
