import React from "react";
import SavedCoin from "../components/SavedCoin";
// we wanna create protected route :

function Account() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="flex justify-between items-bcenter my-12 py-8 rounded-div">
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <div>
            {/* the user would be dynamic */}
            <p>Welcome User</p>
          </div>
        </div>

        <div>
          <button className="bg-blue-100 border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl">
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
}

export default Account;
