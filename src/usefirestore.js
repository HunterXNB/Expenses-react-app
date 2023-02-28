import { useState, useEffect } from "react";
import { db } from "./config";

export const useFirestore = () => {
    const [expe, setExp] = useState({})
    useEffect(() => {
        const data = db.collection("items").orderBy('date').onSnapshot(snap => {
            let fetched = snap.docs.map(el => {
                const ell = el.data()
                return { ...el.data(), date: new Date(ell.date.seconds * 1000) }
            })
            setExp(fetched)
        })
        return data
    }, [])
    return { expe }
}