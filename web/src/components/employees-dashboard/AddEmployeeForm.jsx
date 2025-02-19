import React, { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import { FiCamera } from "react-icons/fi";
import { addEmployeesInputs } from "../../inputs";
import AppContext from "../../context/AppContext";
import { useAddEmployeeMutation } from "../../features/employee";
import Alert from "../error";
import Spinner from "../spinner";

const AddEmployeeForm = ({ handleOpenModal, setOpen }) => {
  const { auth } = useContext(AppContext);
  const accessToken = auth?.token;

  const { setSuccessMsg } = useContext(AppContext)

  const { mutate, isPending, isError, error } = useAddEmployeeMutation();

  const [image, setImage] = useState(null);
  const { formData, handleChange } = useForm(
    {
      full_name: "",
      unique_identifier: "",
      phone_number: "",
      email: "",
      date_of_birth: "",
      position: "",
      department: "",
      hire_date: "",
      comments: "",
    },
    ["unique_identifier", "phone_number"]
  );

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    mutate(
      { data: formData, accessToken },
      {
        onSuccess: (data) => {
          setSuccessMsg(data.message)
          setOpen(false)
        },
      }
    );
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4`}
    >
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-3xl relative flex flex-col md:flex-row min-h-[60vh] max-h-[90vh] overflow-y-auto">
        {isError && <Alert message={error} error/>}
        {isPending ? (
          <Spinner />
        ) : (
          <>
            {/* Image Upload Section */}
            <div className="flex flex-col items-center md:mr-6">
              <label className="relative cursor-pointer w-32 h-32 flex items-center justify-center border-2 border-gray-500 rounded-xl overflow-hidden hover:border-blue-500 transition">
                {image ? (
                  <img
                    src={image}
                    alt="Employee"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center text-gray-500">
                    <FiCamera className="w-10 h-10" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">Click to upload</p>
            </div>

            {/* Form Section */}
            <div className="flex-1 mt-1">
              <form onSubmit={formSubmitHandler}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 w-full">
                  {addEmployeesInputs.map((field, index) => (
                    <div key={index} className="my-0">
                      <label
                        htmlFor={field.id}
                        className="block text-sm font-medium text-gray-700"
                      >
                        {field.label}{" "}
                        {field.extraText && (
                          <span className="mr-2 text-xs text-red-600">
                            {field.extraText}
                          </span>
                        )}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full mt-4 p-2 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
                  placeholder="Comments"
                />

                <div className="flex justify-between mt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenModal}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddEmployeeForm;
