import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";


const initialValues = {
  option: "radio1"
};

export default function SelectorFormRadio() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      option: initialValues.option
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="option">
          <Form.Label>Select Option</Form.Label>
          <Form.Check
            type="radio"
            label="radio1"
            value="radio1"
            {...register("option", {
              required: "Please select your option"
            })}
          />
          <Form.Check
            type="radio"
            label="radio2"
            value="radio2"
            {...register("option")}
          />
          {errors.option && <p className="errorMsg">{errors.option.message}</p>}
        </Form.Group>
      
      </form>
    </div>
  );
}
