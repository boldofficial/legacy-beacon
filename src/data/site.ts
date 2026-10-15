import content from "./site.json";

export const site = {
  ...content,
  bookingUrl: import.meta.env.PUBLIC_BOOKING_URL || content.bookingUrl,
  formEndpoint: import.meta.env.PUBLIC_FORMSUBMIT_ENDPOINT || "",
};
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
