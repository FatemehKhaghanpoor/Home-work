import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyInput from "../input";
import { USER_URL } from "../urls";

const MyForm = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("name is required !")
      .min(3, "must be at least 3 characters long"),
    lastName: yup
      .string()
      .required("last name  is required !")
      .min(3, "must be at least 3 characters long"),
    email: yup
      .string()
      .required("email is required !")
      .email("email is not valid !!"),
    age: yup
      .number()
      .required("age is required !")
      .positive("age must be positive !")
      .typeError("age is required !")
      .max(99, "age must be less than 99 !"),
    description: yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      label: "name",
      type: "text",
    },
    {
      id: 2,
      label: "last name",
      name: "lastName",
      type: "text",
    },
   
  ];

  const onSubmit = (data) => {
    fetch(USER_URL, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="w-[300px] mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="w-full text-2xl font-semibold mb-4">My Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((feilds) => (
          <MyInput
            key={feilds.id}
            label={feilds.label}
            register={register(feilds.name)}
            error={errors[feilds.name]?.message}
            type={feilds.type}
          />
        ))}
        
      </form>
    </div>
  );
};

export default MyForm;
