import { useEffect, useRef, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';


const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Carosel = () => {
    const [reviews, setReviews] = useState([]);
    const caroselref = useRef()

    useEffect(() => {
        const result = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => setReviews(data.meals))
    }, []);
    console.log(reviews);

    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-6'>Learn Carousel Uses</h1>

            <Carousel
                ref={caroselref}
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={5000}
                keyBoardControl
                transitionDuration={600}
                containerClass="carousel-container"
                itemClass="px-4"
                arrows={false}
            >
                {reviews?.map((meal) => (
                    <div key={meal.idMeal} className='border p-2 rounded-md bg-white'>
                        <h2 className="text-xl font-bold mb-2">{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover rounded-md" />
                    </div>
                ))}
            </Carousel>

            {/* button  */}
            <div className='flex justify-center gap-6 mt-2'>
                <button
                    onClick={() => caroselref.current?.previous()}
                    className='px-4 py-1 bg-green-500 rounded-md border border-gray-700'>
                    Previous
                </button>
                <button
                    onClick={() => caroselref.current?.next()}
                    className='px-4 py-1 bg-orange-500 rounded-md border border-gray-700'>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carosel;