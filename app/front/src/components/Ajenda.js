import React, {useRef} from 'react';
import '../tailwind.css';


const Ajenda = () =>  {

    const textRef = useRef(null);

    const handleClick = () => {
        alert(textRef.current.value);
    }

      return (
        <div className="flex flex-col h-screen">
            <div className="flex-auto">
                <div className="flex justify-center mt-20">
                    <div className="w-9/12 border bg-white">
                        <div className="my-16 text-center">
                            <input ref={textRef} type="text" />

                            <button class="w-24 m-4 p-4 rounded-sm bg-red-500 text-center text-white" type="button" onClick={() => handleClick()}>値の送信</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}


export default Ajenda
