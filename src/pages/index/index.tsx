import React, { Component } from 'react'
import Taro from "@tarojs/taro"
import { View, Text, Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>

        <Button onClick={() => Taro.navigateTo({url: "/pages/test/index"})}>go to test</Button>
      </View>
    )
  }
}
