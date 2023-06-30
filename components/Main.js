import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
//import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { gStyle } from '../styles/style';



export default function Main({ navigation }) {

    const [news, setNews] = useState([
        { key: "1", name: "Google", anons: "Google anons", full: "Google is cool!", img: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" },
        { key: "2", name: "Apple", anons: "Apple anons", full: "Apple is cool!", img: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg" },
        { key: "3", name: "GitHub", anons: "GitHub anons", full: "GitHub is cool!", img: "https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg" },
    ])

    const [modalWindow, setModalWindow] = useState(true)

    return (
        <View style={gStyle.main}>
            <TouchableOpacity onPress={() => setModalWindow(true)} style={styles.addModal}><Text style={styles.signAdd}>+</Text></TouchableOpacity>

            <Modal visible={modalWindow}>
                <View>
                    <TouchableOpacity onPress={() => setModalWindow(false)} style={styles.closeModal}><Text style={styles.signX}>x</Text></TouchableOpacity>
                    <Text style={gStyle.title}>Text in Modal</Text>
                </View>
            </Modal>
            {/* <MaterialIcons name="add-circle-outline" size={24} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)} /> */}
            <Text style={[gStyle.title, styles.header]}>Main Pag </Text>

            <FlatList
                data={news}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>

                        <Image style={styles.image} source={{ uri: item.img }} />
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.anons}>{item.anons}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    addModal: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'green',
        position: 'relative',
        zIndex: 1,
        top: 450
    },
    signAdd: {
        fontSize: 30,
        color: 'white',
        position: 'absolute',
        left: 11,
        bottom: 2,
    },
    closeModal: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        alignSelf: 'center'
    },
    signX: {
        fontSize: 30,
        color: 'white',
        position: 'absolute',
        left: 13,
        bottom: 4,
    },
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15,
    },
    header: {
        marginBottom: 30,
    },
    item: {
        width: '100%',
        marginBottom: 30,

    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'
    },
    image: {
        width: '100%',
        height: 200,
    }
})
