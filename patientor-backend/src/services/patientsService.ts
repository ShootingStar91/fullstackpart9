/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {v1 as uuid} from 'uuid';
import patientData from '../../data/patients';
import { Patient, NewPatient, CensoredPatient } from '../types';
const patients: Array<Patient> = patientData;

const getPatientById = (id: string): Patient | undefined => {
  const patient = patients.find(patient => patient.id === id);
  return patient;
};

const getPatients = (): Array<CensoredPatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation}) => {
    return {
      id, name, dateOfBirth, gender, occupation
    };
  });
};

const addPatient = (newPatient: NewPatient) : Patient => {
  const id: string = uuid();
    const newReadyPatient = {
      id: id,
      ...newPatient
    };
    patients.push(newReadyPatient);
    return newReadyPatient;
};

export default {
  getPatientById,
  getPatients,
  addPatient
};
