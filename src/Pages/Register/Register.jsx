import { FcGoogle } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MyContext } from '../../Components/Context/Context';
import axios from 'axios';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
// import useCheckRole from '../../Hooks/useCheckRole';
// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
export default function Register({ setIsLogin }) {
    const { googleLogin, createUser, phone, setPhone } = useContext(MyContext);
    const navigate = useNavigate();
    // const [ ,, roleRefetch] = useCheckRole();
    const socialLogin = (media) => {
        media().then((result) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Signed Up in successfully",
                showConfirmButton: false,
                timer: 2000
            });
            document.getElementById('my_modal_3').close()
            const userInfo = { name: result?.user?.displayName, email: result?.user?.email }
            axios.post('https://server.wandergeniellm.com/users', userInfo)
                .then(res => {
                    console.log(res.data)
                })
        }).catch(() => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Something went wrong. Try later",
                showConfirmButton: false,
                timer: 2000
            });
        })
    }
    console.log(phone)
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(phone)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password).then(() => {
            console.log(phone);
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {

            }).catch((err) => {
                console.log(err)
            });
            // roleRefetch();
            document.getElementById('my_modal_3').close();
            // document.getElementById('phone_verify').showModal();
            navigate("/verify")
            const userInfo = { name: name, email: email, phone: phone };
            axios.post('https://server.wandergeniellm.com/users', userInfo)
                .then(() => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Signed Up successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                })
        }).catch(() => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `Something went wrong. Try later`,
                showConfirmButton: false,
                timer: 3000
            });
        });
    }

    return (
        <div className='py-2'>

            <div className='md:px-8'>
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-4 dark:bg-gray-800 dark:border-gray-700">
                    <div className='pb-4'>
                        <div className='flex justify-center items-center pb-5'>
                            {/* <Link to="/"><img className='w-32' src={LoginHeader} alt="" /></Link> */}
                        </div>
                        <h5 className="text-3xl text-center font-medium text-gray-900 dark:text-white">Sign Up</h5>
                        <p className='text-sm text-center'>Sign Up with this account across the following sites.</p>
                    </div>
                    <form onSubmit={handleRegister} className="space-y-6 mb-3" action="#">

                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#EB675368] focus:border-[#EB675368] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#EB675368] focus:border-[#EB675368] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#EB675368] focus:border-[#eb675368] block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className='w-full'>
                            <PhoneInput
                                country={'in'}
                                inputClass='w-full'
                                containerClass='w-full'
                                value={phone}
                                onChange={phone => setPhone(`+${phone}`)}
                            />
                        </div>
                        {/* <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="default_size">Profile Photo</label>
                            <input  className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file" />
                        </div> */}
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Password Forgotten?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-500">Sign Up</button>
                    </form>
                    <div className='divider'></div>
                    <div onClick={() => socialLogin(googleLogin)} className='relative'>
                        <button className="w-full my-3 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:blue-500 border border-black">Login With Google</button>
                        <FcGoogle className='absolute left-2 top-5 text-2xl'></FcGoogle>
                    </div>
                    <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                        Have an Account ?<button onClick={() => setIsLogin(true)} className="text-blue-700 hover:underline dark:text-blue-500">Login</button>
                    </div>
                </div>
            </div>

            {/* svg - */}
        </div>
    )
}

Register.propTypes = {
    setIsLogin: PropTypes.func
}