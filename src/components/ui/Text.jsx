import React from "react";
import clsx from "clsx";

const variantStyles = {
  h1: "text-28 font-bold font-serif",
  h2: "text-h2 font-bold font-serif",
  h3: "text-h3 font-semibold font-serif",
  h4: "text-h4 font-semibold font-serif",

  body: "text-body",
  small: "text-small",
  caption: "text-caption",

  eyebrow: "text-eyebrow font-bold uppercase tracking-[2.5px]",
  label: "text-label font-semibold",
  button: "text-button font-semibold",
};

const colorStyles = {
  primary: "text-primary",
  dark: "text-primary-dark",
  goldPrimary: "text-gold-primary",
  gold: "text-gold-muted",
  goldMuted:"text-gold-muted",
  accent: "text-secondary",
  heading: "text-heading",
  body: "text-foreground",
  muted: "text-muted",
  white: "text-white",
  inherit: "text-inherit",
  affiliation:"text-affiliation",
  address:"text-address",
  primaryDark:"text-primary-dark"
};

const weightStyles = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export default function Text({
  as,
  variant = "body",
  color = "body",
  weight,
  align,
  className,
  children,
  ...props
}) {
  const Component =
    as ||
    (["h1", "h2", "h3", "h4"].includes(variant)
      ? variant
      : "p");

  const classes = clsx(
    "m-0",
    variantStyles[variant] || variantStyles.body,
    colorStyles[color] || colorStyles.body,
    weight && weightStyles[weight],
    align && `text-${align}`,
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}