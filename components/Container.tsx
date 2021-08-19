import cn from "classnames";
import type { CommonProps } from "@/types/CommonProps";

type Props = {} & CommonProps;

export default function Container({ className, children }: Props) {
  return (
    <div className={cn("px-4 sm:px-6 lg:px-8 mx-auto", className)}>
      {children}
    </div>
  );
}