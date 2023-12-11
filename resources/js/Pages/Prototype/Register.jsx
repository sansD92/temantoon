import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import {Link, Head} from '@inertiajs/react';
import SecondaryButton from '@/Components/SecondaryButton';
export default function Login(){
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
            <form className="w-[370px]">
                <div className="flex flex-col gap-6">
                    <div>
                    <InputLabel htmlFor="fullname" value="Nama Anda" />
                    <TextInput
                        id="fullname"
                        type="fullname"
                        name="fullname"
                        placeholder="Adjie dwi sandy"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    </div>
                    <div>
                    <InputLabel htmlFor="email" value="Email Anda" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="adjiedwisandy@gmail.com"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    </div>
                    <div>
                    <InputLabel htmlFor="password" value="Password Anda" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        autoComplete="password"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    </div>
                </div>
                <div className="grid space-y-[14px] mt-[30px]">
                    
                    <PrimaryButton >
                    <span className="text-base font-semibold">
                            Daftar
                        </span>
                    </PrimaryButton>
                  
                    <Link href={route('prototype.login')}>
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