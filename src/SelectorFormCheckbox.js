import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";


const initialValues = {
  skills: {
    checkbox1: true,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false
  }
};

export default function SelectorFormCheckbox() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      skills: Object.keys(initialValues.skills).filter(
        (item) => initialValues.skills[item] === true
      )
    }
  });

  const onSubmit = (data) => console.log("onSubmit", data);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group className="mb-3" controlId="skills">
          <Form.Label><h2>Select Your Checkbox</h2></Form.Label>
          <Form.Check
            type="checkbox"
            label="checkbox1"
            value="checkbox1"
            {...register("skills", {
              required: "Please select at-least one skill"
            })}
          />
          <Form.Check
            type="checkbox"
            label="checkbox2"
            value="checkbox2"
            {...register("skills")}
          />
          <Form.Check
            type="checkbox"
            label="checkbox3"
            value="checkbox3"
            {...register("skills")}
          />
          <Form.Check
            type="checkbox"
            label="checkbox4"
            value="checkbox4"
            {...register("skills")}
          />
          {errors.skills && <p className="errorMsg">{errors.skills.message}</p>}
        </Form.Group>
        <label></label>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
