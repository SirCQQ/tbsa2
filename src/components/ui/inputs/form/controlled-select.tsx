import React from "react";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/ui/form";
import { FormFieldWrapper } from "@/components/ui/inputs/form-field-wrapper";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface ControlledSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
    React.ComponentProps<typeof Select>,
    "name" | "value" | "onValueChange" | "defaultValue"
  > {
  name: TName;
  label?: React.ReactNode;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
  required?: boolean;
  helperText?: React.ReactNode;
}

export function ControlledSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  placeholder = "Selectați o opțiune",
  options,
  required,
  helperText,
  className,
  ...selectProps
}: ControlledSelectProps<TFieldValues, TName>) {
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
          <Select
            {...selectProps}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormFieldWrapper>
      )}
    />
  );
}

export type { ControlledSelectProps, SelectOption };
