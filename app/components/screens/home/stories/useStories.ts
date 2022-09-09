import {useEffect, useState} from "react";
import {IStory} from "./types";
import {onSnapshot} from "firebase/firestore";
import {collection, orderBy, query} from "@firebase/firestore";
import {db} from "../../../../firebase";

export const useStories = () => {
    const [stories, setStories] = useState<IStory[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => onSnapshot(query(collection(db, 'stories'), orderBy('timestamp', 'asc')), snapshot => {
        setStories(snapshot.docs.map(d => ({
                _id: d.id,
                ...d.data()
            } as IStory)
            )
        )
        setIsLoading(false)
    }), [])

    return {stories, isLoading}
}