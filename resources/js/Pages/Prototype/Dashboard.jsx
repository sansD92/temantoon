import Authenticated from "@/Layouts/Authenticated/Index"
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovies";
import MovieCard from "@/Components/MovieCard";
export default function Dashboard(){
    const flickityOptions ={
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1",
    };
    return <Authenticated>
        <Head>
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
        </Head>
         <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                         {/* <!-- Movie Thumbnail --> */}
                        {[1,2,3,4].map((i) => (
                            <FeaturedMovie 
                            key={i}
                            slug={`one-piece-${i}`}
                            name={`One Piece Episode ${i}`}
                            category="Comedy"
                            thumbnail="http://picsum.photos/id/1/300/300"
                            rating={i + 1}
                             />
                           
                        ))}
                        
                       

                       
                    </Flickity>
                </div>

                {/* <!-- Browse --> */}
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {/* <!-- Movies 1 --> */}
                       {[1,2,3,4,5,6].map((i) => (
                       <MovieCard 
                       key={i}
                       slug={`one-piece-the-movie-${i}`}
                       name={`One Piece The Movie ${i}`}
                       category="Action"
                       thumbnail="https://picsum.photos/id/918/200/300"
                       />
                       ))}
                       
                    </Flickity>
                </div>
    </Authenticated>
}