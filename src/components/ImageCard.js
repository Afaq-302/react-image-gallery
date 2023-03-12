import React from 'react'

function ImageCard({ image }) {
    const tags = image.tags.split(',')
    // console.log(tags);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        
            <img className="w-full" src={image.webformatURL} alt="Sunset in the mountains" />
            <div className="px-6 py-4 pb-0">
                <div className="font-bold text-xl mb-2 text-blue-600">Photo By <span className='text-red-500'>{image.user}</span></div>

                <ul className='mt-1 '>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                       {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>

            </div>

            <div className="px-6 pt-4 pb-2">
        {tags.map((tag,index) =>(
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
        ))}

            </div>
        </div>
    )
}

export default ImageCard