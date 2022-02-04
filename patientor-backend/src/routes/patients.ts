/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatient from '../utils';

const router = express.Router();


router.get('/', (_req, res) => {
  res.send(patientsService.getPatients());
});

router.get('/:id', (req, res) => {
  res.send(patientsService.getPatientById(req.params.id));
});
router.post('/', (req, res) => {
  try {
    const { name, dateOfBirth, ssn, gender, occupation } = toNewPatient(req.body);
    const newPatient = patientsService.addPatient({
      name,
      dateOfBirth,
      ssn,
      gender,
      occupation,
      entries: [],
    });
    res.json(newPatient);
  } catch (e) {
    res.status(400).send({ error: (e as Error).message } );
  }
});

export default router;

