const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`from-green-1 to-green-2 hover:from-green-2 hover:to-green-1 rounded-lg bg-linear-to-r px-4 py-2 text-white transition-colors duration-300 ease-in hover:shadow-xl lg:px-8 lg:py-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
