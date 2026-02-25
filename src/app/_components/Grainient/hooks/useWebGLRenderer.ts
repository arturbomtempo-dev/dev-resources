import { Mesh, Program, Renderer, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';
import { fragmentShader } from '../shaders/fragment.glsl';
import { vertexShader } from '../shaders/vertex.glsl';
import type { GrainientUniforms } from '../interfaces/grainientUniforms';
import { hexToRgb } from '../utils/hexToRgb';

interface UseWebGLRendererProps extends GrainientUniforms {
    containerRef: React.RefObject<HTMLDivElement | null>;
}

export function useWebGLRenderer({
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
}: UseWebGLRendererProps) {
    useEffect(() => {
        if (!containerRef.current) return;

        const renderer = new Renderer({
            webgl: 2,
            alpha: true,
            antialias: false,
            dpr: Math.min(window.devicePixelRatio || 1, 2),
        });

        const gl = renderer.gl;
        const canvas = gl.canvas as HTMLCanvasElement;

        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.display = 'block';

        const container = containerRef.current;
        container.appendChild(canvas);

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new Float32Array([1, 1]) },
                uTimeSpeed: { value: timeSpeed },
                uColorBalance: { value: colorBalance },
                uWarpStrength: { value: warpStrength },
                uWarpFrequency: { value: warpFrequency },
                uWarpSpeed: { value: warpSpeed },
                uWarpAmplitude: { value: warpAmplitude },
                uBlendAngle: { value: blendAngle },
                uBlendSoftness: { value: blendSoftness },
                uRotationAmount: { value: rotationAmount },
                uNoiseScale: { value: noiseScale },
                uGrainAmount: { value: grainAmount },
                uGrainScale: { value: grainScale },
                uGrainAnimated: { value: grainAnimated ? 1.0 : 0.0 },
                uContrast: { value: contrast },
                uGamma: { value: gamma },
                uSaturation: { value: saturation },
                uCenterOffset: { value: new Float32Array([centerX, centerY]) },
                uZoom: { value: zoom },
                uColor1: { value: new Float32Array(hexToRgb(color1)) },
                uColor2: { value: new Float32Array(hexToRgb(color2)) },
                uColor3: { value: new Float32Array(hexToRgb(color3)) },
            },
        });

        const mesh = new Mesh(gl, { geometry, program });

        const setSize = () => {
            const rect = container.getBoundingClientRect();
            const width = Math.max(1, Math.floor(rect.width));
            const height = Math.max(1, Math.floor(rect.height));
            renderer.setSize(width, height);
            const res = (program.uniforms.iResolution as { value: Float32Array }).value;
            res[0] = gl.drawingBufferWidth;
            res[1] = gl.drawingBufferHeight;
        };

        const resizeObserver = new ResizeObserver(setSize);
        resizeObserver.observe(container);
        setSize();

        let animationFrameId = 0;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            (program.uniforms.iTime as { value: number }).value = (currentTime - startTime) * 0.001;
            renderer.render({ scene: mesh });
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            try {
                container.removeChild(canvas);
            } catch (error) {}
        };
    }, [
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
    ]);
}
