import React from "react";

const Categories = () => {
  return (
    <div className="text-center">
      <h1 className="text-primary text-4xl font-bold my-20">
        Categories of Cars
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center my-24">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://www.forbes.com/wheels/wp-content/uploads/2022/07/Best_Sedans_2022_SEO.jpg"
              alt="Sedan"
            />
          </figure>
          <div className="card-body flex place-content-between">
            <h2 className="card-title">Sedan</h2>

            <div className="card-actions justify-end ">
              <button className="btn btn-primary">See Cars</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/cms/uploads/hwzbydyvogdvzbgrpbmw"
              alt="SUV"
            />
          </figure>
          <div className="card-body flex place-content-between">
            <h2 className="card-title">SUV</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See Cars</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://www.nissanbd.com/assets/img/urvan/overview-topimage.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex place-content-between">
            <h2 className="card-title">Microbus</h2>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">See Cars</button>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary mb-20">See All Cars</button>
    </div>
  );
};

export default Categories;
