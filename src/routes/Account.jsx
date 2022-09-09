import React from "react";
import SavedCoin from "../components/SavedCoin";
// we wanna create protected route :
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function Account() {
  const { user, logout } = UserAuth();

  // use navigate to navigate to home page:
  const navigate = useNavigate();

  // create a function to handle logout:
  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  /// we wanna create protected route :
  if (user) {
    return (
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-bcenter my-12 py-8 rounded-div">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              {/* the user would be dynamic */}
              <p>Welcome {user?.email}</p>
            </div>
          </div>

          <div>
            <button
              onClick={handleSignOut}
              className="bg-blue-100 border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div className="w-full min-h-[300px]">
            {/* we create a new component for saved coins */}
            <h1 className="font-bold text-2xl py-4">Saved Coins </h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
}

export default Account;
