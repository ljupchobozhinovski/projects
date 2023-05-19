import dynamic from "next/dynamic";
import React from 'react'


const Map = dynamic(()=> import ("./map"), {
    ssr: false
}); 

export default Map
