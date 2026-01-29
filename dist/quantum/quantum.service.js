"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantumService = void 0;
const common_1 = require("@nestjs/common");
const child_process_1 = require("child_process");
let QuantumService = class QuantumService {
    async simulate(qubits) {
        return new Promise((resolve) => {
            const process = (0, child_process_1.spawn)('python', ['quantum_engine.py', qubits.toString()]);
            process.stdout.on('data', (data) => {
                try {
                    resolve(JSON.parse(data.toString()));
                }
                catch (e) {
                    resolve({ error: "Parsing error" });
                }
            });
        });
    }
};
exports.QuantumService = QuantumService;
exports.QuantumService = QuantumService = __decorate([
    (0, common_1.Injectable)()
], QuantumService);
//# sourceMappingURL=quantum.service.js.map