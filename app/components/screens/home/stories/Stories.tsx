import React, {FC} from 'react';
import {ScrollView, View} from "react-native";
import {useStories} from "./useStories";
import {useTailwind} from "tailwind-rn";
import Loader from "../../../ui/Loader";
import StoryItem from "./StoryItem";

const Stories: FC = () => {
    // Кастомний хук, який дозволяє підгружати сторіси з бази даних
    const {stories, isLoading} = useStories()
    const tw = useTailwind()

    return (
        <View style={tw('my-7')}>
            {isLoading ? <Loader/> :
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>{stories.map(story => (
                    <StoryItem story={story} key={story._id}/>))}
                </ScrollView>}
        </View>
    )
}

export default Stories