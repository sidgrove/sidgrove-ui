"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  AlertAction: () => AlertAction,
  AlertDescription: () => AlertDescription,
  AlertTitle: () => AlertTitle,
  AmbientBackground: () => AmbientBackground,
  AppHeader: () => AppHeader,
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Input: () => Input,
  LoadingScreen: () => LoadingScreen,
  LoginShell: () => LoginShell,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator,
  T: () => T,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  cssVars: () => cssVars,
  tabsListVariants: () => tabsListVariants
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/alert.tsx
var React2 = __toESM(require("react"), 1);
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/alert.tsx
var alertVariants = (0, import_class_variance_authority.cva)(
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
  return /* @__PURE__ */ React2.createElement(
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
  return /* @__PURE__ */ React2.createElement(
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
  return /* @__PURE__ */ React2.createElement(
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
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      "data-slot": "alert-action",
      className: cn("absolute top-2 right-2", className),
      ...props
    }
  );
}

// src/components/ui/badge.tsx
var import_merge_props = require("@base-ui/react/merge-props");
var import_use_render = require("@base-ui/react/use-render");
var import_class_variance_authority2 = require("class-variance-authority");
var badgeVariants = (0, import_class_variance_authority2.cva)(
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
  return (0, import_use_render.useRender)({
    defaultTagName: "span",
    props: (0, import_merge_props.mergeProps)(
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
var import_button = require("@base-ui/react/button");
var import_class_variance_authority3 = require("class-variance-authority");
var buttonVariants = (0, import_class_variance_authority3.cva)(
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
  return /* @__PURE__ */ React.createElement(
    import_button.Button,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/card.tsx
var React3 = __toESM(require("react"), 1);
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ React3.createElement(
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
  return /* @__PURE__ */ React3.createElement(
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
  return /* @__PURE__ */ React3.createElement(
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
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ React3.createElement(
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
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-4 group-data-[size=sm]/card:px-3", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ React3.createElement(
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
var React4 = __toESM(require("react"), 1);
var import_dialog = require("@base-ui/react/dialog");
var import_lucide_react = require("lucide-react");
function Dialog({ ...props }) {
  return /* @__PURE__ */ React4.createElement(import_dialog.Dialog.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ React4.createElement(import_dialog.Dialog.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ React4.createElement(import_dialog.Dialog.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ React4.createElement(import_dialog.Dialog.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ React4.createElement(
    import_dialog.Dialog.Backdrop,
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
  return /* @__PURE__ */ React4.createElement(DialogPortal, null, /* @__PURE__ */ React4.createElement(DialogOverlay, null), /* @__PURE__ */ React4.createElement(
    import_dialog.Dialog.Popup,
    {
      "data-slot": "dialog-content",
      className: cn(
        "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props
    },
    children,
    showCloseButton && /* @__PURE__ */ React4.createElement(
      import_dialog.Dialog.Close,
      {
        "data-slot": "dialog-close",
        render: /* @__PURE__ */ React4.createElement(
          Button,
          {
            variant: "ghost",
            className: "absolute top-2 right-2",
            size: "icon-sm"
          }
        )
      },
      /* @__PURE__ */ React4.createElement(
        import_lucide_react.XIcon,
        null
      ),
      /* @__PURE__ */ React4.createElement("span", { className: "sr-only" }, "Close")
    )
  ));
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ React4.createElement(
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
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    },
    children,
    showCloseButton && /* @__PURE__ */ React4.createElement(import_dialog.Dialog.Close, { render: /* @__PURE__ */ React4.createElement(Button, { variant: "outline" }) }, "Close")
  );
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ React4.createElement(
    import_dialog.Dialog.Title,
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
  return /* @__PURE__ */ React4.createElement(
    import_dialog.Dialog.Description,
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
var React5 = __toESM(require("react"), 1);
var import_menu = require("@base-ui/react/menu");
var import_lucide_react2 = require("lucide-react");
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ React5.createElement(import_menu.Menu.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({ ...props }) {
  return /* @__PURE__ */ React5.createElement(import_menu.Menu.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({ ...props }) {
  return /* @__PURE__ */ React5.createElement(import_menu.Menu.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  className,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(import_menu.Menu.Portal, null, /* @__PURE__ */ React5.createElement(
    import_menu.Menu.Positioner,
    {
      className: "isolate z-50 outline-none",
      align,
      alignOffset,
      side,
      sideOffset
    },
    /* @__PURE__ */ React5.createElement(
      import_menu.Menu.Popup,
      {
        "data-slot": "dropdown-menu-content",
        className: cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
        ...props
      }
    )
  ));
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ React5.createElement(import_menu.Menu.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    import_menu.Menu.GroupLabel,
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
  return /* @__PURE__ */ React5.createElement(
    import_menu.Menu.Item,
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
  return /* @__PURE__ */ React5.createElement(import_menu.Menu.SubmenuRoot, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    import_menu.Menu.SubmenuTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React5.createElement(import_lucide_react2.ChevronRightIcon, { className: "ml-auto" })
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
  return /* @__PURE__ */ React5.createElement(
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
  return /* @__PURE__ */ React5.createElement(
    import_menu.Menu.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props
    },
    /* @__PURE__ */ React5.createElement(
      "span",
      {
        className: "pointer-events-none absolute right-2 flex items-center justify-center",
        "data-slot": "dropdown-menu-checkbox-item-indicator"
      },
      /* @__PURE__ */ React5.createElement(import_menu.Menu.CheckboxItemIndicator, null, /* @__PURE__ */ React5.createElement(
        import_lucide_react2.CheckIcon,
        null
      ))
    ),
    children
  );
}
function DropdownMenuRadioGroup({ ...props }) {
  return /* @__PURE__ */ React5.createElement(
    import_menu.Menu.RadioGroup,
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
  return /* @__PURE__ */ React5.createElement(
    import_menu.Menu.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React5.createElement(
      "span",
      {
        className: "pointer-events-none absolute right-2 flex items-center justify-center",
        "data-slot": "dropdown-menu-radio-item-indicator"
      },
      /* @__PURE__ */ React5.createElement(import_menu.Menu.RadioItemIndicator, null, /* @__PURE__ */ React5.createElement(
        import_lucide_react2.CheckIcon,
        null
      ))
    ),
    children
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    import_menu.Menu.Separator,
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
  return /* @__PURE__ */ React5.createElement(
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
var React6 = __toESM(require("react"), 1);
var import_input = require("@base-ui/react/input");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ React6.createElement(
    import_input.Input,
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
var React7 = __toESM(require("react"), 1);
var import_select = require("@base-ui/react/select");
var import_lucide_react3 = require("lucide-react");
var Select = import_select.Select.Root;
function SelectGroup({ className, ...props }) {
  return /* @__PURE__ */ React7.createElement(
    import_select.Select.Group,
    {
      "data-slot": "select-group",
      className: cn("scroll-my-1 p-1", className),
      ...props
    }
  );
}
function SelectValue({ className, ...props }) {
  return /* @__PURE__ */ React7.createElement(
    import_select.Select.Value,
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
  return /* @__PURE__ */ React7.createElement(
    import_select.Select.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    children,
    /* @__PURE__ */ React7.createElement(
      import_select.Select.Icon,
      {
        render: /* @__PURE__ */ React7.createElement(import_lucide_react3.ChevronDownIcon, { className: "pointer-events-none size-4 text-muted-foreground" })
      }
    )
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
  return /* @__PURE__ */ React7.createElement(import_select.Select.Portal, null, /* @__PURE__ */ React7.createElement(
    import_select.Select.Positioner,
    {
      side,
      sideOffset,
      align,
      alignOffset,
      alignItemWithTrigger,
      className: "isolate z-50"
    },
    /* @__PURE__ */ React7.createElement(
      import_select.Select.Popup,
      {
        "data-slot": "select-content",
        "data-align-trigger": alignItemWithTrigger,
        className: cn("relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
        ...props
      },
      /* @__PURE__ */ React7.createElement(SelectScrollUpButton, null),
      /* @__PURE__ */ React7.createElement(import_select.Select.List, null, children),
      /* @__PURE__ */ React7.createElement(SelectScrollDownButton, null)
    )
  ));
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ React7.createElement(
    import_select.Select.GroupLabel,
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
  return /* @__PURE__ */ React7.createElement(
    import_select.Select.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React7.createElement(import_select.Select.ItemText, { className: "flex flex-1 shrink-0 gap-2 whitespace-nowrap" }, children),
    /* @__PURE__ */ React7.createElement(
      import_select.Select.ItemIndicator,
      {
        render: /* @__PURE__ */ React7.createElement("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" })
      },
      /* @__PURE__ */ React7.createElement(import_lucide_react3.CheckIcon, { className: "pointer-events-none" })
    )
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ React7.createElement(
    import_select.Select.Separator,
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
  return /* @__PURE__ */ React7.createElement(
    import_select.Select.ScrollUpArrow,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React7.createElement(
      import_lucide_react3.ChevronUpIcon,
      null
    )
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ React7.createElement(
    import_select.Select.ScrollDownArrow,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React7.createElement(
      import_lucide_react3.ChevronDownIcon,
      null
    )
  );
}

// src/components/ui/separator.tsx
var import_separator = require("@base-ui/react/separator");
function Separator({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    import_separator.Separator,
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
var React8 = __toESM(require("react"), 1);
function Table({ className, ...props }) {
  return /* @__PURE__ */ React8.createElement(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto"
    },
    /* @__PURE__ */ React8.createElement(
      "table",
      {
        "data-slot": "table",
        className: cn("w-full caption-bottom text-sm", className),
        ...props
      }
    )
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ React8.createElement(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ React8.createElement(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ React8.createElement(
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
  return /* @__PURE__ */ React8.createElement(
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
  return /* @__PURE__ */ React8.createElement(
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
  return /* @__PURE__ */ React8.createElement(
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
  return /* @__PURE__ */ React8.createElement(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/tabs.tsx
var import_tabs = require("@base-ui/react/tabs");
var import_class_variance_authority4 = require("class-variance-authority");
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    import_tabs.Tabs.Root,
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
var tabsListVariants = (0, import_class_variance_authority4.cva)(
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
  return /* @__PURE__ */ React.createElement(
    import_tabs.Tabs.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ React.createElement(
    import_tabs.Tabs.Tab,
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
  return /* @__PURE__ */ React.createElement(
    import_tabs.Tabs.Panel,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 text-sm outline-none", className),
      ...props
    }
  );
}

// src/components/ui/tooltip.tsx
var import_tooltip = require("@base-ui/react/tooltip");
function TooltipProvider({
  delay = 0,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    import_tooltip.Tooltip.Provider,
    {
      "data-slot": "tooltip-provider",
      delay,
      ...props
    }
  );
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ React.createElement(import_tooltip.Tooltip.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ React.createElement(import_tooltip.Tooltip.Trigger, { "data-slot": "tooltip-trigger", ...props });
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
  return /* @__PURE__ */ React.createElement(import_tooltip.Tooltip.Portal, null, /* @__PURE__ */ React.createElement(
    import_tooltip.Tooltip.Positioner,
    {
      align,
      alignOffset,
      side,
      sideOffset,
      className: "isolate z-50"
    },
    /* @__PURE__ */ React.createElement(
      import_tooltip.Tooltip.Popup,
      {
        "data-slot": "tooltip-content",
        className: cn(
          "z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props
      },
      children,
      /* @__PURE__ */ React.createElement(import_tooltip.Tooltip.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5" })
    )
  ));
}

// src/components/AmbientBackground.tsx
function AmbientBackground({ className }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      "aria-hidden": true,
      className: cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "sg-ambient-gradient" }),
    /* @__PURE__ */ React.createElement("div", { className: "sg-ambient-orb sg-ambient-orb-1" }),
    /* @__PURE__ */ React.createElement("div", { className: "sg-ambient-orb sg-ambient-orb-2" }),
    /* @__PURE__ */ React.createElement("div", { className: "sg-ambient-orb sg-ambient-orb-3" }),
    /* @__PURE__ */ React.createElement("div", { className: "sg-ambient-grain" })
  );
}

// src/components/LoadingScreen.tsx
function LoadingScreen({ appName = "Sidgrove", className }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "fixed inset-0 flex items-center justify-center",
        className
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "sg-loading-card" }, /* @__PURE__ */ React.createElement("div", { className: "sg-loading-spinner" }), /* @__PURE__ */ React.createElement("p", { className: "sg-loading-label" }, "Loading ", appName, "\u2026"))
  );
}

// src/components/AppHeader.tsx
var React9 = __toESM(require("react"), 1);
function AppHeader({
  logo,
  appName,
  user,
  onSignOut,
  actions,
  className
}) {
  const initial = (user?.name || user?.email || "?")[0]?.toUpperCase();
  return /* @__PURE__ */ React9.createElement(
    "header",
    {
      className: cn(
        "sg-app-header flex items-center justify-between gap-4 px-6 py-4",
        className
      )
    },
    /* @__PURE__ */ React9.createElement("div", { className: "flex items-center gap-3" }, logo, appName && /* @__PURE__ */ React9.createElement("span", { className: "sg-app-header-name" }, appName)),
    /* @__PURE__ */ React9.createElement("div", { className: "flex items-center gap-3" }, actions, user && onSignOut && /* @__PURE__ */ React9.createElement(DropdownMenu, null, /* @__PURE__ */ React9.createElement(DropdownMenuTrigger, { className: "sg-app-header-avatar" }, user.image ? (
      // eslint-disable-next-line @next/next/no-img-element
      /* @__PURE__ */ React9.createElement("img", { src: user.image, alt: "", className: "h-full w-full rounded-full object-cover" })
    ) : /* @__PURE__ */ React9.createElement("span", null, initial)), /* @__PURE__ */ React9.createElement(DropdownMenuContent, { align: "end" }, user.name && /* @__PURE__ */ React9.createElement("div", { className: "px-2 py-1 text-sm font-medium" }, user.name), user.email && /* @__PURE__ */ React9.createElement("div", { className: "px-2 pb-2 text-xs text-muted-foreground" }, user.email), /* @__PURE__ */ React9.createElement(DropdownMenuItem, { onClick: onSignOut }, "Sign out"))))
  );
}

// src/components/LoginShell.tsx
var React10 = __toESM(require("react"), 1);
function LoginShell({ appName, tagline, logo, children, className }) {
  return /* @__PURE__ */ React10.createElement("main", { className: cn("sg-login-main", className) }, /* @__PURE__ */ React10.createElement("div", { className: "sg-login-card sg-login-spinning-border" }, /* @__PURE__ */ React10.createElement("div", { className: "sg-login-card-inner" }, logo && /* @__PURE__ */ React10.createElement("div", { className: "mb-6 flex justify-center" }, logo), /* @__PURE__ */ React10.createElement("h1", { className: "sg-login-title" }, appName), tagline && /* @__PURE__ */ React10.createElement("p", { className: "sg-login-tagline" }, tagline), /* @__PURE__ */ React10.createElement("div", { className: "mt-8 flex flex-col gap-3" }, children))));
}

// src/tokens/index.ts
var T = {
  // Brand
  brand: "#6874b4",
  brandStrong: "#4f5aa3",
  brandLight: "#e8eaf5",
  // Semantic
  tealStrong: "#0f766e",
  tealLight: "#d1faf4",
  coral: "#b8456b",
  coralLight: "#fce1ea",
  amberMid: "#c69b2d",
  amberLight: "#fdf2d2",
  // Neutrals (cool-slate with blue undertone)
  ink: "#0f1223",
  muted: "#5a607a",
  faint: "#9aa0bf",
  line: "#e4e6f0",
  // Surfaces
  bg: "#f0f1f8",
  cardBg: "rgba(255, 255, 255, 0.78)",
  cardBorder: "rgba(255, 255, 255, 0.65)",
  // Radius
  radius: "20px",
  radiusSm: "12px",
  radiusLg: "28px",
  // Shadows (multi-layer, diffuse)
  shadowSoft: "0 1px 2px rgba(15, 18, 35, 0.04), 0 4px 12px rgba(15, 18, 35, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
  shadowGlass: "0 2px 4px rgba(15, 18, 35, 0.04), 0 12px 32px rgba(15, 18, 35, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.55)"
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  Input,
  LoadingScreen,
  LoginShell,
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  cn,
  cssVars,
  tabsListVariants
});
//# sourceMappingURL=index.cjs.map