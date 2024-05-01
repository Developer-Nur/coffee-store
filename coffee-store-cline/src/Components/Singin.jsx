import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Provider/Provider";

const Singin = () => {

    const navigate = useNavigate()

    const { singinUser } = useContext(AuthProvider);

    const handleLoginForm = e => {
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;

        singinUser(email, password)
            .then(res => {
                e.target.reset()
                // console.log(res.user.metadata?.lastSignInTime)

                // updation a user to the base using patch
                const user = {
                    email,
                    lastLogedAt: res.user.metadata?.lastSignInTime
                }
                fetch('https://coffee-store-server-nur-mps-projects.vercel.app/user', {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    alert("Login success")
                    navigate('/')
                })
            })
            .catch(error => {
                console.error(error.message);
            })


    }

    return (
        <div>
            <h3 className="text-4xl text-center p-10 mt-10">Login!</h3>
            <div className="md:w-2/4 mx-auto mt-[60px] nav-bg shadow-2xl rounded-lg p-4">
                <form onSubmit={handleLoginForm} className="card-body font-poppins">
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
                        <button className="btn  sec-color prim-bg text-[18px]">Login</button>
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

export default Singin;