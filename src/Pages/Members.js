import React from 'react'
import u1 from '../Assets/u1.jpg'
import u2 from '../Assets/u2.png'
import u3 from '../Assets/u3.png'
import u4 from '../Assets/u4.png'
import u5 from '../Assets/u5.png'
import u6 from '../Assets/u6.png'
import useTitle from '../Components/SetTitle'
export default function Members() {
    useTitle('Members');
    const images = [
        {
            src: u1,
            name: "Tenzing"
        },
        {
            src: u2,
            name: "Komronbek"
        },
        {
            src: u3,
            name: "Chrisostam"
        },
        {
            src: u4,
            name: "Shreejal"
        },
        {
            src: u5,
            name: "Manish"
        },
        {
            src: u6,
            name: "Kalawati"
        }
    ];
    return (
        <div>
            <h1 className='text-2xl font-bold text-[#FFEB3B]'>Team Members</h1>
            <div className="flex flex-wrap gap-4 mt-4">
                {images.map((image, index) => (
                    <div key={index} className='flex items-center gap-4 flex-col' >
                        <img src={image.src} alt="user" className='w-48 h-48 rounded-full object-cover' />
                        <div>
                            <h2 className='text-2xl font-bold text-[#FFEB3B]'>{image.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <section className="bg-[#FFEB3B] shadow-md rounded-lg p-6 text-center mt-20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-4">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <p className="font-bold text-black">
              <div class="group relative">
                <a href="https://github.com/shreejalmaharjan-27/football-task">
                  <button>
                    <svg
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-8 hover:scale-125 duration-200 hover:stroke-black"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </p>
          </section>
        </div>
    )
}
