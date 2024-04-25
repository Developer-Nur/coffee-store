import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import CoffeeCards from "../Components/CoffeeCards";
import { useState } from "react";

const Home = () => {

    const coffeeDatas = useLoaderData();

    const [coffees, setCoffees] = useState(coffeeDatas);


    return (
        <div>
            <Banner></Banner>

            <div className=" lg:grid grid-cols-2 justify-between items-center gap-3">
                {
                    coffees.map((coffeedata, index) => <CoffeeCards
                        key={index}
                        coffeedata={coffeedata}
                        coffees={coffees}
                        setCoffees={setCoffees}



                    ></CoffeeCards>)
                }
            </div>
        </div>
    );
};

export default Home;