export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
  ssn: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export type CensoredPatient = Omit<Patient, 'ssn'>;
export type NewPatient = Omit<Patient, 'id'>;