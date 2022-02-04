import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Icon, SemanticICONS } from "semantic-ui-react";

import { Patient, Diagnosis } from "../types";
import { apiBaseUrl } from "../constants";
import { useParams } from "react-router-dom";
import { DisplayEntries } from "./DisplayEntries";

const SinglePatientPage = () => {

  const [patient, setPatient] = useState<Patient | null>();
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const { data: newPatient } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        const { data: newDiagnoses } = await axios.get<Diagnosis[]>(
          `${apiBaseUrl}/diagnoses/`
        );
        setPatient(newPatient);
        setDiagnoses(newDiagnoses);
      } catch (e) {
        if (e) {
          if (e instanceof Error) {
            console.error(e || 'Unknown error when fetching patient');
          }
        }
      }
    };
    void fetchPatient();
    
  }, []);


  if (patient === null || patient === undefined) {
    return null;
  }

  let iconName: SemanticICONS;
  if (patient.gender === 'male') {
    iconName = 'mars';
  } else if (patient.gender === 'female') {
    iconName = 'venus';
  } else {
    iconName = 'venus mars';
  }
 
  return (
    <div className="App">
      <Container textAlign="left">
        <h2>{patient.name}</h2>
        <Icon fitted name={iconName} />
      </Container>
      <Container textAlign="left">
        <div>ssn: {patient.ssn}</div>
        <div>occupation: {patient.occupation}</div>
      </Container>
      <Container textAlign="left">
        <DisplayEntries patient={patient} diagnoses={diagnoses} />
      </Container>
    </div>
  );
};




export default SinglePatientPage;