import { useState} from "react";

export default function useToggle(intial=false)
{
    const[open,setopen]= useState(intial);
    const toggle=() => setopen(!open);
    return[open,toggle];
}