import React, { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import axios from '@/api/axios';
import { Button } from '@/components/ui/button';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        try{
            await axios.post('/login', {email, password});
            setEmail("");
            setPassword("");
            navigate("/");
        } catch(e){
            console.log(e);
        }
    };


  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
        <div className='container mx-auto'>
            <div className='-mx-4 flex flex-wrap'>
                <div className='w-full px-4'>
                    <div
                        className='
                        relative
                        mx-auto
                        max-w-[525px]
                        overflow-hidden
                        rounded-lg
                        bg-white
                        py-16
                        px-10
                        text-center
                        sm:px-12
                        md:px-[60px]
                        '
                    >
                        <div className='mb-10 text-center md:mb-16'>GREENLIFE</div>
                        <form onSubmit={handleLogin}>
                            <div className='mb-4'>
                                <input 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email'
                                    className='
                                    border-green-500
                                    w-full
                                    rounded-md
                                    border
                                    bg-[#FCFDFE]
                                    py-3
                                    px-5
                                    text-base text-body-color
                                    placeholder-[#79c74e]
                                    outline-none
                                    focus:border-primary
                                    focus-visible:shadow-none
                                    '
                                />
                                <div className='flex'>
                                    <span className='text-red-400 text-sm m-2 p-2'>error</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <input 
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Password'
                                    className='
                                    border-green-500
                                    w-full
                                    rounded-md
                                    border
                                    bg-[#FCFDFE]
                                    py-3
                                    px-5
                                    text-base text-body-color
                                    placeholder-[#79c74e]
                                    outline-none
                                    focus:border-primary
                                    focus-visible:shadow-none
                                    '
                                />
                                <div className='flex'>
                                    <span className='text-red-400 text-sm m-2 p-2'>error</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <Button type="submit" className="bg-transparent hover:bg-green-500 text-[#79c74e] font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">Login</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login