import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="w-full mx-10 px-3 flex justify-between items-center py-4  bg-slate-50 text-black  rounded-full">
            <Link href="/"> Home </Link>
            <Link href="/#about"> About </Link>
            <Link href="/#contact"> Services </Link>
            <p>Logo</p>
            <Link href="/#portfolio"> Resume </Link>
            <Link href="/#blog"> Project </Link>
            <Link href="/#contact"> Contact </Link>
        </nav>
    );
}