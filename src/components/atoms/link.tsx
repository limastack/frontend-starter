import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { cn } from "@/lib/utils";

const linkVariants = cva("font-normal hover:underline no-underline", {
  variants: {
    variant: {
      default: "text-blue-700 hover:text-blue-500",
      danger: "text-red-700 hover:text-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LinkProps
  extends NextLinkProps,
  VariantProps<typeof linkVariants> {
  className?: string;
  children: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, ...props }, ref) => {

    return (
      <NextLink
        className={cn(linkVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {props.children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export { Link, linkVariants }
