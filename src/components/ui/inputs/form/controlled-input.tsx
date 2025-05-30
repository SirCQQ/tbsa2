import React from "react";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form";
import { FormFieldWrapper } from "@/components/ui/inputs/form-field-wrapper";

interface ControlledInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
    React.ComponentProps<typeof Input>,
    "name" | "value" | "onChange" | "onBlur" | "ref"
  > {
  name: TName;
  label?: React.ReactNode;
  required?: boolean;
  helperText?: React.ReactNode;
}

export function ControlledInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  required,
  helperText,
  className,
  type = "text",
  ...inputProps
}: ControlledInputProps<TFieldValues, TName>) {
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
          <Input
            {...field}
            {...inputProps}
            type={type}
            onChange={(e) => {
              if (type === "number") {
                const value =
                  e.target.value === "" ? "" : Number(e.target.value);
                field.onChange(value);
              } else {
                field.onChange(e.target.value);
              }
            }}
          />
        </FormFieldWrapper>
      )}
    />
  );
}

export type { ControlledInputProps };
