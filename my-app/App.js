import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, Button, StyleSheet, ScrollView } from 'react-native';
import { evaluate } from 'mathjs';

const App = () => {
  const [resultado, setRst] = useState('');

  const operaciones = (numero) => {
    setRst(resultado + numero);
  };

  const calcular = () => {
    try {
      const result = evaluate(resultado);
      setRst(result.toString());
    } catch (error) {
      alert('Error en la expresión.');
    }
  };

  const BorrarNumero = () => {
    setRst(resultado.slice(0, -1));
  };

  const BorrarTodo = () => {
    setRst('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.calculator}>
        <TextInput
          style={styles.resultado}
          value={resultado}
          editable={false}
          multiline={true}
          numberOfLines={3}
        />

        <View style={styles.buttonRow}>
          <Button title="sin" onPress={() => operaciones('sin(')} />
          <Button title="cos" onPress={() => operaciones('cos(')} />
          <Button title="tan" onPress={() => operaciones('tan(')} />
          <Button title="log" onPress={() => operaciones('log(')} />
        </View>
        
        <View style={styles.buttonRow}>
          <Button title="√" onPress={() => operaciones('sqrt(')} />
          <Button title="xʸ" onPress={() => operaciones('pow(')} />
          <Button title="(" onPress={() => operaciones('(')} />
          <Button title=")" onPress={() => operaciones(')')} />
          <Button title="e" onPress={() => operaciones('e')} />
        </View>

        <View style={styles.buttonRow}>
          <Button title="7" onPress={() => operaciones('7')} />
          <Button title="8" onPress={() => operaciones('8')} />
          <Button title="9" onPress={() => operaciones('9')} />
          <Button title="C" onPress={BorrarTodo} />
          <Button title="⌫" onPress={BorrarNumero} />
          
        </View>

        <View style={styles.buttonRow}>
          <Button title="4" onPress={() => operaciones('4')} />
          <Button title="5" onPress={() => operaciones('5')} />
          <Button title="6" onPress={() => operaciones('6')} />
          <Button title="x" onPress={() => operaciones('*')} />
          <Button title="÷" onPress={() => operaciones('/')} />
        </View>

        <View style={styles.buttonRow}>
          <Button title="1" onPress={() => operaciones('1')} />
          <Button title="2" onPress={() => operaciones('2')} />
          <Button title="3" onPress={() => operaciones('3')} />
          <Button title="+" onPress={() => operaciones('+')} />
          <Button title="-" onPress={() => operaciones('-')} />
        </View>

        <View style={styles.buttonRow}>
          <Button title="." onPress={() => operaciones('.')} />
          <Button title="0" onPress={() => operaciones('0')} />
          <Button title="π" onPress={() => operaciones('pi')} />        
          <Button title="=" onPress={calcular} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#737373' },
  calculator: { padding: 50 }, 
  resultado: { height: 100, borderColor: '#0b1241', borderWidth: 6, fontSize: 40, marginBottom: 20, padding: 15, textAlign: 'right', backgroundColor: '#ffffff' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10},
});

export default App;
