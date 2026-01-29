import { QuantumService } from './quantum.service';
export declare class QuantumController {
    private readonly quantumService;
    constructor(quantumService: QuantumService);
    runSimulation(qubits: string): Promise<any>;
}
