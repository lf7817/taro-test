<!--
 * @Author: 李凡
 * @Email: 535536456@qq.com
 * @Date: 2020-07-30 10:50:11
 * @LastEditors: 李凡
 * @LastEditTime: 2020-07-30 10:52:55
 * @Description: 
--> 
# issues

## 3.0.6 useEffect 依赖为空数组时，页面卸载return函数不执行

### 步骤重现

```js
const Test: FC = () => {

  useEffect(() => {
    console.log('mount')
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
```

### 期望的结果是什么？
页面挂载时打印mount
页面卸载时打印unmount

### 实际的结果是什么？
页面挂载时打印了mount
页面卸载时未打印unmount

### 环境信息

```bash
Taro CLI 3.0.6 environment info:
    System:
      OS: Windows 10
    Binaries:
      Node: 12.18.2 - C:\Program Files\nodejs\node.EXE
      Yarn: 1.22.4 - C:\Program Files (x86)\Yarn\bin\yarn.CMD
      npm: 6.14.5 - C:\Program Files\nodejs\npm.CMD
```
