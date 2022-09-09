import {collection, query} from "@firebase/firestore";
import {useEffect, useState} from "react";
import {db} from "../../../../firebase";
import {IAccount} from "./types";
import {onSnapshot, where} from "firebase/firestore";
import {useAuth} from "../../../../hooks/useAuth";

export const useAccounts = () => {
    const [accounts, setAccounts] = useState<IAccount[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const {user} = useAuth()

    useEffect(() => onSnapshot(query(collection(db, 'stories'), where('userId', '==', user?.uid)), snapshot => {
        setAccounts(snapshot.docs.map(d => ({
                _id: d.id,
                ...d.data()
            }) as IAccount)
        )
        setIsLoading(false)
    }), [])

    return {accounts, isLoading}
}