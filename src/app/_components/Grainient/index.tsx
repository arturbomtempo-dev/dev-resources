'use client';

import { useRef } from 'react';
import { DEFAULT_GRAINIENT_VALUES } from './constants/grainient.constants';
import { useWebGLRenderer } from './hooks/useWebGLRenderer';

export interface GrainientProps {
    timeSpeed?: number;
    colorBalance?: number;
    warpStrength?: number;
    warpFrequency?: number;
    warpSpeed?: number;
    warpAmplitude?: number;
    blendAngle?: number;
    blendSoftness?: number;
    rotationAmount?: number;
    noiseScale?: number;
    grainAmount?: number;
    grainScale?: number;
    grainAnimated?: boolean;
    contrast?: number;
    gamma?: number;
    saturation?: number;
    centerX?: number;
    centerY?: number;
    zoom?: number;
    color1?: string;
    color2?: string;
    color3?: string;
    className?: string;
}

export function Grainient({
    timeSpeed = DEFAULT_GRAINIENT_VALUES.timeSpeed,
    colorBalance = DEFAULT_GRAINIENT_VALUES.colorBalance,
    warpStrength = DEFAULT_GRAINIENT_VALUES.warpStrength,
    warpFrequency = DEFAULT_GRAINIENT_VALUES.warpFrequency,
    warpSpeed = DEFAULT_GRAINIENT_VALUES.warpSpeed,
    warpAmplitude = DEFAULT_GRAINIENT_VALUES.warpAmplitude,
    blendAngle = DEFAULT_GRAINIENT_VALUES.blendAngle,
    blendSoftness = DEFAULT_GRAINIENT_VALUES.blendSoftness,
    rotationAmount = DEFAULT_GRAINIENT_VALUES.rotationAmount,
    noiseScale = DEFAULT_GRAINIENT_VALUES.noiseScale,
    grainAmount = DEFAULT_GRAINIENT_VALUES.grainAmount,
    grainScale = DEFAULT_GRAINIENT_VALUES.grainScale,
    grainAnimated = DEFAULT_GRAINIENT_VALUES.grainAnimated,
    contrast = DEFAULT_GRAINIENT_VALUES.contrast,
    gamma = DEFAULT_GRAINIENT_VALUES.gamma,
    saturation = DEFAULT_GRAINIENT_VALUES.saturation,
    centerX = DEFAULT_GRAINIENT_VALUES.centerX,
    centerY = DEFAULT_GRAINIENT_VALUES.centerY,
    zoom = DEFAULT_GRAINIENT_VALUES.zoom,
    color1 = DEFAULT_GRAINIENT_VALUES.color1,
    color2 = DEFAULT_GRAINIENT_VALUES.color2,
    color3 = DEFAULT_GRAINIENT_VALUES.color3,
    className = '',
}: GrainientProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useWebGLRenderer({
        containerRef,
        timeSpeed,
        colorBalance,
        warpStrength,
        warpFrequency,
        warpSpeed,
        warpAmplitude,
        blendAngle,
        blendSoftness,
        rotationAmount,
        noiseScale,
        grainAmount,
        grainScale,
        grainAnimated,
        contrast,
        gamma,
        saturation,
        centerX,
        centerY,
        zoom,
        color1,
        color2,
        color3,
    });

    return (
        <div
            ref={containerRef}
            className={`relative h-full w-full overflow-hidden ${className}`.trim()}
        />
    );
}

export default Grainient;
