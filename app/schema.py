from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        fields = ('user_id', 'username', 'email', 'registration_date')

class AuthorizationSchema(SQLAlchemyAutoSchema):
    class Meta:
        fields = ('authorization_id', 'user_id', 'role', 'last_login')

class DoctorSchema(SQLAlchemyAutoSchema):
    class Meta:
        fields = ('id', 'name', 'specialization', 'experience_years', 'location', 'contact_number')

class PatientSchema(SQLAlchemyAutoSchema):
    class Meta:
        fields = ('id', 'name', 'age', 'gender', 'contact_number', 'address')

class DiseaseSchema(SQLAlchemyAutoSchema):
    class Meta:
        fields = ('id', 'name', 'severity', 'symptoms', 'treatment')

class DoctorPatientSchema(SQLAlchemyAutoSchema):
    class Meta:
        fields = ('id', 'doctor_id', 'patient_id', 'disease_id', 'user_id')

# Additional serialization rules or customization can be added here if needed
