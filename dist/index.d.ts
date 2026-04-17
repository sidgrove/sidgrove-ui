import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { useRender } from '@base-ui/react/use-render';
import { Button as Button$1 } from '@base-ui/react/button';
import { Dialog as Dialog$1 } from '@base-ui/react/dialog';
import { Menu } from '@base-ui/react/menu';
import { Select as Select$1 } from '@base-ui/react/select';
import { Separator as Separator$1 } from '@base-ui/react/separator';
import { Tabs as Tabs$1 } from '@base-ui/react/tabs';
import { Tooltip as Tooltip$1 } from '@base-ui/react/tooltip';
import { ClassValue } from 'clsx';

declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Alert({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>): React.JSX.Element;
declare function AlertTitle({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function AlertDescription({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function AlertAction({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, render, ...props }: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>): React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, ...props }: Button$1.Props & VariantProps<typeof buttonVariants>): React.JSX.Element;

declare function Card({ className, size, ...props }: React.ComponentProps<"div"> & {
    size?: "default" | "sm";
}): React.JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardAction({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;

declare function Dialog({ ...props }: Dialog$1.Root.Props): React.JSX.Element;
declare function DialogTrigger({ ...props }: Dialog$1.Trigger.Props): React.JSX.Element;
declare function DialogPortal({ ...props }: Dialog$1.Portal.Props): React.JSX.Element;
declare function DialogClose({ ...props }: Dialog$1.Close.Props): React.JSX.Element;
declare function DialogOverlay({ className, ...props }: Dialog$1.Backdrop.Props): React.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: Dialog$1.Popup.Props & {
    showCloseButton?: boolean;
}): React.JSX.Element;
declare function DialogHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function DialogFooter({ className, showCloseButton, children, ...props }: React.ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): React.JSX.Element;
declare function DialogTitle({ className, ...props }: Dialog$1.Title.Props): React.JSX.Element;
declare function DialogDescription({ className, ...props }: Dialog$1.Description.Props): React.JSX.Element;

declare function DropdownMenu({ ...props }: Menu.Root.Props): React.JSX.Element;
declare function DropdownMenuPortal({ ...props }: Menu.Portal.Props): React.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: Menu.Trigger.Props): React.JSX.Element;
declare function DropdownMenuContent({ align, alignOffset, side, sideOffset, className, ...props }: Menu.Popup.Props & Pick<Menu.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">): React.JSX.Element;
declare function DropdownMenuGroup({ ...props }: Menu.Group.Props): React.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: Menu.GroupLabel.Props & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: Menu.Item.Props & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React.JSX.Element;
declare function DropdownMenuSub({ ...props }: Menu.SubmenuRoot.Props): React.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: Menu.SubmenuTrigger.Props & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuSubContent({ align, alignOffset, side, sideOffset, className, ...props }: React.ComponentProps<typeof DropdownMenuContent>): React.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }: Menu.CheckboxItem.Props & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: Menu.RadioGroup.Props): React.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, inset, ...props }: Menu.RadioItem.Props & {
    inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: Menu.Separator.Props): React.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;

declare function Input({ className, type, ...props }: React.ComponentProps<"input">): React.JSX.Element;

declare const Select: typeof Select$1.Root;
declare function SelectGroup({ className, ...props }: Select$1.Group.Props): React.JSX.Element;
declare function SelectValue({ className, ...props }: Select$1.Value.Props): React.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: Select$1.Trigger.Props & {
    size?: "sm" | "default";
}): React.JSX.Element;
declare function SelectContent({ className, children, side, sideOffset, align, alignOffset, alignItemWithTrigger, ...props }: Select$1.Popup.Props & Pick<Select$1.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger">): React.JSX.Element;
declare function SelectLabel({ className, ...props }: Select$1.GroupLabel.Props): React.JSX.Element;
declare function SelectItem({ className, children, ...props }: Select$1.Item.Props): React.JSX.Element;
declare function SelectSeparator({ className, ...props }: Select$1.Separator.Props): React.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof Select$1.ScrollUpArrow>): React.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof Select$1.ScrollDownArrow>): React.JSX.Element;

declare function Separator({ className, orientation, ...props }: Separator$1.Props): React.JSX.Element;

declare function Table({ className, ...props }: React.ComponentProps<"table">): React.JSX.Element;
declare function TableHeader({ className, ...props }: React.ComponentProps<"thead">): React.JSX.Element;
declare function TableBody({ className, ...props }: React.ComponentProps<"tbody">): React.JSX.Element;
declare function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">): React.JSX.Element;
declare function TableRow({ className, ...props }: React.ComponentProps<"tr">): React.JSX.Element;
declare function TableHead({ className, ...props }: React.ComponentProps<"th">): React.JSX.Element;
declare function TableCell({ className, ...props }: React.ComponentProps<"td">): React.JSX.Element;
declare function TableCaption({ className, ...props }: React.ComponentProps<"caption">): React.JSX.Element;

declare function Tabs({ className, orientation, ...props }: Tabs$1.Root.Props): React.JSX.Element;
declare const tabsListVariants: (props?: ({
    variant?: "default" | "line" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function TabsList({ className, variant, ...props }: Tabs$1.List.Props & VariantProps<typeof tabsListVariants>): React.JSX.Element;
declare function TabsTrigger({ className, ...props }: Tabs$1.Tab.Props): React.JSX.Element;
declare function TabsContent({ className, ...props }: Tabs$1.Panel.Props): React.JSX.Element;

declare function TooltipProvider({ delay, ...props }: Tooltip$1.Provider.Props): React.JSX.Element;
declare function Tooltip({ ...props }: Tooltip$1.Root.Props): React.JSX.Element;
declare function TooltipTrigger({ ...props }: Tooltip$1.Trigger.Props): React.JSX.Element;
declare function TooltipContent({ className, side, sideOffset, align, alignOffset, children, ...props }: Tooltip$1.Popup.Props & Pick<Tooltip$1.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">): React.JSX.Element;

type Props$3 = {
    className?: string;
};
declare function AmbientBackground({ className }: Props$3): React.JSX.Element;

type Props$2 = {
    appName?: string;
    className?: string;
};
declare function LoadingScreen({ appName, className }: Props$2): React.JSX.Element;

type Props$1 = {
    logo?: React.ReactNode;
    appName?: string;
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
    onSignOut?: () => void;
    actions?: React.ReactNode;
    className?: string;
};
declare function AppHeader({ logo, appName, user, onSignOut, actions, className, }: Props$1): React.JSX.Element;

type Props = {
    appName: string;
    tagline?: string;
    logo?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
};
declare function LoginShell({ appName, tagline, logo, children, className }: Props): React.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

declare const T: {
    readonly brand: "#6874b4";
    readonly brandLight: "#eef0fa";
    readonly brandMid: "#a8b0d8";
    readonly brandStrong: "#3d4785";
    readonly coral: "#b8456b";
    readonly coralLight: "#fdf2f6";
    readonly coralMid: "#e0a3b8";
    readonly amber: "#c69b2d";
    readonly amberMid: "#c69b2d";
    readonly amberDark: "#7a5e1e";
    readonly amberLight: "#fdf9ee";
    readonly tealStrong: "#0f766e";
    readonly tealLight: "#d1faf4";
    readonly ink: "#1a1d2e";
    readonly muted: "#525672";
    readonly faint: "#8b8fa6";
    readonly line: "#dfe1ee";
    readonly bg: "#f0f1f8";
    readonly surface: "#f6f7fc";
    readonly wash: "#f0f1f8";
    readonly cardBg: "rgba(255, 255, 255, 0.72)";
    readonly cardStrong: "rgba(255, 255, 255, 0.85)";
    readonly cardBorder: "rgba(255, 255, 255, 0.65)";
    readonly radius: "20px";
    readonly radiusSm: "12px";
    readonly radiusLg: "28px";
    readonly shadowSurface: "0 2px 4px 0 rgba(0,0,0,0.04), 0 1px 2px 0 rgba(0,0,0,0.06), 0 0 1px 0 rgba(0,0,0,0.04)";
    readonly shadowSoft: "0 1px 3px rgba(0,0,0,0.03), 0 4px 16px rgba(104,116,180,0.04), 0 12px 32px rgba(104,116,180,0.03)";
    readonly shadowLift: "0 2px 8px rgba(104,116,180,0.06), 0 8px 24px rgba(104,116,180,0.08), 0 20px 48px rgba(50,50,110,0.06)";
    readonly shadowGlass: "0 2px 4px rgba(26, 29, 46, 0.04), 0 12px 32px rgba(26, 29, 46, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.55)";
};
type BrandToken = typeof T;
declare const cssVars: {
    readonly brand: "var(--sg-brand)";
    readonly brandStrong: "var(--sg-brand-strong)";
    readonly ink: "var(--sg-ink)";
    readonly muted: "var(--sg-muted)";
    readonly cardBg: "var(--sg-card-bg)";
    readonly cardBorder: "var(--sg-card-border)";
    readonly radius: "var(--sg-radius)";
    readonly shadowGlass: "var(--sg-shadow-glass)";
};

export { Alert, AlertAction, AlertDescription, AlertTitle, AmbientBackground, AppHeader, Badge, type BrandToken, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Input, LoadingScreen, LoginShell, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, T, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cn, cssVars, tabsListVariants };
