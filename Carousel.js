import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    Image
} from 'react-native';
import CarouselPager from 'react-native-carousel-pager';

export default class Carousel extends Component {
    render() {

        var i = 0;

        let pages = [];
        for (let i = 0; i < 5; i++) {
            let imag = "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?w=640&ssl=1";
            let iSee = [
                { name: "https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?w=640&ssl=1" },
                { name: "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/bd07f82e-a30d-4e93-a2cf-0c16ea2b7f40/08-owl-opt.jpg" },
                { name: "https://www.wonderplugin.com/videos/demo-image0.jpg" },
                { name: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg" },
            ];
            pages.push(
                <View
                    key={'page-' + i}
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0,
                        backgroundColor: '#fff',
                        borderRadius: 2
                    }}>
                    {/* <Text style={{ color: '#666', fontSize: 60, fontWeight: 'bold' }}>{i + 1}</Text> */}
                    <Image
                        style={{ height: '100%', width: "100%" }}
                        source={{ uri: "https://www.wonderplugin.com/videos/demo-image0.jpg" }}
                    />
                    <View style={{ height: '100%', width: "100%", position: "absolute" }}>
                        <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}> Hello Motherfxxker!</Text>
                    </View>
                </View>


            );
        }

        return (
            <View style={styles.container}>
                <View style={{ marginTop: 0, height: 120, width: "100%", flexDirection: 'row', backgroundColor: '#D3D3D3', paddingTop: 5, paddingBottom: 5 }}>
                    <CarouselPager
                        pageStyle={{
                            backgroundColor: 'red',
                            padding: 0,
                        }}
                    >
                        <View
                            key={'page-' + 1}
                            style={{
                                height:120,
                                width:320,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 0,
                                backgroundColor: '#fff',
                                borderRadius: 0
                            }}>
                            {/* <Text style={{ color: '#666', fontSize: 60, fontWeight: 'bold' }}>{i + 1}</Text> */}
                            <Image
                                style={{ height: '100%', width: "100%" }}
                                source={{ uri: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg" }}
                            />

                        </View>

                        <View
                            key={'page-' + 2}
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 0,
                                backgroundColor: '#fff',
                                borderRadius: 0
                            }}>
                            {/* <Text style={{ color: '#666', fontSize: 60, fontWeight: 'bold' }}>{i + 1}</Text> */}
                            <Image
                                style={{ height: '100%', width: "100%" }}
                                source={{ uri: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg" }}
                            />
                        </View>
                    </CarouselPager>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flexDirection: 'column',
        backgroundColor: '#ccc',
    }
});