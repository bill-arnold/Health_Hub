from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields
from models import User, Authorization, Doctor, Patient, Symptom, Disease, Appointment


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User

class AuthorizationSchema(SQLAlchemyAutoSchema):
    user = fields.Nested(UserSchema)

    class Meta:
        model = Authorization

class DoctorSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Doctor

class PatientSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Patient

class SymptomSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Symptom

class DiseaseSchema(SQLAlchemyAutoSchema):
        class Meta:
            model = Disease
           
class AppointmentSchema(SQLAlchemyAutoSchema):
    doctor = fields.Nested(DoctorSchema)
    patient = fields.Nested(PatientSchema)
    disease = fields.Nested(DiseaseSchema, exclude=('formatted_name',))
    user = fields.Nested(UserSchema)

    class Meta:
        model = Appointment
