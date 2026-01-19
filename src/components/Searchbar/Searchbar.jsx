import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    FlatList,
    Text,
} from "react-native";
import { MapPin, Mic } from "lucide-react-native";
import { images } from "../../Assets/assets";
import { searchPlaces } from "../../Services/geoapify";
import { useDebounce } from "../../hooks/useDebounce";

const { width } = Dimensions.get("window");

const TransparentSearchBar = ({ userLocation }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        const fetchPlaces = async () => {
            if (debouncedQuery.length > 2) {
                const places = await searchPlaces(debouncedQuery, userLocation);
                setResults(places);
            } else {
                setResults([]);
            }
        };

        fetchPlaces();
    }, [debouncedQuery, userLocation]);

    const handleSelectPlace = (place) => {
        setQuery(place.name);
        setResults([]);
        console.log("Selected place:", place);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.searchBar}>

                {/* Left Icon */}
                <MapPin size={22} color="#5f6368" />

                {/* Input */}
                <TextInput
                    placeholder="Search here"
                    placeholderTextColor="#5f6368"
                    style={styles.input}
                    value={query}
                    onChangeText={setQuery}
                />

                {/* Mic Icon */}
                <TouchableOpacity style={styles.iconBtn}>
                    <Mic size={22} color="#5f6368" />
                </TouchableOpacity>

                {/* Profile Avatar */}
                <TouchableOpacity>
                    <Image  
                        source={images.avatar}
                        style={styles.avatar}
                    />
                </TouchableOpacity>

            </View>

            {/* Search Results */}
            {results.length > 0 && (
                <View style={styles.resultsContainer}>
                    <FlatList
                        data={results}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.resultItem}
                                onPress={() => handleSelectPlace(item)}
                            >
                                <MapPin size={18} color="#5f6368" style={styles.resultIcon} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.resultText} numberOfLines={1}>{item.name}</Text>
                                    <Text style={styles.resultAddress} numberOfLines={1}>{item.address_line2 || item.formatted}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default TransparentSearchBar;


const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        top: 50,
        width: "100%",
        alignItems: "center",
        zIndex: 10,
        elevation: 10,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        width: width * 0.92,
        height: 52,
        paddingHorizontal: 14,
        borderRadius: 30,


        backgroundColor: "rgba(255, 255, 255, 0.78)",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginHorizontal: 10,
        color: "#000",
    },
    iconBtn: {
        marginRight: 8,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    resultsContainer: {
        width: width * 0.92,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderRadius: 15,
        marginTop: 10,
        maxHeight: 250,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    resultItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "#eee",
    },
    resultIcon: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    resultText: {
        fontSize: 16,
        color: "#333",
        fontWeight: "500",
    },
    resultAddress: {
        fontSize: 12,
        color: "#666",
        marginTop: 2,
    },
});
