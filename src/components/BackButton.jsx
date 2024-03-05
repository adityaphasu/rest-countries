import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex w-max items-center gap-3 rounded-md bg-white px-7 py-2 shadow-lg transition-shadow hover:bg-dark-blue hover:text-white hover:shadow-xl dark:bg-dark-blue dark:hover:bg-white dark:hover:text-dark-blue"
    >
      <ArrowLeft />
      Back
    </button>
  );
};
export default BackButton;
