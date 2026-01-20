import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, useColorScheme } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { launchCamera } from 'react-native-image-picker'
import Mapbox from '@rnmapbox/maps';
import { ThemeContext } from '../../theme/ThemeContext';
import PrimaryBtn from '../../components/Button/PrimaryBtn';

import { addHazard } from '../../Services/api';

const AddSpot = ({ navigation }) => {
    const theme = useContext(ThemeContext);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const requestPermission = async () => {
            if (Platform.OS === 'android') {
                await Mapbox.requestAndroidLocationPermissions();
            }
        };

        requestPermission();
    }, []);

    const handleTakePhoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 0.8,
            saveToPhotos: true,
        };
        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else {
                setImage(response.assets[0]);
            }
        });
    };

    const handleSubmit = async () => {
        if (!image || !title || !description || !location) {
            Alert.alert('All fields are required');
            return;
        }

        const hazardData = {
            title,
            description,
            latitude: location.latitude,
            longitude: location.longitude,
            type: 'USER_REPORTED',
            severity: 5,
            roadName: 'Unknown',
            city: 'Unknown',
        };

        try {
            await addHazard(hazardData);
            Alert.alert('Success', 'Hazard reported successfully');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'Failed to report hazard');
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Mapbox.UserLocation onUpdate={(location) => setLocation(location.coords)} />
            <TouchableOpacity style={styles.imagePicker} onPress={handleTakePhoto}>
                {image ? (
                    <Image source={{ uri: image.uri }} style={styles.image} />
                ) : (
                    <Text style={{color: theme.text}}>Take a photo</Text>
                )}
            </TouchableOpacity>
            <TextInput
                style={[styles.input, { backgroundColor: theme.inputBgActive, color: theme.textPrimary }]}
                placeholder="Title"
                placeholderTextColor={theme.textSecondary}
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={[styles.input, { backgroundColor: theme.inputBgActive, color: theme.textPrimary }]}
                placeholder="Description"
                placeholderTextColor={theme.textSecondary}
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <PrimaryBtn title="Submit" onPress={handleSubmit} widthRatio={0.8} />
        </View>
    )
}

export default AddSpot

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    imagePicker: {
        width: '100%',
        height: 200,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    input: {
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
});