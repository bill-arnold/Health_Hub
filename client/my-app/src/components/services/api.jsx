// api.js
const API_BASE_URL = 'http://127.0.0.1:5555'; // Replace with your actual backend URL

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

// Get all doctors
export const getDoctors = async () => {
  const response = await fetch(`${API_BASE_URL}/doctors`);
  return handleResponse(response);
};

// Search doctors
export const searchDoctors = async (searchTerm) => {
  const response = await fetch(`${API_BASE_URL}/doctors?search=${searchTerm}`);
  return handleResponse(response);
};

// Get all patients
export const getPatients = async () => {
  const response = await fetch(`${API_BASE_URL}/patients`);
  return handleResponse(response);
};

// Search patients
export const searchPatients = async (searchTerm) => {
  const response = await fetch(`${API_BASE_URL}/patients?search=${searchTerm}`);
  return handleResponse(response);
};

// Get all diseases
export const getDiseases = async () => {
  const response = await fetch(`${API_BASE_URL}/diseases`);
  return handleResponse(response);
};

// Search diseases
export const searchDiseases = async (searchTerm) => {
  const response = await fetch(`${API_BASE_URL}/diseases?search=${searchTerm}`);
  return handleResponse(response);
};

// Get all appointments
export const getAppointments = async () => {
  const response = await fetch(`${API_BASE_URL}/appointments`);
  return handleResponse(response);
};

// Search appointments
export const searchAppointments = async (searchTerm) => {
  const response = await fetch(`${API_BASE_URL}/appointments?search=${searchTerm}`);
  return handleResponse(response);
};

// Add a doctor
export const addDoctor = async (doctorData) => {
  const response = await fetch(`${API_BASE_URL}/doctors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(doctorData),
  });
  return handleResponse(response);
};

// Add a patient
export const addPatient = async (patientData) => {
  const response = await fetch(`${API_BASE_URL}/patients`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patientData),
  });
  return handleResponse(response);
};

// Add a disease
export const addDisease = async (diseaseData) => {
  const response = await fetch(`${API_BASE_URL}/diseases`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(diseaseData),
  });
  return handleResponse(response);
};

// Update a doctor
export const updateDoctor = async (doctorId, updatedData) => {
  const response = await fetch(`${API_BASE_URL}/doctors/${doctorId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  return handleResponse(response);
};

// Update a patient
export const updatePatient = async (patientId, updatedData) => {
  const response = await fetch(`${API_BASE_URL}/patients/${patientId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  return handleResponse(response);
};

// Update a disease
export const updateDisease = async (diseaseId, updatedData) => {
  const response = await fetch(`${API_BASE_URL}/diseases/${diseaseId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  return handleResponse(response);
};

// Delete a doctor
export const deleteDoctor = async (doctorId) => {
  const response = await fetch(`${API_BASE_URL}/doctors/${doctorId}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

// Other API functions can be added as needed
