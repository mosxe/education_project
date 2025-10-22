import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: 'Рандомный текст'
  }
};