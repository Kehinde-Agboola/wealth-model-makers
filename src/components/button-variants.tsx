import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-hero",
        outline: "border border-primary/20 text-primary hover:bg-primary/5",
        ghost: "text-foreground hover:bg-black/5",
      },
      size: {
        default: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export function btn(
  className?: string,
  opts?: VariantProps<typeof buttonVariants>
) {
  return cn(buttonVariants(opts), className);
}
