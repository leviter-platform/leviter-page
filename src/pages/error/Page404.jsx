import Navigation from "../../components/Navigation";

function Page404() {
    return(
        <div className="bg-white h-screen">
            <Navigation></Navigation>

            <div className="grid place-items-center py-24">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Seite nicht gefunden</p>
                <p className="mt-6 text-base leading-7 text-gray-600">Wir konnten leider nicht die gewünschte Seite finden.</p>
            </div>
            </div>
        </div>
    );
}

export default Page404;