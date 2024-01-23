
from app import app, db, User, Authorization, Doctor, Patient, Symptom, Disease, Appointment
from datetime import datetime

with app.app_context():
    # Users data
    users_data = [
        {'username': 'john_doe', 'email': 'john.doe@example.com', 'password': 'password123', 'registration_date': datetime.utcnow()},
        {'username': 'jane_smith', 'email': 'jane.smith@example.com', 'password': 'secret321', 'registration_date': datetime.utcnow()},
        {'username': 'bob_jones', 'email': 'bob.jones@example.com', 'password': 'pass567', 'registration_date': datetime.utcnow()},
        {'username': 'alice_wonder', 'email': 'alice.wonder@example.com', 'password': 'alicepass', 'registration_date': datetime.utcnow()},
        {'username': 'charlie_brown', 'email': 'charlie.brown@example.com', 'password': 'brown123', 'registration_date': datetime.utcnow()},
        {'username': 'susan_white', 'email': 'susan.white@example.com', 'password': 'susanpass', 'registration_date': datetime.utcnow()},
        {'username': 'david_black', 'email': 'david.black@example.com', 'password': 'black456', 'registration_date': datetime.utcnow()},
        {'username': 'linda_green', 'email': 'linda.green@example.com', 'password': 'green789', 'registration_date': datetime.utcnow()},
        {'username': 'peter_yellow', 'email': 'peter.yellow@example.com', 'password': 'yellowpass', 'registration_date': datetime.utcnow()},
        {'username': 'emma_red', 'email': 'emma.red@example.com', 'password': 'red123', 'registration_date': datetime.utcnow()},
        # Add more users
    ]

    users = [User(**user_data) for user_data in users_data]
    db.session.add_all(users)
    db.session.commit()
    print("👤 Users seeded!")

    # Authorizations data
    authorizations_data = [
        {'user_id': 1, 'role': 'admin', 'last_login': datetime.utcnow()},
        {'user_id': 2, 'role': 'user', 'last_login': datetime.utcnow()},
        {'user_id': 3, 'role': 'user', 'last_login': datetime.utcnow()},
        {'user_id': 4, 'role': 'user', 'last_login': datetime.utcnow()},
        {'user_id': 5, 'role': 'user', 'last_login': datetime.utcnow()},
        {'user_id': 6, 'role': 'user', 'last_login': datetime.utcnow()},
        {'user_id': 7, 'role': 'user', 'last_login': datetime.utcnow()},
        {'user_id': 8, 'role': 'user', 'last_login': datetime.utcnow()},
        {'user_id': 9, 'role': 'user', 'last_login': datetime.utcnow()},
        {'user_id': 10, 'role': 'user', 'last_login': datetime.utcnow()},
        # Add more authorizations
    ]

    authorizations = [Authorization(**auth_data) for auth_data in authorizations_data]
    db.session.add_all(authorizations)
    db.session.commit()
    print("🔑 Authorizations seeded!")

    # Doctors data
    doctors_data = [
        {'name': 'Dr. Johnson', 'specialization': 'Cardiologist', 'experience_years': 12, 'location': 'City Hospital', 'contact_number': 1234567890},
        {'name': 'Dr. Smith', 'specialization': 'Pediatrician', 'experience_years': 8, 'location': 'Children\'s Clinic', 'contact_number': 9876543210},
        {'name': 'Dr. Davis', 'specialization': 'Dermatologist', 'experience_years': 15, 'location': 'Skin Care Center', 'contact_number': 5551112233},
        {'name': 'Dr. Williams', 'specialization': 'Orthopedic Surgeon', 'experience_years': 20, 'location': 'Bone & Joint Clinic', 'contact_number': 5552223344},
        {'name': 'Dr. Robinson', 'specialization': 'Neurologist', 'experience_years': 18, 'location': 'Brain Care Center', 'contact_number': 5553334455},
        {'name': 'Dr. Martinez', 'specialization': 'Gastroenterologist', 'experience_years': 10, 'location': 'Digestive Health Clinic', 'contact_number': 5554445566},
        {'name': 'Dr. Turner', 'specialization': 'Ophthalmologist', 'experience_years': 15, 'location': 'Eye Care Center', 'contact_number': 5555556677},
        {'name': 'Dr. Murphy', 'specialization': 'Psychiatrist', 'experience_years': 22, 'location': 'Mental Wellness Clinic', 'contact_number': 5556667788},
        {'name': 'Dr. Taylor', 'specialization': 'Obstetrician', 'experience_years': 18, 'location': 'Women\'s Health Center', 'contact_number': 5557778899},
        {'name': 'Dr. Anderson', 'specialization': 'Urologist', 'experience_years': 14, 'location': 'Urology Clinic', 'contact_number': 5558889900},
        # Add more doctors
    ]

    doctors = [Doctor(**doctor_data) for doctor_data in doctors_data]
    db.session.add_all(doctors)
    db.session.commit()
    print("👨‍⚕️ Doctors seeded!")

    # Patients data
    patients_data = [
        {'name': 'John Doe', 'age': 35, 'gender': 'Male', 'contact_number': 5551234567, 'address': 123},
        {'name': 'Jane Doe', 'age': 28, 'gender': 'Female', 'contact_number': 5559876543, 'address': 456},
        {'name': 'Bob Smith', 'age': 45, 'gender': 'Male', 'contact_number': 5555555555, 'address': 789},
        {'name': 'Alice Wonder', 'age': 32, 'gender': 'Female', 'contact_number': 5556666777, 'address': 101},
        {'name': 'Charlie Brown', 'age': 50, 'gender': 'Male', 'contact_number': 5558888999, 'address': 202},
        {'name': 'Susan White', 'age': 40, 'gender': 'Female', 'contact_number': 5552222333, 'address': 303},
        {'name': 'David Black', 'age': 55, 'gender': 'Male', 'contact_number': 5554444555, 'address': 404},
        {'name': 'Linda Green', 'age': 60, 'gender': 'Female', 'contact_number': 5556666777, 'address': 505},
        {'name': 'Peter Yellow', 'age': 28, 'gender': 'Male', 'contact_number': 5557777888, 'address': 606},
        {'name': 'Emma Red', 'age': 25, 'gender': 'Female', 'contact_number': 5559999000, 'address': 707},
        # Add more patients
    ]

    patients = [Patient(**patient_data) for patient_data in patients_data]
    db.session.add_all(patients)
    db.session.commit()
    print("👩‍⚕️ Patients seeded!")

    # Symptoms data
    symptoms_data = [
        {'description': 'Fever', 'severity': 'High'},
        {'description': 'Cough', 'severity': 'Medium'},
        {'description': 'Headache', 'severity': 'Low'},
        {'description': 'Joint Pain', 'severity': 'Medium'},
        {'description': 'Shortness of Breath', 'severity': 'High'},
        {'description': 'Nausea', 'severity': 'Low'},
        {'description': 'Fatigue', 'severity': 'High'},
        {'description': 'Abdominal Pain', 'severity': 'Medium'},
        {'description': 'Vision Problems', 'severity': 'Low'},
        {'description': 'Anxiety', 'severity': 'High'},
        # Add more symptoms
    ]

    symptoms = [Symptom(**symptom_data) for symptom_data in symptoms_data]
    db.session.add_all(symptoms)
    db.session.commit()
    print("😷 Symptoms seeded!")

    # Diseases data
    diseases_data = [
        {'name': 'Flu', 'symptoms_id': 1, 'treatment': 'Rest, fluids, antiviral medications'},
        {'name': 'Common Cold', 'symptoms_id': 2, 'treatment': 'Rest, fluids, over-the-counter medications'},
        {'name': 'Migraine', 'symptoms_id': 3, 'treatment': 'Pain relievers, rest, dark room'},
        {'name': 'Arthritis', 'symptoms_id': 4, 'treatment': 'Medications, physical therapy, joint exercises'},
        {'name': 'Asthma', 'symptoms_id': 5, 'treatment': 'Bronchodilators, inhaled corticosteroids'},
        {'name': 'Indigestion', 'symptoms_id': 6, 'treatment': 'Antacids, lifestyle changes'},
        {'name': 'Chronic Fatigue Syndrome', 'symptoms_id': 7, 'treatment': 'Symptomatic relief, lifestyle changes'},
        {'name': 'Appendicitis', 'symptoms_id': 8, 'treatment': 'Surgery, antibiotics'},
        {'name': 'Glaucoma', 'symptoms_id': 9, 'treatment': 'Eye drops, surgery'},
        {'name': 'Generalized Anxiety Disorder', 'symptoms_id': 10, 'treatment': 'Therapy, medications'},
        # Add more diseases
    ]

    diseases = [Disease(**disease_data) for disease_data in diseases_data]
    db.session.add_all(diseases)
    db.session.commit()
    print("🩺 Diseases seeded!")

    # Appointments data
    appointments_data = [
        {'doctor_id': 1, 'patient_id': 1, 'disease_id': 1, 'user_id': 1, 'date': datetime.utcnow()},
        {'doctor_id': 2, 'patient_id': 2, 'disease_id': 2, 'user_id': 2, 'date': datetime.utcnow()},
        {'doctor_id': 3, 'patient_id': 3, 'disease_id': 3, 'user_id': 3, 'date': datetime.utcnow()},
        {'doctor_id': 4, 'patient_id': 4, 'disease_id': 4, 'user_id': 4, 'date': datetime.utcnow()},
        {'doctor_id': 5, 'patient_id': 5, 'disease_id': 5, 'user_id': 5, 'date': datetime.utcnow()},
        {'doctor_id': 6, 'patient_id': 6, 'disease_id': 6, 'user_id': 6, 'date': datetime.utcnow()},
        {'doctor_id': 7, 'patient_id': 7, 'disease_id': 7, 'user_id': 7, 'date': datetime.utcnow()},
        {'doctor_id': 8, 'patient_id': 8, 'disease_id': 8, 'user_id': 8, 'date': datetime.utcnow()},
        {'doctor_id': 9, 'patient_id': 9, 'disease_id': 9, 'user_id': 9, 'date': datetime.utcnow()},
        {'doctor_id': 10, 'patient_id': 10, 'disease_id': 10, 'user_id': 10, 'date': datetime.utcnow()},
        # Add more appointments
    ]

    appointments = [Appointment(**appointment_data) for appointment_data in appointments_data]
    db.session.add_all(appointments)
    db.session.commit()
    print("📅 Appointments seeded!")

    print("🌱 Database seeding completed!")
