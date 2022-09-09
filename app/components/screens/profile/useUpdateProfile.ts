// Хук для update profile
import {useState} from 'react';
import {useAuth} from "../../../hooks/useAuth";
import {Alert} from "react-native";
import {doc, updateDoc} from 'firebase/firestore';
import { db } from '../../../firebase';

export const useUpdateProfile = (name: string, docId: string) => {
    const {user} = useAuth()
    // Звичайна загрузка
    const [isLoading, setIsLoading] = useState(false);
    // Щоб знати, що дані справді обновленні
    const [isSuccess, setIsSuccess] = useState(false);

    const updateProfile = async () => {
        setIsLoading(true)
        if (!user) return
        try {
            const docRef = doc(db, 'users', docId)

            // updateDoc - дозволяє перезаписати потрібні поля
            await updateDoc(docRef, {displayName: name})
            setIsSuccess(true)
            setTimeout(() => {
                setIsLoading(true)
            }, 3000)

        } catch (error: any) {
            Alert.alert('Error update profile', error.message)
        } finally {
            setIsLoading(false)
        }
   }
   return {isLoading, updateProfile, isSuccess}
};