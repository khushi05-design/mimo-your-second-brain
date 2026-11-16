import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
        bg-slate-950
        dark:bg-slate-950
        text-white
        py-20
        px-6
      "
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              🌸 LifeOS
            </h2>

            <p className="text-slate-400 leading-7">
              Your adorable AI companion for productivity,
              wellness, and daily organization.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-5 text-white">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-pink-400 transition cursor-pointer">
                Features
              </li>

              <li className="hover:text-pink-400 transition cursor-pointer">
                Dashboard
              </li>

              <li className="hover:text-pink-400 transition cursor-pointer">
                Mimo AI
              </li>

              <li className="hover:text-pink-400 transition cursor-pointer">
                Pricing
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-5 text-white">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-pink-400 transition cursor-pointer">
                About
              </li>

              <li className="hover:text-pink-400 transition cursor-pointer">
                Careers
              </li>

              <li className="hover:text-pink-400 transition cursor-pointer">
                Blog
              </li>

              <li className="hover:text-pink-400 transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div>
            <h3 className="font-semibold mb-5 text-white">
              Get Started
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/register"
                className="
                  bg-pink-500
                  text-center
                  py-3
                  rounded-full
                  hover:bg-pink-400
                  transition
                "
              >
                Create Account
              </Link>

              <Link
                to="/login"
                className="
                  border
                  border-slate-700
                  text-center
                  py-3
                  rounded-full
                  hover:bg-slate-800
                  hover:border-pink-400
                  transition
                "
              >
                Login
              </Link>

            </div>
          </div>

        </div>

        <div
          className="
            border-t
            border-slate-800
            mt-16
            pt-8
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p className="text-slate-500">
            © 2026 LifeOS. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-slate-500">
            Built with

            <Heart
              size={18}
              className="text-pink-400 fill-pink-400"
            />

            by Khushi
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;