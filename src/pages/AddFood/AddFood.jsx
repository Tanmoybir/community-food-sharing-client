import { useState } from "react";
import Container from "../../components/Container/Container";
import { auth } from "../../firebase/firebase.config";


const AddFood = () => {
    const [food_image,setFood_image] = useState('')
    const [food_name,setFood_name] = useState('')
    const [food_quantity,setFood_quantity] = useState('')
    const [pickup_location,setPickup_location] = useState('')
    const [expired_datetime,setExpired_datetime] = useState('')
    const [additional_notes,setAdditional_notes] = useState('')
    const image = auth.currentUser.photoURL
    const name = auth.currentUser.displayName
    const donator = {image,name}
    console.log(donator);
    return (
        <Container>
            <div className="mt-5 px-3">
            <form className="max-w-[400px] md:max-w-lg lg:max-w-3xl w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                <h1 className="text-4xl text-white font-bold text-center pt-2">ADD FOOD</h1>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Food Image</label>
                    <input onBlur={(e) => setFood_image(e.target.value)} className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="url" name="image" required placeholder="Image URl" id="img" />
                </div>
                {/* food name */}
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Food Name</label>
                    <input onBlur={(e) => setFood_name(e.target.value)} className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="food_name" required placeholder="Food Name" id="food_name" />
                </div>
                {/* Food Quantity */}
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Food Quantity</label>
                    <input onBlur={(e) => setFood_quantity(e.target.value)} className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="number" name="brand" placeholder="Food Quantity" id="brand" />
                </div>
                {/* expired_datetime */}
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Expired Datetime</label>
                    <input onBlur={(e) => setExpired_datetime(e.target.value)} className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="date" name="description" placeholder="Expired Datetime" id="description" />
                </div>
                {/* pickup_location */}
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Pickup Location</label>
                    <input onBlur={(e) => setPickup_location(e.target.value)} className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="description" placeholder="Pickup Location" id="description" />
                </div>
                {/* additional_notes */}
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Additional Notes</label>
                    <input onBlur={(e) => setAdditional_notes(e.target.value)} className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" name="description" placeholder="Additional Notes" id="description" />
                </div>
                <input className="w-full my-5 py-2 text-3xl bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg" type="button" value="ADD" />

            </form>
            </div>
        </Container>
    );
};

export default AddFood;