import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector, useDispatch} from "react-redux";
import { changeUser } from "../redux-toolkit/slice";

const useChat = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector((store) => store?.auth?.currentUser);
    console.log(currentUser);

    const [chats, setChats] = useState([]);
    

    const handleSelect =(user)=>{
        dispatch(changeUser(user));
    }
   
    useEffect(() => {
        const getChats = () => {
          const unsub = onSnapshot(doc(db, "userChats", currentUser?.uid), (doc) => {
            setChats(doc.data());
          });
          return () => {
            unsub();
          };
        };
    
        currentUser.uid && getChats();
      }, [currentUser?.uid]);
   
  return {
    chats,
    handleSelect
  }
}

export default useChat