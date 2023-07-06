import Navigation from "../../components/Navigation";

function PlatformCreate() {
    return (
        <div className="bg-white h-screen">
            <Navigation></Navigation>
            <form action="/platforms/create/step/tow">
                <div className="flex justify-between pt-6 text-center">
                    <div></div>
                    <div className="w-2/6 outline outline-offset-2 outline-1 outline-dark-blue rounded-lg">
                        <div className="pt-3 pb-3">
                            <p>Erstelle eine Platform</p>
                        </div>
                        <hr />
                        <div className="mb-4 pt-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Wie soll die Platform heißen?
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-3/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" name="name" type="text" placeholder="Mustername" />
                        </div>
                        <hr />
                        <div className="mb-4 pt-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Unter welcher URL soll deine Platform ereichbar sein?
                            </label>
                            <input
                                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="sub-url" name="sub-url" type="text" placeholder="mustername" />
                            <span className="input-group-text" id="basic-addon3">.leviter.de</span>
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

export default PlatformCreate;