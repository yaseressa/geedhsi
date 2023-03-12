import React, { useEffect, useState } from "react";
import User from "./User";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setusers] = useState([]);
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [gender, setgender] = useState();
  const [form, setform] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/dash")
      .then((res) => res.json())
      .then((res) => {
        setusers(res);
        console.log(users);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    fetch("http://localhost:3000/dash", {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: form.name,
        gender: form.gender,
        password: form.password,
        email: form.email,
      }),
    }).then((res) => console.log(res));
  }, [form]);
  const [add, setadd] = useState(0);
  const submit = () => {
    setform({
      name,
      email,
      password,
      gender,
    });
    window.location.reload();
  };
  return (
    <div className="w-[70%] relative top-20 left-64 z-0">
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-primary tracking-widest font-nunito font-semibold text-2xl">
            users
          </h2>
          {add == 0 && (
            <span className="text-white text-lg bg-primary font-nunito rounded-full px-5 py-2 mb-2">
              <div className="cursor-pointer" onClick={() => setadd(1)}>
                Add User <span className="text-2xl">+</span>
              </div>
            </span>
          )}
          {add == 1 && (
            <span className="text-lg text-primary font-nunito bg-white rounded-full px-5 py-2 mb-2">
              <div className="cursor-pointer" onClick={() => setadd(0)}>
                back {">"}
              </div>
            </span>
          )}
        </div>

        <hr className="border-2 border-primary w-full" />
      </div>

      {add == 0 && (
        <div className="relative top-6 w-full flex justify-evenly items-center flex-wrap">
          {users.map((user) => {
            return (
              <Link to={`/dash/user/${user.id}`}>
                <User
                  name={user.name}
                  src={`../${user.gender}.png`}
                  email={user.email}
                />
              </Link>
            );
          })}
        </div>
      )}
      {add == 1 && (
        <div className="relative top-20 flex justify-evenly items-center  gap-6">
          <div>
            <svg
              width="190"
              height="190"
              viewBox="0 0 115 115"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_21_405)">
                <path
                  d="M58.5289 75.0706C68.8377 75.0706 77.1946 66.7137 77.1946 56.405C77.1946 46.0962 68.8377 37.7393 58.5289 37.7393C48.2202 37.7393 39.8633 46.0962 39.8633 56.405C39.8633 66.7137 48.2202 75.0706 58.5289 75.0706Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M47.8135 77.8308L46.9702 69.3066L63.8097 66.1579L73.7533 90.3684L56.4601 110.256L44.1387 86.0451L47.8135 77.8308Z"
                  fill="#FFB6B6"
                />
                <path
                  d="M46.6997 73.5735L50.3813 74.4053C50.3813 74.4053 47.4872 65.2281 48.4695 64.352C49.4518 63.4758 51.859 64.8563 51.859 64.8563L54.3886 67.6924L57.4698 64.5553C57.4698 64.5553 60.8149 60.3958 62.1247 59.2276C63.4344 58.0594 61.3307 53.7233 61.3307 53.7233C61.3307 53.7233 80.7622 48.4836 73.5317 39.0587C73.5317 39.0587 69.2925 31.6692 67.912 34.0764C66.5314 36.4835 64.8853 32.6604 64.8853 32.6604L59.8586 33.6163C59.8586 33.6163 49.9379 27.7668 40.5219 40.2806C31.106 52.7944 46.6997 73.5735 46.6997 73.5735Z"
                  fill="#2F2E41"
                />
                <path
                  d="M93.6341 102.235C83.4333 110.506 70.8135 115 57.4999 115C45.3428 115 33.7628 111.252 24.0764 104.304C24.0937 104.123 24.111 103.943 24.1261 103.764C24.3834 100.954 24.6125 98.2213 24.7638 95.9558C25.3496 87.1601 45.8702 81.2977 45.8702 81.2977C45.8702 81.2977 45.9632 81.3906 46.1491 81.5527C47.2818 82.5471 51.8796 86.1527 59.9426 87.1601C67.1322 88.0593 69.4993 83.7944 70.2148 81.7516C70.4309 81.1291 70.4958 80.7119 70.4958 80.7119L91.6022 90.6792C92.9791 92.6463 93.5174 96.8832 93.6233 101.645C93.6276 101.842 93.632 102.037 93.6341 102.235Z"
                  fill="#E22727"
                />
                <path
                  d="M98.1586 16.8415C87.2984 5.98129 72.8586 0 57.5 0C42.1414 0 27.7016 5.98129 16.8415 16.8415C5.9813 27.7016 0 42.1414 0 57.5C0 71.5183 4.98262 84.7714 14.1134 95.236C14.9846 96.2368 15.8946 97.2117 16.8415 98.1586C17.0641 98.3812 17.2889 98.6039 17.5159 98.82C18.1212 99.4058 18.7372 99.9787 19.3641 100.534C19.7446 100.874 20.1293 101.206 20.5184 101.533C20.8232 101.79 21.128 102.043 21.4371 102.292C21.4436 102.298 21.4479 102.302 21.4544 102.307C22.3126 102.998 23.1859 103.664 24.0765 104.304C33.7629 111.252 45.3429 115 57.5 115C70.8136 115 83.4334 110.506 93.6342 102.235C94.4664 101.561 95.2814 100.861 96.0812 100.136C96.7881 99.4966 97.4798 98.8373 98.1586 98.1586C98.3726 97.9446 98.5866 97.7284 98.7962 97.5101C99.3799 96.9091 99.9462 96.2974 100.5 95.677C109.875 85.1454 115 71.7172 115 57.5C115 42.1414 109.019 27.7016 98.1586 16.8415ZM100.359 95.1387C99.8187 95.7526 99.2653 96.3579 98.699 96.948C97.817 97.8667 96.907 98.7573 95.9666 99.6155C95.61 99.9441 95.249 100.264 94.8836 100.582C94.4686 100.943 94.0492 101.297 93.6234 101.645C90.2664 104.401 86.5894 106.779 82.6573 108.716C81.1031 109.483 79.51 110.182 77.8801 110.806C71.5486 113.236 64.6767 114.568 57.5 114.568C50.5741 114.568 43.9335 113.327 37.7879 111.057C35.2652 110.128 32.8269 109.023 30.4858 107.758C30.1421 107.573 29.8006 107.384 29.4612 107.192C27.6757 106.18 25.9485 105.076 24.2905 103.883C24.2365 103.844 24.1803 103.803 24.1262 103.764C22.946 102.912 21.7981 102.015 20.6892 101.072C20.2828 100.729 19.8807 100.381 19.4852 100.024C18.841 99.4512 18.2098 98.8611 17.5937 98.2558C16.4264 97.1123 15.311 95.9212 14.2453 94.6826C5.63976 84.6871 0.432331 71.6913 0.432331 57.5C0.432331 26.0328 26.0328 0.432331 57.5 0.432331C88.9672 0.432331 114.568 26.0328 114.568 57.5C114.568 71.9096 109.2 85.087 100.359 95.1387Z"
                  fill="#3F3D56"
                />
              </g>
              <defs>
                <clipPath id="clip0_21_405">
                  <rect width="115" height="115" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <form
            action=""
            method="post"
            className="flex flex-wrap justify-center items-center gap-3"
          >
            <label htmlFor="" className="text-left font-nunito">
              Name: <br />
              <input
                type="text"
                className="p-2"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </label>
            <label htmlFor="" className="text-left font-nunito">
              Email: <br />
              <input
                type="email"
                className="p-2"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </label>
            <label htmlFor="" className="text-left font-nunito">
              Password: <br />
              <input
                type="text"
                className="p-2"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </label>
            <label htmlFor="" className="text-left font-nunito">
              Gender: <br />
              <select
                type="text"
                className="p-2"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
              >
                <option value="">CHOOSE GENDER</option>
                <option value="m">Male</option>
                <option value="fe">Female</option>
              </select>
            </label>
            <span
              className="text-white text-md ml-8 bg-primary rounded-full px-6 py-3 self-end mt-5 cursor-pointer"
              onClick={submit}
            >
              Add User
            </span>
          </form>
        </div>
      )}
    </div>
  );
}
