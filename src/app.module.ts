import { Module, Controller, Get, Res } from '@nestjs/common';
import * as express from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: express.Response) {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuantumFlow | Intelligence OS</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Orbitron:wght@400;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --neon-cyan: #22d3ee;
            --neon-blue: #3b82f6;
            --glass-bg: rgba(10, 15, 28, 0.7);
        }

        body {
            background: #02040a;
            color: #e2e8f0;
            font-family: 'Space Grotesk', sans-serif;
            overflow: hidden;
            height: 100vh;
        }

        /* Ambient Background Glows */
        .glow-1 { position: fixed; top: -10%; left: -10%; width: 50%; height: 50%; background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%); z-index: -1; }
        .glow-2 { position: fixed; bottom: -10%; right: -10%; width: 50%; height: 50%; background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%); z-index: -1; }

        /* The Animated Quantum Grid */
        .quantum-grid {
            position: fixed; inset: 0;
            background-image: 
                linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
            background-size: 60px 60px;
            transform: perspective(1000px) rotateX(60deg) translateY(-200px) translateZ(-500px);
            z-index: -2;
            animation: grid-flow 25s linear infinite;
        }
        @keyframes grid-flow { from { background-position: 0 0; } to { background-position: 0 1000px; } }

        /* Glassmorphism Containers */
        .glass-panel {
            background: var(--glass-bg);
            backdrop-filter: blur(25px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8), inset 0 0 15px rgba(34, 211, 238, 0.05);
            transition: transform 0.3s ease;
        }

        .neon-title {
            font-family: 'Orbitron', sans-serif;
            background: linear-gradient(90deg, #fff, var(--neon-cyan));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
        }

        /* Professional Slider */
        input[type=range] { -webkit-appearance: none; background: transparent; }
        input[type=range]::-webkit-slider-runnable-track { background: rgba(255,255,255,0.05); height: 4px; border-radius: 2px; }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none; height: 16px; width: 16px; border-radius: 50%;
            background: var(--neon-cyan); box-shadow: 0 0 15px var(--neon-cyan); cursor: pointer; margin-top: -6px;
        }

        .execute-btn {
            background: linear-gradient(135deg, var(--neon-cyan) 0%, var(--neon-blue) 100%);
            color: #02040a;
            font-family: 'Orbitron', sans-serif;
            font-weight: 900;
            letter-spacing: 2px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .execute-btn:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 15px 30px rgba(34, 211, 238, 0.4);
        }
    </style>
</head>
<body class="flex items-center justify-center">
    <div class="quantum-grid"></div>
    <div class="glow-1"></div>
    <div class="glow-2"></div>

    <main class="w-[95%] max-w-6xl flex flex-col gap-6">
        <header class="flex justify-between items-end px-4">
            <div>
               
                <p class="text-[10px] tracking-[0.6em] text-cyan-400/60 uppercase mt-1">Experimental Processing Unit</p>
            </div>
            <div class="text-right font-mono text-[10px] text-slate-500">
                STATUS: <span class="text-green-500">ENCRYPTED_LINK_STABLE</span><br>
                UPLINK: 127.0.0.1:5000
            </div>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <section class="lg:col-span-4 flex flex-col gap-6">
                <div class="glass-panel rounded-[2rem] p-8 flex-grow">
                    <h3 class="text-sm font-bold tracking-widest text-slate-400 uppercase mb-10 italic underline decoration-cyan-500/50 underline-offset-8">Configuration</h3>
                    
                    <div class="space-y-12">
                        <div class="relative">
                            <div class="flex justify-between mb-4">
                                <span class="text-xs font-bold text-slate-500 uppercase">Qubit Register</span>
                                <span id="qValue" class="text-cyan-400 font-mono text-lg font-bold">2</span>
                            </div>
                            <input type="range" id="qInput" min="1" max="8" value="2" class="w-full">
                        </div>

                        <button onclick="runSimulation()" id="mainBtn" class="execute-btn w-full py-6 rounded-2xl uppercase text-xs active:scale-95">
                            Engage Simulation
                        </button>
                    </div>
                </div>

                <div class="glass-panel rounded-[2rem] p-6 text-[11px] leading-relaxed text-slate-500 font-mono italic">
                    > Initializing circuit with Hadamard gates...<br>
                    > Entangling qubit pairs...<br>
                    > Monitoring decoherence...
                </div>
            </section>

            <section class="lg:col-span-8">
                <div class="glass-panel rounded-[2.5rem] p-8 h-[550px] relative">
                    <div class="absolute top-6 right-8 flex gap-2">
                        <div class="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div class="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div class="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>
                    
                    <h2 class="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">Probability Distribution Output</h2>
                    <div class="h-[400px]">
                        <canvas id="quantumChart"></canvas>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <script>
        const qInput = document.getElementById('qInput');
        const qValue = document.getElementById('qValue');
        let chart;

        qInput.oninput = (e) => qValue.innerText = e.target.value;

        async function runSimulation() {
            const btn = document.getElementById('mainBtn');
            btn.innerText = "COLLAPSING...";
            btn.style.opacity = "0.7";
            
            try {
                const response = await fetch('http://127.0.0.1:5000/simulate?qubits=' + qInput.value);
                const data = await response.json();
                renderChart(data);
            } catch (err) {
                console.error(err);
                alert("ENGINE OFFLINE: Start PyCharm op poort 5050!");
            } finally {
                btn.innerText = "ENGAGE SIMULATION";
                btn.style.opacity = "1";
            }
        }

        function renderChart(data) {
            const ctx = document.getElementById('quantumChart').getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, '#22d3ee');
            gradient.addColorStop(1, '#3b82f6');

            if(chart) chart.destroy();

            chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(data),
                    datasets: [{
                        data: Object.values(data),
                        backgroundColor: gradient,
                        borderRadius: 20,
                        borderSkipped: false,
                        hoverBackgroundColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: { duration: 1500, easing: 'easeOutElastic' },
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.03)' }, ticks: { color: '#475569' } },
                        x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { family: 'Orbitron', size: 10 } } }
                    }
                }
            });
        }

        window.onload = () => renderChart({"00": 512, "11": 512});
    </script>
</body>
</html>
    `);
  }
}

@Module({ controllers: [AppController] })
export class AppModule {}