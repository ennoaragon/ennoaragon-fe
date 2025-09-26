import {
    galleryPhotos,
    iPhoto
} from "@static/gallery_photos";

const Gallery = () => {

    function photo(image: iPhoto, production: boolean) {
        return (
            <div className="relative w-full h-full p-2 rounded">
                <div className="absolute w-full h-full font-bold
        text-base drop-shadow-lg">
                    <div className="relative hidden md:flex md:text-base justify-between p-2">
                        <div>
                            <p>{image.title}</p>
                        </div>
                    </div>
                </div>
                {
                    production ?
                        <img className="w-full rounded" src={image.remoteSrc} alt={image.title} />
                        :
                        <img className="w-full rounded" src={image.localSrc} alt={image.title} />
                }
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-1 gap-3 px-10 md:p-2 min-w-full w-full">
            <div className="w-full ">
                < div className="grid grid-cols-2 xl:grid-cols-3 bg-black bg-opacity-30 rounded" >
                    {
                        galleryPhotos.map((image: iPhoto) => {
                            return photo(image, false)
                        })
                    }
                </div >
            </div>
        </div>
    )
}

export default Gallery
