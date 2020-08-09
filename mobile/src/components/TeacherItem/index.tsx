import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: 'https://github.com/Lyforth.png'}} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}> Aelxandre Fernandes</Text>
                    <Text style={styles.subject}>Física</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Não estou a fim de escrever uma bio gigantesca pra testes.
                {'\n'}{'\n'}
                Caralho é serio que vou ter que escrever uma bio grande de testes?
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>Preço/hora {' '}</Text>
                <Text style={styles.priceValue}>R$ 20,00</Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[ styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutLineIcon}/> */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;