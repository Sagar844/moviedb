import { FC, useState } from "react";
type userprops = {};

const Userprofile: FC<userprops> = () => {
  const [user, setuser] = useState(false);

  return (
    <div>
      <img
        className="rounded-full md:hidden items-center justify-center w-10 h-10 object-cover lg:hidden  "
        src="https://cdn.discordapp.com/attachments/1001168177952211054/1082230864643108964/IMG_20190602_091301_7-removebg-preview_1.png"
        onClick={() => setuser(!user)}
      />

      {user && (
        <div
          onClick={() => setuser(false)}
          className="inset-0 backdrop-blur-sm fixed  bg-opacity-25"
        >
          <div className="bg-white py-10 px-4 mx-24 mt-16  rounded-md">
            <h1 className="text-bold">sagar84450</h1>
            <h1>view profile</h1>
            <div className="text-gray-400">
              <hr />
              <h1>Discussions</h1>
              <h1>List</h1>
              <h1>Rating</h1>
              <h1>Watchlist</h1>
              <h1>Discussions</h1>
              <hr />
              <h1>Logout</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userprofile;
