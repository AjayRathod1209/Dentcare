const Button = ({
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`
        bg-blue-900
        text-white
        px-8
        py-4
        rounded-full
        font-medium
        hover:bg-blue-800
        hover:scale-105
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;