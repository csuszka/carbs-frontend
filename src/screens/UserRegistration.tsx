import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type UserRegistrationFormValues = {
  userName: string;
  email: string;
  password: string;
  passwordAgain: string;
};

export default function UserRegistration() {
  let schema = yup.object().shape({
    userName: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().required(),
    passwordAgain: yup.string().required(),
  });

  const { register, handleSubmit, reset, formState } =
    useForm<UserRegistrationFormValues>({
      defaultValues: {
        userName: "",
        email: "",
        password: "",
        passwordAgain: "",
      },
      resolver: yupResolver(schema),
    });

  return (
    <div className="flex">
      <h1 className=" bg-red-600">YAY! 😎</h1>
    </div>
  );
}
