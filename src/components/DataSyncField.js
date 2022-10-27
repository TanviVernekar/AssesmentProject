import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';

export const DataSyncField = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleToggle = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <TouchableOpacity onPress={handleToggle}>
        <Image
          source={require('../assets/images/sync_icn.png')}
          style={styles.contentIcon}
        />
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} coverScreen={true}>
        <TouchableOpacity
          style={styles.dataSyncContainer}
          onPress={handleToggle}>
          <View style={styles.imageContainer}>
            <Text style={styles.modalText}>Data Sync in Progress</Text>
            <Text style={styles.modalText}>Please wait</Text>
          </View>
          <Image
            source={require('../assets/images/datasync.png')}
            style={styles.dataSyncimage}
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  contentIcon: {
    marginLeft: 35,
  },
  dataSyncimage: {
    alignSelf: 'center',
    height: 40,
    width: 42,
  },
  modalText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dataSyncContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    marginVertical: 33,
  },
});
