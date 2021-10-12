import Link from "next/link";

export default function NavbarElement({ name, link }) {
  return <Link href={link}>{name}</Link>;
}
