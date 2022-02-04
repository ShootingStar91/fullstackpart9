"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const express_1 = __importDefault(require("express"));
const patientsService_1 = __importDefault(require("../services/patientsService"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(patientsService_1.default.getPatients());
});
router.get('/:id', (req, res) => {
    res.send(patientsService_1.default.getPatientById(req.params.id));
});
router.post('/', (req, res) => {
    try {
        const { name, dateOfBirth, ssn, gender, occupation } = (0, utils_1.default)(req.body);
        const newPatient = patientsService_1.default.addPatient({
            name,
            dateOfBirth,
            ssn,
            gender,
            occupation,
            entries: [],
        });
        res.json(newPatient);
    }
    catch (e) {
        res.status(400).send({ error: e.message });
    }
});
exports.default = router;
