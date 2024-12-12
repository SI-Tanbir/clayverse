import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast.success('Successfully created!');

const Signup = () => {

  const { Signup } = useContext(AuthContext);
  const [trigger, setTrigger] = useState(false);

  const handleSignup = (e) => {
    setTrigger(false) //reset value
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    Signup(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user);

        user && setTrigger(true);
        e.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Signup here
          </h1>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary"
              />
            </div>

            <div>
              <button onClick={notify} className="btn btn-primary">Register</button>
              <Toaster />
            {
              trigger && <p>Register successful</p>
            }
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
