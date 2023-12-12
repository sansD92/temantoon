import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import SecondaryButton from '@/Components/SecondaryButton';
export default function Login(){
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
    <>
    <Head title="Pendaftaran"/>
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
                    Pendaftaran
                </div>
                <p className="text-base text-[#767676] leading-7">
                Jelajahi film baru kami dan dapatkan wawasan<br/>
                 yang lebih baik untuk hidup Anda 
                </p>
            </div>
            <form className="w-[370px]" onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                    <InputLabel htmlFor="fullname" value="Nama Anda" />
                    <TextInput
                        id="name"
                        type="name"
                        name="name"
                        value={data.name}
                        placeholder="Adjie dwi sandy"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                     <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                    <InputLabel htmlFor="email" value="Email Anda" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="adjiedwisandy@gmail.com"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                    <InputLabel htmlFor="password" value="Password Anda" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="password"
                        autoComplete="password"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    
                    <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div>
                    <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        placeholder="Konfirmasi password"
                        autoComplete="password"
                        isFocused={true}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    
                    <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>
                </div>
                
               
                <div className="grid space-y-[14px] mt-[30px]">
                    
                    <PrimaryButton type="submit">
                    <span className="text-base font-semibold" disabled={processing}>
                            Daftar
                        </span>
                    </PrimaryButton>
                  
                    <Link href={route('login')}>
                    <SecondaryButton>
                    <span className="text-base font-semibold">
                    Login
                        </span>
                    </SecondaryButton>
                    </Link>
                </div>
            </form>
        </div>
    </div>
</div>
    </>
         
    );   
}