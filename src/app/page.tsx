'use client';

import { Title } from '@/components/Title';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { Grainient } from './_components/Grainient';

export default function Home() {
    return (
        <>
            <section>
                <div
                    style={{
                        width: '100%',
                        height: '100vh',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="mx-3 max-w-2xl text-center">
                            <h1 className="mb-8 text-4xl font-semibold md:text-5xl">
                                Um hub colaborativo de
                                <span className="text-teal-200/90"> curadoria digital</span>,
                                projetos e experiências em tecnologia.
                            </h1>

                            <p className="mb-8 text-lg text-white/80">
                                Centraliza indicações, ferramentas, materiais de estudo e apresenta
                                projetos desenvolvidos em conjunto.
                            </p>

                            <div className="flex justify-center gap-2">
                                <Button
                                    className="cursor-pointer gap-2 rounded-lg bg-linear-to-r from-teal-600 to-teal-500 text-white transition-colors duration-300 ease-in-out hover:from-teal-700 hover:to-teal-600"
                                    size="lg"
                                >
                                    Explorar indicações
                                    <ArrowRightIcon size={32} />
                                </Button>

                                <Button
                                    variant="outline"
                                    className="shadow-teal-400-md cursor-pointer rounded-lg border border-teal-600 bg-white text-teal-600 transition-colors duration-300 ease-in-out hover:border-white hover:bg-teal-300/20 hover:text-white"
                                    size="lg"
                                >
                                    Conhecer o Projeto
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-30 flex flex-col justify-center">
                <div className="text-center">
                    <Title text="O que você encontra aqui" />
                    <p className="text-subheading text-lg font-normal">
                        Explore nossas seções e descubra recursos <br /> cuidadosamente
                        selecionados.
                    </p>
                </div>
            </section>
        </>
    );
}
