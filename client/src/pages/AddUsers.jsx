import { useState } from "react";
import { addUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUsers = () => {
  const defaultValues = {
    name: "",
    designation: "",
    city: "",
    country: "",
    bio: "",
  };

  const [values, setValues] = useState(defaultValues);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(values);

    try {
      await addUser(values);
      toast.success("Data Submitted Successfully!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigation("/");  
      }, 2000);

    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const navigation = useNavigate();

  const onInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br">
        <div className="relative w-[50%] mt-20 mb-8 mx-auto break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 rounded-xl">
          <form className="" onSubmit={(e) => onSubmit(e)}>
            {/* <form className=""> */}
            <div className="rounded-xl shadow-xl p-4 px-4 md:p-8">
              <div className="text-center">
                <div className="pt-6 mx-6 text-center border-t border-gray-200 dark:border-gray-700/50"></div>
                <p className="font-bold text-2xl text-gray-300">
                  Add Personal Details
                </p>
                <p className="text-cyan-500 text-lg">
                  Please fill required fields.
                </p>
                <div className="pt-6 mx-6 text-center border-t border-gray-200 dark:border-gray-700/50"></div>
              </div>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-300">
                  <div className="relative order-first md:order-last h-full md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 mt-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
                    <span className="text-gray-400 opacity-75">
                      <svg
                        className="w-14 h-[395px]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="0.7"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="rounded-l-lg p-4 flex flex-col justify-center items-center">
                    <label
                      className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md px-2 py-2 bg-gray-700 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-500 active:bg-gray-700 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                      htmlFor="restaurantImage"
                    >
                      Select image
                      <input
                        id="restaurantImage"
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                      />
                    </label>
                    {/* <button
                      className="inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-700 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-500 active:bg-gray-700 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                    >
                      remove image
                    </button> */}
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label className="text-amber-400" htmlFor="full_name">
                        Full Name
                      </label>
                      <input
                        placeholder="Jane Doe"
                        type="name"
                        name="name"
                        id="name"
                        onChange={(e) => onInputChange(e)}
                        className="text-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-800"
                        value={values.name}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label className="text-amber-400" htmlFor="email">
                        Designation
                      </label>
                      <input
                        type="text"
                        name="designation"
                        id="designation"
                        className="text-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-800"
                        value={values.designation}
                        placeholder="Software Engineer"
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label className="text-amber-400" htmlFor="city">
                        City
                      </label>
                      <input
                        type="address"
                        name="city"
                        id="city"
                        className="text-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-800"
                        value={values.city}
                        placeholder="City"
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-amber-400" htmlFor="country">
                        Country
                      </label>
                      <input
                        type="address"
                        name="country"
                        id="country"
                        className="text-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-800"
                        value={values.country}
                        placeholder="Country"
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label className="text-amber-400" htmlFor="email">
                        Biography
                      </label>
                      <textarea
                        style={{ resize: "none" }}
                        type="text"
                        name="bio"
                        id="bio"
                        rows="8"
                        className="text-gray-300 h-40 border mt-1 rounded px-4 w-full bg-gray-800 pt-3"
                        value={values.bio}
                        placeholder="Your bio here ... "
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          className="inline-flex items-center shadow-md my-2 px-4 py-2 bg-gray-700 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-500 active:bg-gray-700 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddUsers;
