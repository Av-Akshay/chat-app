import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { db } from '../firebase';

const useMessages = () => {
    const [messages, setMessages] = useState([]);

    const data = useSelector((store)=>store?.auth)

    useEffect(()=>{
        const unSub = onSnapshot(doc(db,"chats", data?.chatId), (doc)=>{
          doc.exists() && setMessages(doc.data().messages)
        });

        return ()=>{
          unSub();
        }
    },[data?.chatId])

  return {
    messages,
  }
}

export default useMessages;