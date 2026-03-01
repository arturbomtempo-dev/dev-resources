'use client';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-sm dark:bg-neutral-900">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-teal-400 border-t-transparent"></div>
        </div>
    );
}
