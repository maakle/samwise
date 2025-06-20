import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import * as React from "react";

function VisuallyHidden({
  ...props
}: React.ComponentProps<typeof VisuallyHiddenPrimitive.Root>) {
  return <VisuallyHiddenPrimitive.Root {...props} />;
}

export { VisuallyHidden };
