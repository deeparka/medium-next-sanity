import Header from "../components/Header";

function author() {
    return (
        <div>
            <Header />
            <form className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
                <h3 className="text-3xl font-bold text-yellow-500">
                    Regiester as a new author
                </h3>
                <hr className="py-3 mt-2" />

                <label className="block mb-5">
                    <span className="text-gray-700">Name</span>
                    <input
                        className="shadow border rounded py-2 px-3 form-input mt-1
                    block w-full ring-yellow-500 outline-none focus:ring"
                        type="text"
                        placeholder="John Doe"
                    />
                </label>
                <label className="block mb-5">
                    <span className="text-gray-700">Image</span>
                    <input
                        className="py-2 form-input mt-1 block w-full"
                        type="file"
                    />
                </label>
                <label className="block mb-5">
                    <span className="text-gray-700">Bio</span>
                    <textarea
                        className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                        rows={10}
                        placeholder="Write your Bio"
                    />
                </label>
                <input
                    className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default author;
