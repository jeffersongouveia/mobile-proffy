import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 10,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between'
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },

  buttonPrimary: {
    backgroundColor: '#9871F5'
  },

  buttonSecondary: {
    backgroundColor: '#04D361'
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF',
    fontSize: 12,
    lineHeight: 15,
    maxWidth: 140,
    marginTop: 40
  }
})

export default styles

