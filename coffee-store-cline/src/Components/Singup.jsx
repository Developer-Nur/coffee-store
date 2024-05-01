import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Provider/Provider";


const Singup = () => {

    const navigate = useNavigate()

    const { createUser } = useContext(AuthProvider)

    const handleSingUpForm = e => {
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                e.target.reset()
                alert("User created successfully");

                // set the user to the data base via server
                const userCreatedAt = res.user?.metadata?.creationTime;
                const user = { email, password, userCreatedAt }

                console.log("CHECK IF HAVE creationTime",user)

                fetch('https://coffee-store-server-nur-mps-projects.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => alert("User added to the database"))

                navigate('/singin')

            })
            .catch(error => {
                console.error(error.message);
            })


    }

    return (
        <div>
            <h3 className="text-4xl text-center p-10 mt-10">Sing UP!</h3>
            <div className="md:w-2/4 mx-auto mt-[60px] nav-bg shadow-2xl rounded-lg p-4">
                <form onSubmit={handleSingUpForm} className="card-body font-poppins">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn  sec-color prim-bg text-[18px]">Sing UP</button>
                    </div>
                </form>
                <div className="text-center">
                    <div className="divider">OR</div>
                    <section className="space-x-6">
                        <button className="shadow-xl btn btn-ghost">Login with Google</button>
                        <button className="shadow-xl btn btn-ghost">Login with GitHub</button>
                    </section>
                </div>
                <p className="accent-color mt-6">Do not have an account?<span className="underline prim-title hover:text-[#F36F1B]"> <Link >Register</Link></span></p>
            </div>
        </div>
    );
};

export default Singup;