import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { editPassword } from "../services/userApi";
import Form from "../components/Form";
import Button from "./Button";
import UserContext from "../contexts/UserContextBase";


const UpdatePassword = () => {
  const [updatePasswordMode, setUpdatePasswordMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const fields = [
    {
      name: "old_password",
      label: "Old password",
      type: "password",
      validation: { required: "Old password is required" },
    },
    {
      name: "new_password",
      label: "New password",
      type: "password",
      validation: {
        required: "New password is required",
      },
    },
    {
        name: "confirm_password",
        label: "Confirm password",
        type: "password",
        validation: {
          required: "Confirm password is requierd",
        },
      },
  ];

  const { setServerMessage } = useContext(UserContext);

    const onSubmit = async (data) => {
        const response = await editPassword(data);
        setServerMessage({ type: "success", text: response.message });
        return response;
    }

  return (
    <div className="primary-form-container">
      {!updatePasswordMode && <Button id="test-change-password" text="Change password" onClick={() => setUpdatePasswordMode(true)}/>}
      {updatePasswordMode && (
        
        <>
        <Form fields={fields} onSubmit={onSubmit} />
        <Button text="Cancel" onClick={() => setUpdatePasswordMode(false)}/>
        </>
      )}
    </div>
  );
};

export default UpdatePassword;
