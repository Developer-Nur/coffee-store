import Swal from 'sweetalert2'

const AddCoffee = () => {


    const handleAddCoffeeForm = async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const test = form.test.value
        const category = form.category.value
        const detail = form.detail.value
        const photo = form.photo.value

        const toAddCoffeeData = {name, chef, supplier, test, category, detail, photo}

        console.log(toAddCoffeeData)


        fetch("https://coffee-store-server-nur-mps-projects.vercel.app/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toAddCoffeeData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire({
                    title: 'Success!',
                    text: 'Added successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
                  form.reset()
            }
            console.log(data)
        })

    }

    return (
        <div>
            <h3 className="text-4xl text-center p-10 mt-10"
            >The add coffee components</h3>
            <div className="w-full">
                <form onSubmit={handleAddCoffeeForm} className="card-body">
                    <div className="shadow-2xl p-7">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Coffee Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input name="chef" type="text" placeholder="Chef" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input name="supplier" type="text" placeholder="Supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Test</span>
                            </label>
                            <input name="test" type="text" placeholder="Test" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input name="category" type="text" placeholder="Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail</span>
                            </label>
                            <input name="detail" type="text" placeholder="Detail" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo ULR" className="input input-bordered" required />
                        </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add coffee</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;