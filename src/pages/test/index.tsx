import React, {  FC, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

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

export default Test
