import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData()

    const { _id, name, chef, supplier, test, category, detail, photo } = coffee;

    console.log(coffee)


    const handleUpdateCoffeeForm = async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const test = form.test.value
        const category = form.category.value
        const detailes = form.detailes.value
        const photo = form.photo.value

        const toUpdateCoffeeData = { name, chef, supplier, test, category, detailes, photo }

        console.log(toUpdateCoffeeData)


        fetch(`https://coffee-store-server-nur-mps-projects.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toUpdateCoffeeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })

                }
                console.log(data)
            })
    }


    return (
        <div>
            <h3 className="text-4xl text-center py-10 my-10">Update coffee data</h3>
            <div className="flex justify-between items-center gap-2 p-4 rounded-lg shadow-lg">
                <figure>
                    <img src={photo} alt="Coffee cover image" />
                </figure>
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Test: {test}</p>
                    <p>Category: {category}</p>
                    <p>Detailes: {detail}</p>
                    <p>Price: $10</p>


                </div>
                {/* ========================================================= */}



            </div >

            <div className="w-full">
                <form onSubmit={handleUpdateCoffeeForm} className="card-body">
                    <div className="shadow-2xl p-7">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input name="chef" type="text" defaultValue={chef} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input name="supplier" type="text" defaultValue={supplier} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Test</span>
                            </label>
                            <input name="test" type="text" defaultValue={test} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input name="category" type="text" defaultValue={category} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail</span>
                            </label>
                            <input name="detailes" type="text" defaultValue={detail} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name="photo" type="text" defaultValue={photo} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update coffee</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;