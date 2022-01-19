"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const uuid_1 = require("uuid");
const patients_json_1 = __importDefault(require("../../data/patients.json"));
const patients = patients_json_1.default;
const getPatients = () => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
        return {
            id, name, dateOfBirth, gender, occupation
        };
    });
};
const addPatient = (newPatient) => {
    const id = (0, uuid_1.v1)();
    const newReadyPatient = Object.assign({ id: id }, newPatient);
    patients.push(newReadyPatient);
    return newReadyPatient;
};
exports.default = {
    getPatients,
    addPatient
};
