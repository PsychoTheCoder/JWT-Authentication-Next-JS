import React from 'react'
import { useUserStore } from "@/store/store";
import {toast} from 'react-toastify'
function ProfileDropdown({username}) {
  const { setIsLogin, setUsername } = useUserStore();

    const logout = () => {

        localStorage.removeItem("hoxtrackr_token");
        setIsLogin(false);
        setUsername("");
        toast.success('Account logged out Successfully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
      }
  return (
    <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={`https://ui-avatars.com/api/?name=${username}`} />
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><button onClick={logout}>Logout</button></li>
    </ul>
  </div>
  )
}

export default ProfileDropdown