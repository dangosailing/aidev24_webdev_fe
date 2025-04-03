import React, {useContext}  from "react"; 
import { useForm } from "react-hook-form";
import UserContext from "../contexts/UserContextBase";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import "../styles/Form.css"

const Form = ({ fields, onSubmit, buttonText = "Submit" }) => {
  const { setServerMessage } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = async (data) => {
    try {
      const response = await onSubmit(data);
      setServerMessage({ type: "success", text: response.message });
      reset();
    } catch (error) {
      setServerMessage({
        type: "failed",
        text: error.response?.data?.error || "Something went wrong!",
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
        {fields.map(({ name, label, type = "text", validation }) => (
          <TextInput
            key={name}
            name={name}
            label={label}
            type={type}
            register={register}
            registerOptions={validation}
            error={errors[name]}
          />
        ))}
        <div className="centered-button">
          <Button type="submit" text={buttonText} />
        </div>
      </form>
    </div>
  );
};

export default Form;
