import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import './MultipleSelectorForm';

const departments = [
  { value: "Option1", label: "Option1" },
  { value: "Option2", label: "Option2" },
  { value: "Option3", label: "Option3" },
  { value: "Option4", label: "Option4" }
];

export default function MultipleSelectorForm() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="MultipleSelectorForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Multiselect from dropdown with react-hook-forms</h2>
        <div className="form-control">
          <label>Select option</label>
          <Controller
            name="department"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} isMulti options={departments} />
            )}
          />
          {errors.department && (
            <p className="errorMsg">This is a required field.</p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
