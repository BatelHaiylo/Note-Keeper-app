import SingleNote from "../../featurs/single note/SingleNote.component";
import {useState,useEffect} from "react"

export default function Notes() {
    const [numOfNotes,setNumOfNotes] = useState(0)
    useEffect(() => {
        setNumOfNotes(numOfNotes+1)
    }, [numOfNotes]);

    return ( 
    <div>
        {}
        <SingleNote/>
    </div>
    );
}