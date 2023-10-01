const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-md flex items-center justify-center px-[24px] py-[4px] bg-[#01a885] rounded-[24px] hover:scale-110 active:scale-100 "
    >
      {label}
    </button>
  );
};

export default Button;
