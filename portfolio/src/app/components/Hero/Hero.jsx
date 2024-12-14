"use client"
import Image from "next/image";
import { useTheme } from 'next-themes';

export default function Hero() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <section id="home" className="bg-gray-900 p-4">
            <div className="flex justify-center mt-4">
                <button onClick={toggleTheme} id="toggle" className="text-gray-50 bg-slate-900 border border-white px-4 py-2 rounded-md">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
            <h1 className="text-6xl text-center font-">I'm <span className="text-blue-600">Jenny</span>,<br />Product Designer</h1>
            <div className="flex justify-center space-x-2">
                <Image src="/circle.svg" alt="Hero" width={500} height={500} className="m-5" />
            </div>
        </section>
    );
}