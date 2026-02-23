'use client';

import { ArrowRightIcon } from '@phosphor-icons/react';
import Grainient from './Grainient';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
      <div>
        <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <Grainient
                color1="#1789ba"
                color2="#70a9cd"
                color3="#a7d3ae"
                timeSpeed={3.25}
                colorBalance={0}
                warpStrength={1}
                warpFrequency={0}
                warpSpeed={2}
                warpAmplitude={50}
                blendAngle={0}
                blendSoftness={0.05}
                rotationAmount={500}
                noiseScale={2}
                grainAmount={0.1}
                grainScale={2}
                grainAnimated={false}
                contrast={1.5}
                gamma={1}
                saturation={1}
                centerX={0}
                centerY={0}
                zoom={0.9}
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="max-w-2xl text-center mx-3">
                    <h1 className="mb-8 text-4xl md:text-5xl font-semibold">
                        Um hub colaborativo de  
                        <span className="text-teal-200/90"> curadoria digital</span>, projetos e
                        experiências em tecnologia.
                    </h1>

                    <p className="mb-8 text-lg text-white/80">
                        Centraliza indicações, ferramentas, materiais de estudo e 
                        apresenta projetos desenvolvidos em conjunto.
                    </p>

                    <div className="flex justify-center gap-2">
                      <Button
                        className="gap-2 rounded-lg bg-linear-to-r from-teal-600 to-teal-500 text-white hover:from-teal-700 hover:to-teal-600 cursor-pointer transition-colors duration-300 ease-in-out"
                        size="lg"
                      >
                        Explorar indicações
                        <ArrowRightIcon size={32} />
                      </Button>

                      <Button
                        variant="outline"
                        className="border border-teal-600 rounded-lg bg-white text-teal-600 shadow-teal-400-md hover:bg-teal-300/20 hover:text-white hover:border-white cursor-pointer transition-colors duration-300 ease-in-out"
                        size="lg"
                      >
                        Conhecer o Projeto
                      </Button>
                    </div>
                </div>
            </div>
        </div>
        <p>ola</p>

        </div>
    );
}
