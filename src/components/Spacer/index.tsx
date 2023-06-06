import { Text, StyleSheet, View } from 'react-native'
import React, { Component, ReactNode } from 'react'

import { styles } from './styles';

interface SpacerProps {
  children?: ReactNode;
}

export function Spacer(props: SpacerProps) {
  return(
    <View style={styles.container} >
      {props.children}
    </View>
  )
}