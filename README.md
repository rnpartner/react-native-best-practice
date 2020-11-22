# react-native-best-practice

总结个人在 React Native 项目中的经验，把自认为优秀的实践经验记录下来.以区块链项目为实例，做一次实实在在的总结。

### 问题及解决方法

- Unable to resolve module `crypto` from `node_modules\sjcl\sjcl.js`: crypto could not be found within the project.

  ```
  ./node_modules/.bin/rn-nodeify --hack --install
  ```
