import clsx from "clsx";
export function PageVerticalPadding({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={clsx(className, "py-8 sm:py-12 lg:py-16")} {...props}>
      {children}
    </div>
  );
}
