import React from "react";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/ui/form";
import { FormFieldWrapper } from "@/components/ui/inputs/form-field-wrapper";

interface ControlledTextareaProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
    React.ComponentProps<typeof Textarea>,
    "name" | "value" | "onChange" | "onBlur" | "ref"
  > {
  name: TName;
  label?: React.ReactNode;
  required?: boolean;
  helperText?: React.ReactNode;
}

export function ControlledTextarea<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  required,
  helperText,
  className,
  rows = 3,
  ...textareaProps
}: ControlledTextareaProps<TFieldValues, TName>) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormFieldWrapper
          label={label}
          helperText={helperText}
          required={required}
          className={className}
        >
          <Textarea
            {...field}
            {...textareaProps}
            rows={rows}
            className="resize-none"
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
          />
        </FormFieldWrapper>
      )}
    />
  );
}

export type { ControlledTextareaProps };
