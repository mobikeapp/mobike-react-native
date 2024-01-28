import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import polyline from '@mapbox/polyline';

const SearchBarWithAutocomplete = () => {
    const encodedPolyline = "wrjlFj~_uMh@CLYpB?DM@wDdAGJP^hALbABp@CdAKtA?n@Dx@CT[dAm@bAUSYh@@JO?c@OU?c@TSVEZs@Ne@DaAA]GGc@Q]WM]?e@HI?_@dAaDB?xGz@dFDFCLV?mArGcA|Fq@`DiE|Um@`DaDjQGVgA`GiBdKYhAE|ABzJ@hIaK@sGDMCqFAKAaFA?hYCzDBf\\@|OHPLHcBbH]r@e@|AIXykjlFvj`uMUSoljlFbj`uMYh@@JykjlFvl`uMQISQSK]M[j@";

    const [polylines, setPolylines] = useState([]);

    useEffect(() => {
        const decodedPolyline = polyline.decode(encodedPolyline);
        const formattedCoordinates = decodedPolyline.map(point => ({
            latitude: point[0],
            longitude: point[1],
        }));
        setPolylines([formattedCoordinates]);
    }, []);

    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                {polylines.map((coordinates, index) => (
                    <Polyline
                        key={index}
                        coordinates={coordinates}
                        strokeColor="#000"
                        strokeWidth={2}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default SearchBarWithAutocomplete;


