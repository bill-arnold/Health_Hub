from app import app, db, User, Authorization, Doctor, Patient, Disease, DoctorPatient
from datetime import datetime

with app.app_context():
    # Diseases data
    diseases = [
        {'name': 'Heart Disease', 'severity': 'High', 'symptoms': 'Chest pain, shortness of breath', 'treatment': 'Medications, lifestyle changes'},
        {'name': 'Common Cold', 'severity': 'Low', 'symptoms': 'Runny nose, cough', 'treatment': 'Rest, fluids, over-the-counter medications'},
        {'name': 'Eczema', 'severity': 'Medium', 'symptoms': 'Itching, redness, inflammation', 'treatment': 'Topical steroids, moisturizers'},
        {'name': 'Fractured Bones', 'severity': 'High', 'symptoms': 'Pain, swelling, inability to move', 'treatment': 'Casting, surgery, physical therapy'},
        {'name': 'Migraine', 'severity': 'Medium', 'symptoms': 'Severe headache, nausea, sensitivity to light', 'treatment': 'Pain relievers, rest'},
        {'name': 'Diabetes', 'severity': 'High', 'symptoms': 'Increased thirst, frequent urination, fatigue', 'treatment': 'Insulin, lifestyle changes'},
        {'name': 'Influenza', 'severity': 'Medium', 'symptoms': 'Fever, chills, muscle aches', 'treatment': 'Antiviral medications, rest'},
        {'name': 'Arthritis', 'severity': 'Medium', 'symptoms': 'Joint pain, stiffness', 'treatment': 'Medications, physical therapy'},
        {'name': 'Asthma', 'severity': 'Medium', 'symptoms': 'Shortness of breath, wheezing', 'treatment': 'Bronchodilators, inhaled steroids'},
        {'name': 'Hypertension', 'severity': 'High', 'symptoms': 'High blood pressure', 'treatment': 'Medications, lifestyle changes'},
        # ... Add more diseases
    ]

    # Seed diseases
    for disease_data in diseases:
        disease = Disease(**disease_data)
        db.session.add(disease)

    db.session.commit()
    print("🩺 Diseases seeded!")

    # Patients data
    patients = [
        {'name': 'John Doe', 'age': 35, 'gender': 'Male', 'contact_number': 5551234567, 'address': 123},
        {'name': 'Jane Doe', 'age': 28, 'gender': 'Female', 'contact_number': 5559876543, 'address': 456},
        {'name': 'Bob Smith', 'age': 45, 'gender': 'Male', 'contact_number': 5555555555, 'address': 789},
        {'name': 'Alice Wonder', 'age': 32, 'gender': 'Female', 'contact_number': 5556666777, 'address': 101},
        {'name': 'Charlie Brown', 'age': 50, 'gender': 'Male', 'contact_number': 5558888999, 'address': 202},
        {'name': 'Susan White', 'age': 40, 'gender': 'Female', 'contact_number': 5552222333, 'address': 303},
        {'name': 'David Black', 'age': 55, 'gender': 'Male', 'contact_number': 5554444555, 'address': 404},
        {'name': 'Linda Green', 'age': 60, 'gender': 'Female', 'contact_number': 5556666777, 'address': 505},
        {'name': 'Peter Yellow', 'age': 38, 'gender': 'Male', 'contact_number': 5558888999, 'address': 606},
        {'name': 'Emma Red', 'age': 25, 'gender': 'Female', 'contact_number': 5551111222, 'address': 707},
        # ... Add more patients
    ]

    # Seed patients
    for patient_data in patients:
        patient = Patient(**patient_data)
        db.session.add(patient)

    db.session.commit()
    print("👩‍⚕️ Patients seeded!")

    # DoctorPatient data
    doctor_patients = [
        {'doctor_id': 1, 'patient_id': 1, 'disease_id': 1, 'user_id': 1},
        {'doctor_id': 2, 'patient_id': 2, 'disease_id': 2, 'user_id': 2},
        {'doctor_id': 3, 'patient_id': 3, 'disease_id': 3, 'user_id': 3},
        {'doctor_id': 4, 'patient_id': 4, 'disease_id': 4, 'user_id': 4},
        {'doctor_id': 5, 'patient_id': 5, 'disease_id': 5, 'user_id': 5},
        {'doctor_id': 6, 'patient_id': 6, 'disease_id': 6, 'user_id': 6},
        {'doctor_id': 7, 'patient_id': 7, 'disease_id': 7, 'user_id': 7},
        {'doctor_id': 8, 'patient_id': 8, 'disease_id': 8,        'user_id': 8},
        {'doctor_id': 9, 'patient_id': 9, 'disease_id': 9, 'user_id': 9},
        {'doctor_id': 10, 'patient_id': 10, 'disease_id': 10, 'user_id': 10},
        # ... Add more doctor_patient relationships
    ]

    # Seed doctor_patients
    for dp_data in doctor_patients:
        doctor_patient = DoctorPatient(**dp_data)
        db.session.add(doctor_patient)

    db.session.commit()
    print("👨‍⚕️👩‍⚕️ DoctorPatient relationships seeded!")

    # Users data
    users = [
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
        # ... Add more users
    ]

    # Seed users
    for user_data in users:
        user = User(**user_data)
        db.session.add(user)

    db.session.commit()
    print("👤 Users seeded!")

    # Authorizations data
    authorizations = [
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
        # ... Add more authorizations
    ]

    # Seed authorizations
    for auth_data in authorizations:
        auth = Authorization(**auth_data)
        db.session.add(auth)

    db.session.commit()
    print("🔑 Authorizations seeded!")

    # Doctors data
    doctors = [
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
        # ... Add more doctors
    ]

    # Seed doctors
    for doctor_data in doctors:
        doctor = Doctor(**doctor_data)
        db.session.add(doctor)

    db.session.commit()
    print("👨‍⚕️ Doctors seeded!")

    print("🌱 Database seeding completed!")

