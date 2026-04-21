// src/components/ui/alert.tsx
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/alert.tsx
import { jsx } from "react/jsx-runtime";
var alertVariants = cva(
  "group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className
      ),
      ...props
    }
  );
}
function AlertAction({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-action",
      className: cn("absolute top-2 right-2", className),
      ...props
    }
  );
}

// src/components/ui/badge.tsx
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva as cva2 } from "class-variance-authority";
var badgeVariants = cva2(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  render,
  ...props
}) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps(
      {
        className: cn(badgeVariants({ variant }), className)
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant
    }
  });
}

// src/components/ui/button.tsx
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var buttonVariants = cva3(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    ButtonPrimitive,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/card.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-title",
      className: cn(
        "text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      ),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-4 group-data-[size=sm]/card:px-3", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-footer",
      className: cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/dialog.tsx
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
function Dialog({ ...props }) {
  return /* @__PURE__ */ jsx4(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx4(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx4(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ jsx4(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    DialogPrimitive.Backdrop,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx4(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Popup,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              render: /* @__PURE__ */ jsx4(
                Button,
                {
                  variant: "ghost",
                  className: "absolute top-2 right-2",
                  size: "icon-sm"
                }
              ),
              children: [
                /* @__PURE__ */ jsx4(
                  XIcon,
                  {}
                ),
                /* @__PURE__ */ jsx4("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ jsx4(DialogPrimitive.Close, { render: /* @__PURE__ */ jsx4(Button, { variant: "outline" }), children: "Close" })
      ]
    }
  );
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn(
        "text-base leading-none font-medium",
        className
      ),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/dropdown-menu.tsx
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { ChevronRightIcon, CheckIcon } from "lucide-react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx5(MenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({ ...props }) {
  return /* @__PURE__ */ jsx5(MenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx5(MenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(MenuPrimitive.Portal, { children: /* @__PURE__ */ jsx5(
    MenuPrimitive.Positioner,
    {
      className: "isolate z-50 outline-none",
      align,
      alignOffset,
      side,
      sideOffset,
      children: /* @__PURE__ */ jsx5(
        MenuPrimitive.Popup,
        {
          "data-slot": "dropdown-menu-content",
          className: cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
          ...props
        }
      )
    }
  ) });
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx5(MenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    MenuPrimitive.GroupLabel,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    MenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({ ...props }) {
  return /* @__PURE__ */ jsx5(MenuPrimitive.SubmenuRoot, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    MenuPrimitive.SubmenuTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx5(ChevronRightIcon, { className: "ml-auto" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    DropdownMenuContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn("w-auto min-w-[96px] rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      align,
      alignOffset,
      side,
      sideOffset,
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    MenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx5(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-checkbox-item-indicator",
            children: /* @__PURE__ */ jsx5(MenuPrimitive.CheckboxItemIndicator, { children: /* @__PURE__ */ jsx5(
              CheckIcon,
              {}
            ) })
          }
        ),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({ ...props }) {
  return /* @__PURE__ */ jsx5(
    MenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    MenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx5(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-radio-item-indicator",
            children: /* @__PURE__ */ jsx5(MenuPrimitive.RadioItemIndicator, { children: /* @__PURE__ */ jsx5(
              CheckIcon,
              {}
            ) })
          }
        ),
        children
      ]
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    MenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/input.tsx
import { Input as InputPrimitive } from "@base-ui/react/input";
import { jsx as jsx6 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx6(
    InputPrimitive,
    {
      type,
      "data-slot": "input",
      className: cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/select.tsx
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { ChevronDownIcon, CheckIcon as CheckIcon2, ChevronUpIcon } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
function SelectGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
    SelectPrimitive.Group,
    {
      "data-slot": "select-group",
      className: cn("scroll-my-1 p-1", className),
      ...props
    }
  );
}
function SelectValue({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
    SelectPrimitive.Value,
    {
      "data-slot": "select-value",
      className: cn("flex flex-1 text-left", className),
      ...props
    }
  );
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx7(
          SelectPrimitive.Icon,
          {
            render: /* @__PURE__ */ jsx7(ChevronDownIcon, { className: "pointer-events-none size-4 text-muted-foreground" })
          }
        )
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}) {
  return /* @__PURE__ */ jsx7(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsx7(
    SelectPrimitive.Positioner,
    {
      side,
      sideOffset,
      align,
      alignOffset,
      alignItemWithTrigger,
      className: "isolate z-50",
      children: /* @__PURE__ */ jsxs3(
        SelectPrimitive.Popup,
        {
          "data-slot": "select-content",
          "data-align-trigger": alignItemWithTrigger,
          className: cn("relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
          ...props,
          children: [
            /* @__PURE__ */ jsx7(SelectScrollUpButton, {}),
            /* @__PURE__ */ jsx7(SelectPrimitive.List, { children }),
            /* @__PURE__ */ jsx7(SelectScrollDownButton, {})
          ]
        }
      )
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    SelectPrimitive.GroupLabel,
    {
      "data-slot": "select-label",
      className: cn("px-1.5 py-1 text-xs text-muted-foreground", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx7(SelectPrimitive.ItemText, { className: "flex flex-1 shrink-0 gap-2 whitespace-nowrap", children }),
        /* @__PURE__ */ jsx7(
          SelectPrimitive.ItemIndicator,
          {
            render: /* @__PURE__ */ jsx7("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
            children: /* @__PURE__ */ jsx7(CheckIcon2, { className: "pointer-events-none" })
          }
        )
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("pointer-events-none -mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    SelectPrimitive.ScrollUpArrow,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx7(
        ChevronUpIcon,
        {}
      )
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    SelectPrimitive.ScrollDownArrow,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx7(
        ChevronDownIcon,
        {}
      )
    }
  );
}

// src/components/ui/separator.tsx
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { jsx as jsx8 } from "react/jsx-runtime";
function Separator({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx8(
    SeparatorPrimitive,
    {
      "data-slot": "separator",
      orientation,
      className: cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/table.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsx9(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      ),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className
      ),
      ...props
    }
  );
}
function TableCaption({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/tabs.tsx
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx10 } from "react/jsx-runtime";
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      className: cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      ),
      ...props
    }
  );
}
var tabsListVariants = cva4(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx10(
    TabsPrimitive.Tab,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      ),
      ...props
    }
  );
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ jsx10(
    TabsPrimitive.Panel,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 text-sm outline-none", className),
      ...props
    }
  );
}

// src/components/ui/tooltip.tsx
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
function TooltipProvider({
  delay = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delay,
      ...props
    }
  );
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ jsx11(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ jsx11(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx11(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx11(
    TooltipPrimitive.Positioner,
    {
      align,
      alignOffset,
      side,
      sideOffset,
      className: "isolate z-50",
      children: /* @__PURE__ */ jsxs4(
        TooltipPrimitive.Popup,
        {
          "data-slot": "tooltip-content",
          className: cn(
            "z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          ),
          ...props,
          children: [
            children,
            /* @__PURE__ */ jsx11(TooltipPrimitive.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5" })
          ]
        }
      )
    }
  ) });
}

// src/components/AmbientBackground.tsx
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
function AmbientBackground({ className }) {
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      "aria-hidden": true,
      className: cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      ),
      children: [
        /* @__PURE__ */ jsx12("div", { className: "sg-ambient-gradient" }),
        /* @__PURE__ */ jsx12("div", { className: "sg-ambient-orb sg-ambient-orb-1" }),
        /* @__PURE__ */ jsx12("div", { className: "sg-ambient-orb sg-ambient-orb-2" }),
        /* @__PURE__ */ jsx12("div", { className: "sg-ambient-orb sg-ambient-orb-3" }),
        /* @__PURE__ */ jsx12("div", { className: "sg-ambient-grain" })
      ]
    }
  );
}

// src/components/LoadingScreen.tsx
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
function LoadingScreen({ appName = "Sidgrove", className }) {
  return /* @__PURE__ */ jsx13(
    "div",
    {
      className: cn(
        "fixed inset-0 flex items-center justify-center",
        className
      ),
      children: /* @__PURE__ */ jsxs6("div", { className: "sg-loading-card", children: [
        /* @__PURE__ */ jsx13("div", { className: "sg-loading-spinner" }),
        /* @__PURE__ */ jsxs6("p", { className: "sg-loading-label", children: [
          "Loading ",
          appName,
          "\u2026"
        ] })
      ] })
    }
  );
}

// src/components/AppHeader.tsx
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
function AppHeader({
  logo,
  appName,
  user,
  onSignOut,
  actions,
  className
}) {
  const initial = (user?.name || user?.email || "?")[0]?.toUpperCase();
  return /* @__PURE__ */ jsxs7(
    "header",
    {
      className: cn(
        "sg-app-header flex items-center justify-between gap-4 px-6 py-4",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-3", children: [
          logo,
          appName && /* @__PURE__ */ jsx14("span", { className: "sg-app-header-name", children: appName })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-3", children: [
          actions,
          user && onSignOut && /* @__PURE__ */ jsxs7(DropdownMenu, { children: [
            /* @__PURE__ */ jsx14(DropdownMenuTrigger, { className: "sg-app-header-avatar", children: user.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              /* @__PURE__ */ jsx14("img", { src: user.image, alt: "", className: "h-full w-full rounded-full object-cover" })
            ) : /* @__PURE__ */ jsx14("span", { children: initial }) }),
            /* @__PURE__ */ jsxs7(DropdownMenuContent, { align: "end", children: [
              user.name && /* @__PURE__ */ jsx14("div", { className: "px-2 py-1 text-sm font-medium", children: user.name }),
              user.email && /* @__PURE__ */ jsx14("div", { className: "px-2 pb-2 text-xs text-muted-foreground", children: user.email }),
              /* @__PURE__ */ jsx14(DropdownMenuItem, { onClick: onSignOut, children: "Sign out" })
            ] })
          ] })
        ] })
      ]
    }
  );
}

// src/components/LoginShell.tsx
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
function LoginShell({ appName, tagline, logo, children, className }) {
  return /* @__PURE__ */ jsx15("main", { className: cn("sg-login-main", className), children: /* @__PURE__ */ jsx15("div", { className: "sg-login-card sg-login-spinning-border", children: /* @__PURE__ */ jsxs8("div", { className: "sg-login-card-inner", children: [
    logo && /* @__PURE__ */ jsx15("div", { className: "mb-6 flex justify-center", children: logo }),
    /* @__PURE__ */ jsx15("h1", { className: "sg-login-title", children: appName }),
    tagline && /* @__PURE__ */ jsx15("p", { className: "sg-login-tagline", children: tagline }),
    /* @__PURE__ */ jsx15("div", { className: "mt-8 flex flex-col gap-3", children })
  ] }) }) });
}

// src/tokens/index.ts
var T = {
  // Brand
  brand: "#6874b4",
  brandLight: "#eef0fa",
  brandMid: "#a8b0d8",
  brandStrong: "#3d4785",
  // Coral (negatives / outflows)
  coral: "#b8456b",
  coralLight: "#fdf2f6",
  coralMid: "#e0a3b8",
  // Amber (warnings / flags)
  amber: "#c69b2d",
  amberMid: "#c69b2d",
  amberDark: "#7a5e1e",
  amberLight: "#fdf9ee",
  // Teal (positives / inflows — legacy)
  tealStrong: "#0f766e",
  tealLight: "#d1faf4",
  // Neutrals
  ink: "#1a1d2e",
  muted: "#525672",
  faint: "#8b8fa6",
  line: "#dfe1ee",
  // Surfaces
  bg: "#f0f1f8",
  surface: "#f6f7fc",
  wash: "#f0f1f8",
  cardBg: "rgba(255, 255, 255, 0.72)",
  cardStrong: "rgba(255, 255, 255, 0.85)",
  cardBorder: "rgba(255, 255, 255, 0.65)",
  // Radius
  radius: "20px",
  radiusSm: "12px",
  radiusLg: "28px",
  // Shadows (Cashflow's layered system)
  shadowSurface: "0 2px 4px 0 rgba(0,0,0,0.04), 0 1px 2px 0 rgba(0,0,0,0.06), 0 0 1px 0 rgba(0,0,0,0.04)",
  shadowSoft: "0 1px 3px rgba(0,0,0,0.03), 0 4px 16px rgba(104,116,180,0.04), 0 12px 32px rgba(104,116,180,0.03)",
  shadowLift: "0 2px 8px rgba(104,116,180,0.06), 0 8px 24px rgba(104,116,180,0.08), 0 20px 48px rgba(50,50,110,0.06)",
  shadowGlass: "0 2px 4px rgba(26, 29, 46, 0.04), 0 12px 32px rgba(26, 29, 46, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.55)"
};
var cssVars = {
  brand: "var(--sg-brand)",
  brandStrong: "var(--sg-brand-strong)",
  ink: "var(--sg-ink)",
  muted: "var(--sg-muted)",
  cardBg: "var(--sg-card-bg)",
  cardBorder: "var(--sg-card-border)",
  radius: "var(--sg-radius)",
  shadowGlass: "var(--sg-shadow-glass)"
};

// src/components/layout/PageShell.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var widthMap = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-none"
};
var densityMap = {
  compact: "space-y-8",
  comfortable: "space-y-12",
  spacious: "space-y-16"
};
function PageShell({
  width = "6xl",
  density = "comfortable",
  className,
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsx16(
    "main",
    {
      className: cn(
        "mx-auto w-full px-6 py-12 md:px-8",
        widthMap[width],
        densityMap[density],
        className
      ),
      ...rest,
      children
    }
  );
}

// src/components/layout/PageHeader.tsx
import { jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
function PageHeaderImpl({
  eyebrow,
  title,
  description,
  actions,
  variant = "compact",
  className
}) {
  const isHero = variant === "hero";
  return /* @__PURE__ */ jsxs9(
    "header",
    {
      className: cn(
        "flex flex-wrap items-start justify-between gap-6",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs9("div", { className: "space-y-2 max-w-3xl", children: [
          eyebrow && /* @__PURE__ */ jsx17("p", { className: "text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-muted)]", children: eyebrow }),
          /* @__PURE__ */ jsx17(
            "h1",
            {
              className: cn(
                "text-[var(--color-ink)] leading-tight",
                isHero ? "text-[2.25rem] font-semibold tracking-tight" : "text-2xl font-semibold"
              ),
              children: title
            }
          ),
          description && /* @__PURE__ */ jsx17("p", { className: "text-sm text-[var(--color-muted)]", children: description })
        ] }),
        actions && /* @__PURE__ */ jsx17("div", { className: "flex items-center gap-2", children: actions })
      ]
    }
  );
}
function Accent({ children }) {
  return /* @__PURE__ */ jsx17("span", { className: "font-serif italic font-normal text-[1.1em] leading-[0.95]", children });
}
var PageHeader = Object.assign(PageHeaderImpl, { Accent });

// src/components/layout/Section.tsx
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
  className
}) {
  return /* @__PURE__ */ jsxs10("div", { className: cn("flex items-end justify-between gap-4", className), children: [
    /* @__PURE__ */ jsxs10("div", { className: "space-y-1", children: [
      eyebrow && /* @__PURE__ */ jsx18("p", { className: "text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-muted)]", children: eyebrow }),
      /* @__PURE__ */ jsx18("h2", { className: "text-lg font-semibold text-[var(--color-ink)]", children: title }),
      description && /* @__PURE__ */ jsx18("p", { className: "text-sm text-[var(--color-muted)]", children: description })
    ] }),
    actions && /* @__PURE__ */ jsx18("div", { className: "flex items-center gap-2", children: actions })
  ] });
}
function Section({
  density = "comfortable",
  className,
  children,
  ...rest
}) {
  return /* @__PURE__ */ jsx18(
    "section",
    {
      className: cn(
        density === "compact" ? "space-y-3" : "space-y-5",
        className
      ),
      ...rest,
      children
    }
  );
}

// src/components/layout/SurfaceCard.tsx
import { jsx as jsx19, jsxs as jsxs11 } from "react/jsx-runtime";
var densityPad = {
  compact: "p-4",
  comfortable: "p-6",
  hero: "p-8"
};
var densityPrimary = {
  compact: "text-xl font-semibold",
  comfortable: "text-2xl font-semibold",
  hero: "font-serif text-4xl font-normal leading-tight"
};
function SurfaceCard({
  density = "comfortable",
  icon,
  label,
  primary,
  secondary,
  action,
  className,
  children,
  ...rest
}) {
  const structured = label || primary || secondary || icon || action;
  return /* @__PURE__ */ jsx19(
    "div",
    {
      className: cn(
        "rounded-2xl bg-white/80 backdrop-blur-sm",
        "border border-[var(--color-line)] shadow-sm",
        densityPad[density],
        className
      ),
      ...rest,
      children: structured ? /* @__PURE__ */ jsxs11("div", { className: "flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxs11("div", { className: "flex items-start gap-3 min-w-0", children: [
          icon && /* @__PURE__ */ jsx19("div", { className: "shrink-0 size-10 rounded-lg bg-[var(--color-bg-subtle)] grid place-items-center text-[var(--color-muted)]", children: icon }),
          /* @__PURE__ */ jsxs11("div", { className: "space-y-1 min-w-0", children: [
            label && /* @__PURE__ */ jsx19("p", { className: "text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-muted)]", children: label }),
            primary && /* @__PURE__ */ jsx19("div", { className: cn("text-[var(--color-ink)]", densityPrimary[density]), children: primary }),
            secondary && /* @__PURE__ */ jsx19("p", { className: "text-sm text-[var(--color-muted)]", children: secondary })
          ] })
        ] }),
        action && /* @__PURE__ */ jsx19("div", { className: "shrink-0", children: action })
      ] }) : children
    }
  );
}

// src/components/layout/KpiTile.tsx
import { jsx as jsx20, jsxs as jsxs12 } from "react/jsx-runtime";
function KpiTile({
  label,
  value,
  delta,
  sublabel,
  className,
  ...rest
}) {
  return /* @__PURE__ */ jsxs12(
    "div",
    {
      className: cn(
        "rounded-xl bg-white/80 backdrop-blur-sm border border-[var(--color-line)] p-4 space-y-1",
        className
      ),
      ...rest,
      children: [
        /* @__PURE__ */ jsx20("p", { className: "text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-muted)]", children: label }),
        /* @__PURE__ */ jsxs12("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsx20("span", { className: "text-2xl font-semibold text-[var(--color-ink)]", children: value }),
          delta
        ] }),
        sublabel && /* @__PURE__ */ jsx20("p", { className: "text-xs text-[var(--color-muted)]", children: sublabel })
      ]
    }
  );
}

// src/components/layout/DataTable.tsx
import { Fragment, jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
function DataTable({
  data,
  columns,
  rowKey,
  stickyHeader = false,
  emptyState,
  className
}) {
  const alignClass = (a) => a === "right" ? "text-right" : a === "center" ? "text-center" : "text-left";
  if (data.length === 0 && emptyState) return /* @__PURE__ */ jsx21(Fragment, { children: emptyState });
  return /* @__PURE__ */ jsx21("div", { className: cn("rounded-xl border border-[var(--color-line)] overflow-hidden", className), children: /* @__PURE__ */ jsxs13(Table, { children: [
    /* @__PURE__ */ jsx21(
      TableHeader,
      {
        className: cn(
          stickyHeader && "sticky top-0 z-10 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-subtle)] backdrop-blur"
        ),
        children: /* @__PURE__ */ jsx21(TableRow, { children: columns.map((col) => /* @__PURE__ */ jsx21(
          TableHead,
          {
            className: cn(
              "text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-muted)]",
              alignClass(col.align),
              col.widthClass
            ),
            children: col.header
          },
          col.key
        )) })
      }
    ),
    /* @__PURE__ */ jsx21(TableBody, { children: data.map((row, i) => /* @__PURE__ */ jsx21(TableRow, { children: columns.map((col) => /* @__PURE__ */ jsx21(
      TableCell,
      {
        className: cn(alignClass(col.align), col.widthClass),
        children: col.cell(row, i)
      },
      col.key
    )) }, rowKey ? rowKey(row, i) : i)) })
  ] }) });
}

// src/components/layout/EmptyState.tsx
import { jsx as jsx22, jsxs as jsxs14 } from "react/jsx-runtime";
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ jsxs14(
    "div",
    {
      className: cn(
        "rounded-xl border border-dashed border-[var(--color-line)] p-12",
        "flex flex-col items-center gap-3 text-center",
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsx22("div", { className: "size-12 rounded-full bg-[var(--color-bg-subtle)] grid place-items-center text-[var(--color-muted)]", children: icon }),
        /* @__PURE__ */ jsx22("h3", { className: "text-base font-semibold text-[var(--color-ink)]", children: title }),
        description && /* @__PURE__ */ jsx22("p", { className: "text-sm text-[var(--color-muted)] max-w-sm", children: description }),
        action && /* @__PURE__ */ jsx22("div", { className: "pt-2", children: action })
      ]
    }
  );
}

// src/components/layout/LoadingState.tsx
import { jsx as jsx23, jsxs as jsxs15 } from "react/jsx-runtime";
function LoadingState({ label = "Loading\u2026", className }) {
  return /* @__PURE__ */ jsxs15(
    "div",
    {
      className: cn(
        "flex items-center justify-center gap-3 py-12 text-sm text-[var(--color-muted)]",
        className
      ),
      role: "status",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ jsx23("span", { className: "size-4 rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-brand-strong)] animate-spin" }),
        /* @__PURE__ */ jsx23("span", { children: label })
      ]
    }
  );
}

// src/components/layout/Toolbar.tsx
import { jsx as jsx24, jsxs as jsxs16 } from "react/jsx-runtime";
function Toolbar({
  leading,
  trailing,
  density = "comfortable",
  className,
  children,
  ...rest
}) {
  const padding = density === "compact" ? "px-3 py-2" : "px-4 py-3";
  const base = cn(
    "rounded-xl bg-white/70 backdrop-blur-sm border border-[var(--color-line)]",
    padding,
    className
  );
  if (children) {
    return /* @__PURE__ */ jsx24("div", { className: cn("flex items-center gap-3", base), ...rest, children });
  }
  return /* @__PURE__ */ jsxs16("div", { className: cn("flex items-center justify-between gap-3", base), ...rest, children: [
    /* @__PURE__ */ jsx24("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: leading }),
    trailing && /* @__PURE__ */ jsx24("div", { className: "flex items-center gap-2 shrink-0", children: trailing })
  ] });
}
export {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  AmbientBackground,
  AppHeader,
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DataTable,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  EmptyState,
  Input,
  KpiTile,
  LoadingScreen,
  LoadingState,
  LoginShell,
  PageHeader,
  PageShell,
  Section,
  SectionHeader,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  SurfaceCard,
  T,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toolbar,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  cn,
  cssVars,
  tabsListVariants
};
//# sourceMappingURL=index.js.map