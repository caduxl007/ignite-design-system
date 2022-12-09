import { Box, BoxProps, Text } from '@ignite-ui-cadu/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
