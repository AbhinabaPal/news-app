import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
function Header() {
    return (
        <header>
            <div className="grid grid-cols-3  p-10 items-center">
                <Bars3Icon className="h-8 w-8 cursor-pointer" />
                <Link href={"/"} prefetch={false}>
                    <h1 className="text-2xl font-bold font-serif text-center">
                        A{" "}
                        <span className="underline underline-offset-8 decoration-orange-400 decoration-4 px-2">
                            NEWs
                        </span>{" "}
                        App
                    </h1>
                </Link>
                <div className="flex items-center justify-end">
                    {/* DarkModeButton */}
                    <button className="hidden md:inline bg-slate-900 text-white text-sm px-2 lg:px-4 py-1 lg:py-2 rounded-full dark:bg-slate-800">
                        Subscribe Now
                    </button>
                </div>
            </div>
            {/* NavLinks */}
            <NavLinks />
            {/* SearchBox */}
            <SearchBox/>
        </header>
    );
}

export default Header;
