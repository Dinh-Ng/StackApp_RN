import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.setAsyncStorageHandler?.(AsyncStorage)
  .configure()
  .useReactNative()
  .connect();

export default reactotron;
