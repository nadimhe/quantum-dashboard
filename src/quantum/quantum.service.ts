import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class QuantumService {
    async simulate(qubits: number): Promise<any> {
        return new Promise((resolve) => {
            // Gebruik 'python' of 'python3' afhankelijk van je systeem
            const process = spawn('python', ['quantum_engine.py', qubits.toString()]);

            process.stdout.on('data', (data) => {
                try {
                    resolve(JSON.parse(data.toString()));
                } catch (e) {
                    resolve({ error: "Parsing error" });
                }
            });
        });
    }
}