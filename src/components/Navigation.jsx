function Navigation() {
    return(
        <header className="bg-slate-800 pt-2 pb-2 shadow-lg shadow-slate-900">
            <nav className="flex sm:justify-center space-x-3">
                {[
                    ['Start', '/'],
                    ['Platform finden', '/platforms/find'],
                    ['Platform erstellen', '/platforms/create'],
                    ['Wiki', '/docs'],
                ].map(([title, url]) => (
                    <a href={url} className="rounded-lg px-3 py-2 text-dark-blue font-medium transition ease-in duration-150 hover:scale-110 hover:underline">{title}</a>
                ))}
            </nav>
        </header>
    );
}

export default Navigation;