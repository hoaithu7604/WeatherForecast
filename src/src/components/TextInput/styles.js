import {StyleSheet} from 'react-native';
import { styles } from '../Container';
import GLOBALS from '../../Globals';
const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 15;

export default StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection:'row',
        alignItems: 'center',
        marginVertical: 11,
    },
    buttonContainer:{
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
    },
    buttonText:{
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 8,
        color: GLOBALS.PRIMARY_COLOR,
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: GLOBALS.PRIMARY_COLOR,
    }, 
    border:{
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: GLOBALS.PRIMARY_COLOR,
    },
})