import Sidebar from "@/Layouts/Authenticated/Sidebar"
import Topbar from "@/Layouts/Authenticated/Topbar"
import {Link, Head} from '@inertiajs/react';
export default function Authenticated( {children }){
    return (
    <>
    <Head title="Dashboard"/>
    <div className="mx-auto max-w-screen hidden lg:block">
    {/* START: sidebar */}
    <Sidebar />
    {/* END: sidebar */}

    {/* START: Content */}
    <div className="ml-[300px] px-[50px]">
            <div className="py-10 flex flex-col gap-[50px]">
                 {/* START: Topbar */}
                 <Topbar />
                 {/* END: Topbar */}
                 <main>{children}</main>
        </div>
    </div>
    {/* END: Content */}
    </div>

    <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
        <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
            Sorry, this page only supported on 1024px screen or above
        </div>
    </div>
    </>

    );
}