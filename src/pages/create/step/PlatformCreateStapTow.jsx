import Navigation from "../../../components/Navigation";

function PlatformCreateStepTow(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.get('name') == null || urlParams.get('sub-url') == null)
        window.location.replace("../");
    if (urlParams.get('name') === "" || urlParams.get('sub-url') === "")
        window.location.replace("../");

    return (
        <div className="bg-white h-screen">
            <Navigation></Navigation>
            <form action="/platforms/create/step/three">
                <div className="flex justify-between pt-6 text-center">
                    <div></div>
                    <div className="w-2/6 outline outline-offset-2 outline-1 outline-dark-blue rounded-lg">
                        <div className="pt-3 pb-3">
                            <p>Erstelle eine Platform</p>
                        </div>
                        <hr />
                        <div className="mb-4 pt-3">
                            <p>Der Name deiner Platform lautet: {urlParams.get('name')}</p>
                            <p>Die URL deiner Platform lautet: {urlParams.get('sub-url')}.leviter.de</p>
                        </div>
                        <hr />
                        <div className="mb-4 pt-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Was sollen die einlogdaten deines Administrator Account dein?
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-3/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="admin-name" name="admin-name" type="text" placeholder="Name" />
                            <br />
                            <input
                                className="shadow appearance-none border rounded w-3/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="admin-email" name="admin-email" type="email" placeholder="Email" />
                        </div>
                        <hr />
                        <div className="pt-3 pb-3">
                            <button
                                className="py-2 px-4 bg-sky-500 text-white font-semibold rounded-full shadow-md transition ease-in duration-150 hover:scale-105 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                Weiter
                            </button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </form>
        </div>
    );
}

export default PlatformCreateStepTow;