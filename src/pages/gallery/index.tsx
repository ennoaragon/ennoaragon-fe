import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    galleryPhotos,
    type iPhoto
} from "@/static/gallery_photos";

const ExpandableGallery = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [activeId, setActiveId] = useState<number | null>(null);
    const ITEMS_PER_PAGE = 5;

    // Slice the data to get the current 5 images
    const visibleImages: iPhoto[] = galleryPhotos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleNext = () => {
        if (startIndex + ITEMS_PER_PAGE < galleryPhotos.length) {
            setStartIndex((prev) => prev + ITEMS_PER_PAGE);
            setActiveId(null); // Reset active state on page change
        }
    };

    const handlePrev = () => {
        if (startIndex - ITEMS_PER_PAGE >= 0) {
            setStartIndex((prev) => prev - ITEMS_PER_PAGE);
            setActiveId(null);
        }
    };

    const isFirstPage = startIndex === 0;
    const isLastPage = startIndex + ITEMS_PER_PAGE >= galleryPhotos.length;

    return (
        <div className="grid content-center mt-[50px] min-w-full min-h-screen">
            <div className="w-full ">
                <div className="flex h-[500px] gap-2 w-full">
                    {visibleImages.map((image) => (
                        <div
                            key={image.id}
                            onMouseEnter={() => setActiveId(image.id)}
                            onMouseLeave={() => setActiveId(null)}
                            className={`
                relative cursor-pointer overflow-hidden rounded-2xl bg-slate-200 shadow-md
                transition-[flex-grow] duration-300 ease-out will-change-[flex-grow]
                ${activeId === image.id ? 'flex-[5]' : 'flex-[1]'}
                ${activeId === null ? 'flex-[1]' : ''}
              `}
                        >

                            {
                                import.meta.env.ENV_MODE === "prod" ?
                                    <img
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                                        src={image.remoteSrc} alt={image.title} />
                                    :
                                    <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                                        src={image.localSrc} alt={image.title} />
                            }

                            <div
                                className={`
                  absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  transition-opacity duration-300
                  ${activeId === image.id ? 'opacity-100' : 'opacity-0'}
                `}
                            >
                                <h3 className="text-white text-xl font-bold translate-y-0 transition-transform duration-500">
                                    {image.title}
                                </h3>
                            </div>

                            <div
                                className={`
                  absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300
                  ${activeId === image.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                `}
                            >
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex w-full items-center justify-center mt-2">
                <div className="flex items-center gap-2 mt-2">
                    <button
                        onClick={handlePrev}
                        disabled={isFirstPage}
                        className="p-2 rounded-[15px] border  transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <span className="flex items-center text-sm font-medium ">
                        {startIndex + 1} - {Math.min(startIndex + ITEMS_PER_PAGE, galleryPhotos.length)} of {galleryPhotos.length}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={isLastPage}
                        className="p-2 rounded-[15px] border transition-colors cursor-pointer "
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const GalleryMobileView = () => {

    function photo(image: iPhoto) {
        return (
            <div key={image.title} className="relative w-full h-full p-2 rounded">
                <div className="absolute w-full h-full font-bold
        text-base drop-shadow-lg">
                    <div className="relative hidden md:flex md:text-base justify-between p-2">
                        <div>
                            <p>{image.title}</p>
                        </div>
                    </div>
                </div>
                {
                    import.meta.env.ENV_MODE === "prod" ?
                        <img className="w-full rounded" src={image.remoteSrc} alt={image.title} />
                        :
                        <img className="w-full rounded" src={image.localSrc} alt={image.title} />
                }
            </div>
        )
    }

    return (
        <div className="grid mt-[50px] grid-cols-1 xl:grid-cols-1 gap-3 px-10 md:p-2 min-w-full w-full">
            <div className="w-full ">
                < div className="grid grid-cols-2 xl:grid-cols-3 rounded" >
                    {
                        galleryPhotos.map((image: iPhoto) => {
                            return photo(image)
                        })
                    }
                </div >
            </div>
        </div>
    )
}

const Gallery = () => {
    return (
        <>
            <div className="block md:hidden">
                <GalleryMobileView />
            </div>


            <div className="hidden  md:block">
                <ExpandableGallery />
            </div>
        </>
    )

}

export default Gallery
