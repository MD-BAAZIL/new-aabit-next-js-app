import ScrollEffect from './scroll';


const data = [
    {
        id:1,
        test:"hello",
    },
    {
        id:2,
        test:"hello",
    },
    {
        id:3,
        test:"hello",
    },
    {
        id:4,
        test:"hello",
    },
    {
        id:5,
        test:"hello",
    },
    {
        id:6,
        test:"hello",
    },
    {
        id:7,
        test:"hello",
    },
    {
        id:8,
        test:"hello",
    }
]

const testing =() => {
    return(
        <div className="">
        <div className="flex">
            {data.map(test => (
            <div key={test.id} className="p-20 m-2 bg-gray-200 w-1/4 text-center text-3xl">
                <h1>
                    {test.test}
                </h1>
            </div> ))}
        </div>
                <ScrollEffect/>

                <div className="flex">
                    {data.map(test => (
                
                    <div key={test.id} className="p-20 m-2 bg-gray-200 w-1/4 text-center text-3xl">
                        <h1>
                            {test.test}
                        </h1>
                    </div>
                    ))}
                </div>
                    <ScrollEffect/>
                <div className="flex">
                    {data.map(test => (
                
                    <div key={test.id} className="p-20 m-2 bg-gray-200 w-1/4 text-center text-3xl">
                        <h1>
                            {test.test}
                        </h1>
                    </div>
                    ))}
                </div>
                    <ScrollEffect/>
                <div className="flex">
                    {data.map(test => (
                
                    <div key={test.id} className="p-20 m-2 bg-gray-200 w-1/4 text-center text-3xl">
                        <h1>
                            {test.test}
                        </h1>
                    </div>
                    ))}
                </div>
                    <ScrollEffect/>
        </div>
        
    )
};

export default testing;