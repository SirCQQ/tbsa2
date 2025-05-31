import * as React from "react";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

interface FormFieldWrapperProps {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormFieldWrapper({
  label,
  helperText,
  required = false,
  children,
  className,
}: FormFieldWrapperProps) {
  return (
    <FormItem className={`grid gap-1.5 ${className || ""}`}>
      {label && (
        <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </FormLabel>
      )}
      <FormControl className="h-10">{children}</FormControl>
      <div className="min-h-[20px]">
        {helperText && (
          <FormDescription className="text-xs">{helperText}</FormDescription>
        )}
        <FormMessage className="text-xs" />
      </div>
    </FormItem>
  );
}

export type { FormFieldWrapperProps };
