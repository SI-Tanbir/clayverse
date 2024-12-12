import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import toast, { Toaster } from 'react-hot-toast';

const Signin = () => {
  const [log, setLogin] = useState(false);
  const { Signin } = useContext(AuthContext);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    Signin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLogin(true);
        toast.success('Successfully signed in!');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error('Sign-in failed: ' + errorMessage);
      });
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Signin here
          </h1>
          <form onSubmit={handleSignin} className="space-y-4">
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
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <button className="btn btn-primary">Sign in</button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Signin;