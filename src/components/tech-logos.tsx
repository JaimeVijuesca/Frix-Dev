import { cn } from "../lib/utils";

export function NextJsLogo({ className }: { className?: string }) {
    return (
        <svg
            className={cn("text-black dark:text-white", className)}
            aria-label="Next.js logomark"
            role="img"
            viewBox="0 0 128 128"
        >
            <path
                fill="currentColor"
                d="M64.001 0a64 64 0 1 0 0 128 64 64 0 0 0 0-128Zm23.09 97.449-33.62 3.965V42.718h10.27v44.272l23.35-2.76ZM87.23 29.5a10.13 10.13 0 1 1-20.26 0 10.13 10.13 0 0 1 20.26 0Z"
            ></path>
        </svg>
    );
}

export function TailwindCssLogo({ className }: { className?: string }) {
    return (
        <svg
            className={cn("text-[#38bdf8]", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 154"
            fill="currentColor"
            role="img"
            aria-label="Tailwind CSS logomark"
        >
            <path
                d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.734 2.4 16.667 12.133 24.534 21.333 10.4 12.133 24.4 25.6 42.666 25.6 34.134 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.733-2.4-16.666-12.133-24.533-21.333-10.4-12.133-24.4-25.6-42.667-25.6zM0 76.8C34.133 76.8 55.467 93.867 64 128c-12.8 17.067-27.733 23.467-44.8 19.2-9.733-2.4-16.667-12.133-24.533-21.333C-5.733 113.733-19.733 100.267-38 100.267c-34.133 0-55.467 17.066-64 51.2 12.8-17.067 27.733-23.467 44.8-19.2 9.734 2.4 16.667 12.133 24.534 21.333 10.4 12.134 24.4 25.6 42.666 25.6z"
                transform="translate(82)"
            ></path>
        </svg>
    );
}

export function VercelLogo({ className }: { className?: string }) {
    return (
        <svg
            className={cn("text-black dark:text-white", className)}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-label="Vercel logomark"
            role="img"
        >
            <path d="M16 1.16669L32 28.8334H0L16 1.16669Z"></path>
        </svg>
    );
}
