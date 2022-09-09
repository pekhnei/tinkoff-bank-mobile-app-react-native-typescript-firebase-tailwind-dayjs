import {useEffect, useMemo, useState} from 'react';
import {onSnapshot} from "firebase/firestore";
import {collection, limit, query, where} from "@firebase/firestore";

import {useAuth} from "../../../hooks/useAuth";
import {db} from '../../../firebase';

export interface IProfile {
    _id: string
    displayName: string
    docId: string
    // -- updateDoc, getDoc
}

export const UseProfile = () => {
    const {user} = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const [profile, setProfile] = useState<IProfile>({} as IProfile);
    const [name, setName] = useState('');

    useEffect(() =>
        onSnapshot(
            query(
                collection(db, 'users'),
                where('_id', '==', user?.uid),
                limit(1)), snapshot => {
                const profile = snapshot.docs.map(d => ({...(d.data() as Omit<IProfile, 'docId'>), docId: d.id}))[0]
                setProfile(profile)
                setName(profile.displayName)
                setIsLoading(false)

            }), [])

    return useMemo(() => ({profile, isLoading, name, setName}), [])
}

export default UseProfile;