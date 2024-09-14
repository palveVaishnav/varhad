export function NavigationBar() {
    return (
        <div className="flex border-black shadow-sm justify-around items-center z-10 backdrop-blur-sm">
            {/* Logo */}
            <div className="p-2 font-bold font-mono flex items-center">
                The{' '}<span className="bg-orange-600 text-white p-2 rounded-md">Varhad</span>{' '}Group.
            </div>
            {/* Navigation */}
            <div className="flex gap-1 items-center font-semibold">
                <a
                    href="/"
                    className="p-2 px-3 hover:bg-orange-400 rounded-lg slowHover"
                >Home</a>
                <a
                    href="/about"
                    className="p-2 px-3 hover:bg-orange-400 rounded-lg slowHover"
                >About</a>
                <a
                    href="/projects"
                    className="p-2 px-3 hover:bg-orange-400 rounded-lg slowHover"
                >Projects</a>
                <a
                    href="/collaborations"
                    className="p-2 px-3 hover:bg-orange-400 rounded-lg slowHover"
                >Collaborations</a>
                <a
                    href="/contact"
                    className="p-2 px-3 hover:bg-orange-400 rounded-lg slowHover"
                >Contact</a>
            </div>
        </div>
    )
}