from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
#from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class User(db.Model):
    __tablename__="user"
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    registration_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

class Authorization(db.Model):
    __tablename__="authorization"
    authorization_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    role = db.Column(db.String(255), nullable=False)
    last_login = db.Column(db.DateTime)

    user = db.relationship('User', backref=db.backref('authorizations', lazy=True))

class Doctor(db.Model):
    __tablename__="doctors"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    specialization = db.Column(db.String(255), nullable=False)
    experience_years = db.Column(db.Integer, nullable=False)
    location = db.Column(db.String(255), nullable=False)
    contact_number = db.Column(db.Integer, nullable=False)

class Patient(db.Model):
    __tablename__="patients"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(50), nullable=False)
    contact_number = db.Column(db.Integer, nullable=False)
    address = db.Column(db.Integer, nullable=False)

class Symptom(db.Model):
    __tablename__="symptoms"
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.Text, nullable=False)
    severity = db.Column(db.String(50), nullable=False)

class Disease(db.Model):
    __tablename__ = "disease"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    symptoms_id = db.Column(db.Integer, db.ForeignKey('symptoms.id'), nullable=False)
    treatment = db.Column(db.Text, nullable=False)

    symptoms = db.relationship('Symptom', backref=db.backref('diseases', lazy=True))
class Appointment(db.Model):
    __tablename__ = "appointment"
    id = db.Column(db.Integer, primary_key=True)
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctors.id'), nullable=False)
    patient_id = db.Column(db.Integer, db.ForeignKey('patients.id'), nullable=False)
    disease_id = db.Column(db.Integer, db.ForeignKey('disease.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    date = db.Column(db.Date, default=datetime.utcnow, nullable=False)


    doctor = db.relationship('Doctor', backref=db.backref('appointments', lazy=True))
    patient = db.relationship('Patient', backref=db.backref('appointments', lazy=True))
    disease = db.relationship('Disease', backref=db.backref('appointments', lazy=True))
    user = db.relationship('User', backref=db.backref('appointments', lazy=True))

