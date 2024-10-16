import clsx from "clsx";

export function NarrowContainer({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(className, "px-4 sm:px-6 lg:px-8 mx-auto max-w-lg")}
      {...props}
    >
      {children}
    </div>
  );
}

export function Container({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(className, "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8")}
      {...props}
    >
      {children}
    </div>
  );
}
