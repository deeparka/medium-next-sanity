import Link from "next/link";
import Select from "react-select";
import Header from "../components/Header";

function create() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <Header />
      {/* <form className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
                <h3 className="text-3xl font-bold text-yellow-500">
                    Create a New Blog
                </h3>
                <hr className="py-3 mt-2" />

                <label className="block mb-5">
                    <span className="text-gray-700">Title</span>
                    <input
                        className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                        type="text"
                        placeholder="Keep the title short"
                    />
                </label>
                <label className="block mb-5">
                    <span className="text-gray-700">Description</span>
                    <input
                        className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                        type="text"
                        placeholder="word limit 30"
                    />
                </label>
                <label className="block mb-5">
                    <span className="text-gray-700">Author</span>
                    <Select
                        options={options}
                        className="mt-1"
                        placeholder="author name"
                    />
                    <Link href="/author">
                        <input
                            className="mt-3 shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                            type="button"
                            value="Create new author"
                        />
                    </Link>
                </label>
                <label className="block mb-5">
                    <span className="text-gray-700">
                        Thumbnail for the post
                    </span>
                    <input
                        className="py-2 form-input mt-1 block w-full"
                        type="file"
                    />
                </label>
                <label className="block mb-5">
                    <span className="text-gray-700">Body</span>
                    <textarea
                        className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring"
                        rows={10}
                        placeholder="Body of the post"
                    />
                </label>
                <input
                    className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                    type="submit"
                    value="Submit"
                />
            </form> */}
      <p className="text-center mt-40 font-bold">
        Currently working on Create Blog and Author feature
      </p>
    </div>
  );
}

export default create;
