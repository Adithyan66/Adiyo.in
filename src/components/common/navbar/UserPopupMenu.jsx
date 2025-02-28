

import { useState } from "react";


import SignupForm from "../authmodal/SignupForm";
import LoginForm from "../authmodal/LoginForm";
import Forgot from "../authmodal/Forgot";



import {
  ProfileIcon,
  AdiyoPlusZoneIcon,
  OrdersIcon,
  RewardsIcon,
  GiftCardsIcon,
  BecomeSellerIcon,
  UserLogo,
  Logout
} from "../../../icons/icons";

import { useSelector } from "react-redux";


function UserPopupMenu({ popupRef }) {


  const [loginpop, setLoginpop] = useState(false);
  const [activeForm, setActiveForm] = useState("login"); // "login", "signup", "forgot", "reset"

  const user = useSelector((state) => state.user.userInfo);

  console.log("userInfo form userpopup", user);

  const handleOverlayClick = () => {
    setLoginpop(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        ref={popupRef}
        className="absolute right-20 w-[250px] bg-white shadow-lg rounded-lg overflow-hidden z-50 top-25 px-5"
      >


        {user ?

          (<a
            href="#"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 text-2xl mb-3"
          >
            <UserLogo />
            <span>{user.username}</span>
          </a>

          ) : (

            <>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setActiveForm("login");
                  setLoginpop(true);
                }}
              >
                Login
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setActiveForm("signup");
                  setLoginpop(true);
                }}
              >
                New Customer? Sign Up
              </a>
            </>

          )}



        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <ProfileIcon /> My Profile
        </a>
        {/* Additional menu items */}
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <AdiyoPlusZoneIcon /> Adiyo plus zone
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <OrdersIcon /> Orders
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <RewardsIcon /> Rewards
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <GiftCardsIcon /> Gift Cards
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <BecomeSellerIcon /> Become Seller
        </a>

        {
          user && (
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Logout /> Log Out
            </a>
          )
        }

      </div >

      {loginpop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleOverlayClick}
          ></div>
          {/* Modal container */}
          <div
            id="login-modal"
            className="relative z-10"
            onClick={handleModalClick}
          >
            {activeForm === "login" && (
              <LoginForm
                onClose={() => setLoginpop(false)}
                onSwitch={setActiveForm}
              />
            )}
            {activeForm === "signup" && (
              <SignupForm
                onClose={() => setLoginpop(false)}
                onSwitch={setActiveForm}
              />
            )}
            {activeForm === "forgot" && (
              <Forgot
                onClose={() => setLoginpop(false)}
                onSwitch={setActiveForm}
              />
            )}
            {activeForm === "reset" && (
              <ResetPasswordForm
                onClose={() => setLoginpop(false)}
                onSwitch={setActiveForm}
              />
            )}
          </div>
        </div>
      )
      }
    </>
  );
}

export default UserPopupMenu;