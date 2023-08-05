import React from "react";
import { useController, UseControllerProps } from "react-hook-form";

interface ClearableInputFieldProps {
  label?: string;
  name?: string;
  type?: string;
  className?: string;
  control: any;
  defaultValue: any;
  rules: any;
  shouldUnregister: any;
}

export default function TextInput({
  type = "text",
  className = "",
  label,
  name = "",
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: ClearableInputFieldProps) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <div className="flex flex-col">
      <label>
        {label && (
          <span className="block text-sm font-medium text-gray-700">
            {label}
          </span>
        )}
        <div className="flex w-full mt-1 relative ">
          <input
            type={type}
            className={`px-3 py-2 rounded border focus:ring-1 focus:outline-none ${
              !!fieldState.error
                ? "border-red-300 focus:border-red-500  focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            } shadow-sm ${className}`}
            {...props}
          />
          {(field.value as string).length ? (
            <div className="absolute right-2 top-0 flex h-full justify-center">
              {fieldState.error && fieldState.error.message && (
                <div className="text-blood text-xs 2xl:font-semibold animate-pulse xl:text-sm 2xl:text-base">
                  {fieldState.error.message}
                </div>
              )}
              <div
                onClick={() => field.onChange("")}
                className="h-6 w-6 2xl:h-7 2xl:w-7 text-red-400 hover:text-red-600 cursor-pointer my-auto"
              >
                X
              </div>
            </div>
          ) : null}
        </div>
      </label>
    </div>
  );
}
