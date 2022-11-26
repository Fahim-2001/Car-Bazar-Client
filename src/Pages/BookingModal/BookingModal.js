import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ carInfo }) => {
  const { user } = useContext(AuthContext);
  const { model, resale_price } = carInfo;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const resalePrice = form.resalePrice.value;
    const phone = form.phone.value;
    const meetingPlace = form.meetingPlace.value;
    const orderInfo = {
      model,
      name,
      email,
      resalePrice,
      phone,
      meetingPlace,
    };
    console.log(orderInfo);
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-primary font-semibold">{model}</h3>
          <form onSubmit={handleSubmit} action="">
            <label>
              <p className="text-left font-semibold">Name</p>
              <input
                type="text"
                name="name"
                defaultValue={user.displayName}
                readOnly
                className="input w-full input-bordered my-3"
              />
            </label>
            <label>
              <p className="text-left font-semibold">Email</p>
              <input
                type="text"
                name="email"
                defaultValue={user.email}
                readOnly
                className="input w-full input-bordered my-3"
              />
            </label>
            <label>
              <p className="text-left font-semibold">Resale Price(BDT)</p>
              <input
                type="text"
                name="resalePrice"
                defaultValue={resale_price}
                readOnly
                className="input w-full input-bordered my-3"
              />
            </label>
            <label>
              <p className="text-left font-semibold">Your Phone Number</p>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number Here"
                className="input w-full input-bordered my-3"
              />
            </label>
            <label>
              <p className="text-left font-semibold">Place of Meeting</p>
              <input
                type="text"
                name="meetingPlace"
                placeholder="Give a place of meeting"
                className="input w-full input-bordered my-3"
              />
            </label>
            <button type="submit" className="btn btn-primary my-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
