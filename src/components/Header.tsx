import { flexing } from "../utils";
import Category from "./SubCategory";

const Header = () => {
  return (
    <>
      <section className={`${flexing} justify-between px-8 py-7 Rubik w5 `}>
        <div>LOGO GOES HERE</div>

        <h3 className="text-gray-400 italic">Welcome to this website</h3>

        <div className={`${flexing} gap-x-10`}>
          <ul className={`${flexing} text-[13px] gap-x-4`}>
            <li>ContactUs</li>
            <li>AboutUS</li>
          </ul>

          <div>
            <h1>Eng</h1>

            <p>search</p>
          </div>
        </div>
      </section>
      <Category />
    </>
  );
};

export default Header;
