import Banner from "../../../assets/Banner.png";
const HeaderCard = () => {
  return (
    <div className="HeaderCard">
      <div className="rounded-2xl border border-white">
        <div className="p-10 py-16 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <h1
              className="font-extrabold text-white text-2xl"
              style={{ fontSize: "3.5rem", lineHeight: "3.5rem" }}
            >
              Shop our Stunning <br />
              Shoe Collection
            </h1>
            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quia molestias repellat earum impedit officiis harum optio sit
              itaque. Eum. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Deleniti nesciunt eius
            </p>
            <div
              className="flex mt-10 gap-5
            "
            >
              <a
                href="/"
                className="text-sm font-semibold p-2 pr-5 pl-5 leading-6 text-black bg-white rounded-3xl"
              >
                Sign up
              </a>
              <a
                href="/"
                className="text-sm font-semibold p-2 pr-5 pl-5 leading-6 text-white bg-transparent border border-white rounded-3xl"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img className="w-96" src={Banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
