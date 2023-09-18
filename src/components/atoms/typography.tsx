import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "font-medium text-black leading-6 tracking-wide",
  {
    variants: {
      variant: {
        h1: "text-4xl leading-10 tracking-normal font-bold",
        h2: "text-3xl leading-10 tracking-normal font-bold",
        h3: "text-2xl leading-8 tracking-normal font-semibold",
        h4: "text-xl leading-8 font-semibold",
        h5: "text-lg",
        h6: "text-base",
        body1: "text-base",
        body2: "text-sm",
        caption: "text-xs",
      },
    },
    defaultVariants: {
      variant: "body1",
    },
  }
);

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : determineComp(variant);
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };

function determineComp(variant: string | undefined | null) {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "body1":
      return "p";
    case "body2":
      return "span";
    case "caption":
      return "p";
    default:
      return "p";
  }
}
