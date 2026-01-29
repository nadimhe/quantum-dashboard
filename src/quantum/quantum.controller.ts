import { Controller, Get, Query } from '@nestjs/common';
import { QuantumService } from './quantum.service';

@Controller('quantum')
export class QuantumController {
    constructor(private readonly quantumService: QuantumService) {}

    @Get('run')
    async runSimulation(@Query('qubits') qubits: string) {
        const numQubits = parseInt(qubits) || 2;
        // Roep de service aan die je Python script start
        return await this.quantumService.simulate(numQubits);
    }
}