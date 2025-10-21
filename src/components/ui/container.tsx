import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({
    children,
    className,
    size = "lg",
}: ContainerProps) {
    const sizeClasses = {
        sm: "max-w-3xl",
        md: "max-w-4xl",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full",
    };

    return (
        <div
            className={cn(
                "mx-auto px-4 sm:px-6 lg:px-8",
                sizeClasses[size],
                className
            )}
        >
            {children}
        </div>
    );
}

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    spacing?: "sm" | "md" | "lg" | "xl";
    background?: "default" | "muted" | "accent";
    id?: string;
}

export function Section({
    children,
    className,
    spacing = "lg",
    background = "default",
    id,
}: SectionProps) {
    const spacingClasses = {
        sm: "py-12 sm:py-16",
        md: "py-16 sm:py-20",
        lg: "py-20 sm:py-24",
        xl: "py-24 sm:py-32",
    };

    const backgroundClasses = {
        default: "bg-white",
        muted: "bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50",
        accent: "bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50",
    };

    return (
        <section
            id={id}
            className={cn(
                spacingClasses[spacing],
                backgroundClasses[background],
                className
            )}
        >
            {children}
        </section>
    );
}
