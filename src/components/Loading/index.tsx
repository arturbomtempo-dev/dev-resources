'use client';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-sm">
            <div className="relative">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-teal-200/30 border-t-teal-600"></div>
                <div
                    className="absolute inset-2 animate-spin rounded-full border-4 border-cyan-100/20 border-b-cyan-500"
                    style={{ animationDirection: 'reverse', animationDuration: '1s' }}
                ></div>
            </div>
        </div>
    );
}
