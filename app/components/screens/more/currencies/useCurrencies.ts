import {useEffect, useState} from "react";
import {ICurrency} from "./types";
import {Alert} from "react-native";

export const useCurrencies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currencies, setCurrencies] = useState<ICurrency[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${URL}&base_currency=RUB`)
                const result = await response.json()

                console.log()

                setCurrencies([
                    {name: 'USD', value: (1 / result.data.USD).toFixed(2)},
                    {name: 'EUR', value: (1 / result.data.EUR).toFixed(2)},
                    {name: 'GBP', value: (1 / result.data.GBP).toFixed(2)},
                ])
            } catch (error) {
                Alert.alert('Fetch currencies', error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, []);


    return {isLoading, currencies}
}