import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AllUsers = () => {

    // geting all users from api
    const userFromDB = useLoaderData();
    const [users, setUsers] = useState(userFromDB);


    // delete data from the database then ui
    const handledeleteusers = _id => {
        console.log("user id to delete", _id)

        Swal.fire({
            title: "Are you sure you want to delete this user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-nur-mps-projects.vercel.app/users/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                "Deleted!",
                                "The user has been deleted.",
                                "success"
                            )
                            const remaining = users.filter(user => user._id !== _id);
                            setUsers(remaining);
                            console.log(remaining)
                        }
                    })
            }
        });

    }

    return (
        <div>
            <h2 className="text-4xl text-center p-10 mt-10">All users</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    {/* head */}
                    <thead>
                        <tr>
                            <th>Account Created at</th>
                            <th>Email</th>
                            <th>Last Log</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={index}>
                                    <td>{user.userCreatedAt}</td>
                                    <th>{user.email}</th>
                                    <td>{user.lastLog}</td>
                                    <th><button onClick={() => handledeleteusers(user._id)} className="btn bg-red-500">X</button></th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;