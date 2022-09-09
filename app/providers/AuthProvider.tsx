import {addDoc, collection} from "@firebase/firestore";
import {onAuthStateChanged, User} from 'firebase/auth';
import React, {createContext, useEffect, useMemo, useState} from "react";
import {Alert} from "react-native";
import {auth, db, login, logout, register} from "../firebase";

// Інтерфейс. Описуємо контекст, що туди має входити
interface IContext {
    user: User | null,
    isLoading: boolean,
    register: (email: string, password: string) => Promise<void>
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

interface Props {
    children: React.ReactNode;
}

export const AuthContext = createContext<IContext>({} as IContext)
export const AuthProvider: React.FC<Props> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // ф-ція, яка робить реєстрацію
    const registerHandler = async (email: string, password: string) => {
        setIsLoading(true)
        try {
            // забираємо user із реєстрації
            const {user} = await register(email, password)

            await addDoc(collection(db, 'users'), {
                // які поля будуть добавлені
                _id: user.uid,
                displayName: 'No name'
            })
        } catch (error: any) {
            Alert.alert('Error reg', error)
        } finally {
            setIsLoading(false)
        }
    }

    const loginHandler = async (email: string, password: string) => {
        setIsLoading(true)
        try {
            await login(email, password)

        } catch (error: any) {
            Alert.alert('Error login', error)
        } finally {
            setIsLoading(false)
        }
    }

    const logoutHandler = async () => {
        setIsLoading(true)
        try {
            // всередині передаємо екземпляр auth, тому більше нічого не потрібно
            await logout()

        } catch (error: any) {
            Alert.alert('Error logout.', error)
        } finally {
            setIsLoading(false)
        }
    }

    // При вході, реєстрації Автоматично обновлявся state, робився "редірект"
    // Пусті [], щоб спрацьовувало тільки раз при загрузці стоірнки
    useEffect(() => onAuthStateChanged(auth, user => {
        setUser(user || null)
        setIsLoadingInitial(false)
    }), [])

    // Кешируємо через useMemo
    // І обновлення тільки тоді, клди змінюютьться конкретні змінні
    const value = useMemo(() => ({
        user, isLoading, login: loginHandler, logout: logoutHandler, register: registerHandler,
    }), [user, isLoading])

    return <AuthContext.Provider value={value}>
        {!isLoadingInitial && children}
    </AuthContext.Provider>;
}