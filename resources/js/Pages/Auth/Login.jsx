import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Login({ status, canResetPassword }){

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return (   
        
    <>
    <Head title="Login"/>
    <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
    <div className="fixed top-[-50px] hidden lg:block">
        <img src="/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
    </div>
    <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
        <div>
            <img src="/images/temanton-white.png" alt=""/>
            <div className="my-[40px]">
                <div className="font-semibold text-[26px] mb-3">
                    Selamat Datang
                </div>
                <p className="text-base text-[#767676] leading-7">
                Jelajahi film baru kami dan dapatkan wawasan<br/>
                 yang lebih baik untuk hidup Anda 
                </p>
            </div>
            <form className="w-[370px]" onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                    <InputLabel htmlFor="email" value="Email Anda" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="email"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                            <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                    <InputLabel htmlFor="password" value="Isi Password Anda" />
                        {/* <input type="password" name="password"
                            className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                            placeholder="Password" /> */}
                     <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="password"
                        autoComplete="password"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                </div>
                
                <div className="grid space-y-[14px] mt-[30px]">
                    {/* <a href="/" className="rounded-2xl bg-alerange py-[13px] text-center">
                        <span className="text-base font-semibold">
                            Start Watching
                        </span>
                    </a> */}
                    <PrimaryButton disabled={processing}>
                    <span className="text-base font-semibold">
                            Mulai Menonton
                        </span>
                    </PrimaryButton>

                    <Link href={route('register')}>
                    <SecondaryButton>
                    <span className="text-base font-semibold">
                    Buat Akun Baru
                        </span>
                    </SecondaryButton>
                    </Link>
                    {/* <a href="sign_up.html" className="rounded-2xl border border-white py-[13px] text-center">
                        <span className="text-base text-white">
                            Create New Account
                        </span>
                    </a> */}
                   
                </div>
            </form>
        </div>
    </div>
</div>
    </>
    );
}