import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return { open, handleOpenModal };
};

export default useModal;
