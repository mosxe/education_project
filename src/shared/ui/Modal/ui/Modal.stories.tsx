import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text Text Text Text Text Text Text',
    isOpen: true
  }
};


export const Dark: Story = {
  args: {
    children: 'Text Text Text Text Text Text Text',
    isOpen: true
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
};