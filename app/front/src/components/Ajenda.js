import React, {useRef} from 'react';
import '../tailwind.css';


const Ajenda = () =>  {
  const textRef = useRef(null);
  // const  onclick = () => {
  //   console.log(textRef)
  // }

  return (
    <div className="flex flex-col h-screen">
        <div className="flex-auto">
            <div className="flex justify-center mt-20">
                <div className="w-9/12 border bg-white">
                    <div className="my-16 text-center">
                        <input ref={textRef} type="text" />
                        <button class="w-24 m-4 p-4 rounded-sm bg-red-500 text-center text-white" type="button" onClick={()=> alert(textRef.current.value)}>値の確認</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}





// const Ajenda = () =>  {
//   return (
//     <Grid container alignItems="center" justify="center">
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       </Box>
//     </Grid>
//   );
// }



export default Ajenda
