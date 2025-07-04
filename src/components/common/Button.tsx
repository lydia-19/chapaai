const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`group from-green-1 to-green-2 relative overflow-hidden rounded-lg bg-gradient-to-r px-4 py-2 text-white transition-all duration-300 ease-out hover:scale-105 lg:px-8 lg:py-3 ${className}`}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>

      <span className="group- relative z-10 font-medium transition-transform duration-200">
        {children}
      </span>
    </button>
  );
};

export default Button;
