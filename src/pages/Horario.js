import { View, Text, Image } from 'react-native';
import horario from '../assets/horario.jpg';

export const Horario = () => {
  return (
    <View style={{ marginRight: 5, marginLeft: 5 }}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          marginTop: 10,
        }}>
        Horarios de servicio
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={{ color: 'green', margin: 5 }}>Martes</Text>
        <Text style={{ color: 'green', margin: 5 }}>Sabados</Text>
        <Text style={{ color: 'green', margin: 5 }}>Domingo</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={{ color: 'black', margin: 5 }}>6 a.m</Text>
        <Text style={{ color: 'black', margin: 5 }}>9 a.m</Text>
        <Text style={{ color: 'black', margin: 5 }}>10 a.m</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={{ color: 'black', margin: 5 }}>6 p.m</Text>
        <Text style={{ color: 'black', margin: 5 }}>6 p.m</Text>
        <Text style={{ color: 'black', margin: 5 }}>2 p.m</Text>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={horario}
          style={{
            justifyContent: 'center',
            width: 200,
            height: 350,
            marginTop: 20,
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
};
