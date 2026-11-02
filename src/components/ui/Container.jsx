export default function Container({
  children,
  className = "",
  as: Component = "div",
  size = "default",
  ...props
}) {
  const sizes = {
    default: "max-w-[1440px]",
    wide: "max-w-[1600px]",
    full: "max-w-none",
    narrow: "max-w-[1100px]",
  };

  return (
    <Component
      className={`
        w-full
        mx-auto
        px-4
        sm:px-5
        md:px-6
        lg:px-8
        xl:px-8
        2xl:px-16
        ${sizes[size] || sizes.default}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}