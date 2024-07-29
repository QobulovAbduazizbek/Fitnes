import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import LightGallery from "lightgallery/react";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgRotate from "lightgallery/plugins/rotate";
import React from 'react';
import foto1 from "../Img/grid1.jpg";
import foto2 from "../Img/grid2.jpg";
import foto3 from "../Img/grid3.jpg";
import foto4 from "../Img/grid4.jpg";
import foto5 from "../Img/grid5.jpg";
import foto6 from "../Img/grid6.jpg";
import { Link } from "react-router-dom";

const Foto = () => {
    const images = [foto1, foto2, foto3, foto4, foto5, foto6]; // Array of images

    // Function to render the gallery items
    const renderGallery = () => {
        return images.map((image, index) => (
            <a key={index} href={image} data-lg-size="1406-1390" className="group w-full m-5 h-[300px] overflow-hidden relative inline-block cursor-pointer mx-auto">
                <img
                    className="w-full rounded-2xl h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={image} 
                    alt=""
                />
            </a>
        ));
    };

    return (
        <div className="w-full max-w-[1450px] mx-auto py-10 px-5">
            <div className="mb-10">
                <h2 className="text-[60px] text-white font-bold opacity-60 mb-5">ГАЛЕРЕЯ</h2>
                <p className="font-medium text-white text-[50px]">АТМОСФЕРА НАШЕГО ЦЕНТРА</p>
            </div>
            <LightGallery
                speed={500}
                plugins={[lgRotate, lgVideo, lgAutoplay]}
                elementClassNames="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 gap-5" // Responsive grid
                escKeyClose={true} // Enable ESC key to close the gallery
                download={false} // Disable download option
                zoom={false} // Disable zoom functionality
            >
                {renderGallery()}
            </LightGallery>
            <Link>
                <h2 className="text-white font-bold text-[20px] mt-10"><u className="hover:text-red-500">Фотогалерея</u></h2>
            </Link>
        </div>
    );
};

export default Foto;
