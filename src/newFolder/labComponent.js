import { useState, useEffect } from 'react';
function Component() {
    const [test, setTest] = useState(0);
    // useEffect(() => {
    //     setTest(test);
    // }, [test]);

    const handleIncreaseNumber = () => {
        setTest(test + 1);
    };
    return (
        <div>
            <h1>{test}</h1>
            <button onClick={handleIncreaseNumber}>tang</button>
        </div>
    );
}

export default Component;
