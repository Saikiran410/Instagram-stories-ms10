import * as React from 'react';
import {View, Button} from 'react-native';

const AddStoryModal = (e) => {
    document.getElementById('add-story').innerHTML = "Add story link here";
}

const AddStory = () => {
    return(
        <View nativeID="add-story">
            <Button title="Add Story" onPress={AddStoryModal}></Button>
        </View>
    )
}

export default AddStory;