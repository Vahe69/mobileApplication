import React, { ReactNode } from 'react'
import styled from 'styled-components/native'
import { GridRow } from '../Layout/Grid'
import { TextProps } from 'react-native'
import { codeBoxStyles } from '@oryd/themes'
import StyledText from './StyledText'

const StyledCodeBox = styled.View(codeBoxStyles)

interface Props extends TextProps {
  children: ReactNode
  testID?: string
}

export default ({ testID, ...props }: Props) => (
  <GridRow>
    <StyledCodeBox>
      <StyledText testID={testID} variant="code" {...props} />
    </StyledCodeBox>
  </GridRow>
)
