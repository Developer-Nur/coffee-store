import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCards = ({ coffeedata, coffees, setCoffees  }) => {

    const { _id, name, chef, photo } = coffeedata;


    // delete data from the ui
    const handleDeleteACoffee = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            
                            Swal.fire(
                                "Deleted!",
                                "Your Coffee has been deleted.",
                                "success"
                            )
                            
                            const remainingg = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingg);
                            console.log(remainingg)
                        }
                    }
                    )
            }
        });
    }

    return (
        <div className="flex justify-between items-center gap-2 p-4 rounded-lg shadow-lg">
            <figure>
                <img src={photo} alt="Coffee cover image" />
            </figure>
            <div>
                <p>Name: {name}</p>
                <p>Chef: {chef}</p>
                <p>Price: $10</p>
            </div>
            <div className="flex flex-col gap-2">
                <button className="btn btn-outline btn-info"><FaEye /></button>
                <Link to={`/updatecoffee/${_id}`}>
                    <button className="btn btn-outline btn-info"><FaPen /></button>
                </Link>
                <button className="btn btn-outline btn-error" onClick={() => handleDeleteACoffee(_id)}><MdDelete /></button>
            </div >
        </div >
    );
};

export default CoffeeCards;