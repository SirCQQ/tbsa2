import React, { useState } from "react";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { FormFieldWrapper } from "@/components/ui/inputs/form-field-wrapper";
import { Eye, EyeOff } from "lucide-react";

interface ControlledPasswordProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
    React.ComponentProps<typeof Input>,
    "name" | "value" | "onChange" | "onBlur" | "ref" | "type"
  > {
  name: TName;
  label: string;
  required?: boolean;
  helperText?: string;
}

export function ControlledPassword<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  label,
  required,
  helperText,
  className,
  placeholder = "Introduceți parola",
  ...inputProps
}: ControlledPasswordProps<TFieldValues, TName>) {
  const [showPassword, setShowPassword] = useState(false);
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
          <div className="relative">
            <Input
              {...field}
              {...inputProps}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              className="pr-10"
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              disabled={inputProps.disabled}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              <span className="sr-only">
                {showPassword ? "Ascunde parola" : "Afișează parola"}
              </span>
            </Button>
          </div>
        </FormFieldWrapper>
      )}
    />
  );
}

export type { ControlledPasswordProps };
