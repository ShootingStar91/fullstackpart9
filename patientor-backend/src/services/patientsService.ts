/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {v1 as uuid} from 'uuid';
import patientData from '../../data/patients.json';
import { Patient, NewPatient, CensoredPatient } from '../types';
const patients: Array<Patient> = patientData as Array<Patient>;

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
  getPatients,
  addPatient
};
