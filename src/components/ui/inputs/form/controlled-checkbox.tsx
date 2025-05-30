import React from "react";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "@/components/ui/form";
import { FormFieldWrapper } from "@/components/ui/inputs/form-field-wrapper";

interface ControlledCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
    React.ComponentProps<typeof Checkbox>,
    "name" | "checked" | "onCheckedChange"
  > {
  name: TName;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  required?: boolean;
  className?: string;
}

export function ControlledCheckbox<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  helperText,
  className,
  ...checkboxProps
}: ControlledCheckboxProps<TFieldValues, TName>) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormFieldWrapper
          label={label}
          helperText={helperText}
          className={`flex flex-row items-start space-x-3 space-y-0 ${className || ""}`}
        >
          <Checkbox
            {...checkboxProps}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        </FormFieldWrapper>
      )}
    />
  );
}

export type { ControlledCheckboxProps };
