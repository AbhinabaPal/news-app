import Link from "next/link";

export interface NavLinkProps {
    category: string;
    isActive: boolean;
}
function NavLink({category,isActive}: NavLinkProps) {

    return <Link href={`/news/${category}`} className={`navLink ${isActive && 'underline underline-offset-4 decoration-orange-400 font-bold text-lg'}`}>{category}</Link>
}

export default NavLink;
