import { Box, BoxProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o element Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
