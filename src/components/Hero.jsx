// import Image from 'next/image';

// const Hero = (props) => {
//     return (
//         <div className="flex-col mx-auto w-auto h-auto items-center justify-center text-center">
            
//             <Image src={props.imgSrc} alt="hero" width={300} height={300} className='rounded-full mx-auto my-4'/>
            
//             <h1 className='my-4 text-center'>Iroh</h1>
//             <h2>Major Stuff</h2>
//             <ul>
//                 <li>Civil Engineering PreGrad</li>
//                 <li>Full Stack Developer</li>

//             </ul>
//         </div>
//     )
// }

// export default Hero;


import Image from 'next/image';

const Hero = (props) => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto w-auto h-auto bg-green-300 p-10 rounded-lg shadow-lg border-4 border-green-800">
            <Image src={props.imgSrc} alt="hero" width={300} height={300} className='rounded-full'/>
            <h1 className='my-4 text-center text-4xl font-serif text-green-800'>Iroh</h1>
            <h2 className='text-center text-2xl font-serif text-green-700'>Major Stuff</h2>
            <ul className="text-center text-lg font-serif text-green-600">
                <li>Civil Engineering PreGrad</li>
                <li>Full Stack Developer</li>
            </ul>
        </div>
    )
}

export default Hero;
