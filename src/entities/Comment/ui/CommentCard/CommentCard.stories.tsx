import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comment: {
      id: '2',
      text: 'Тестовый коммент 2',
      user: {
        id: '1',
        username: 'Test'
      }
    }
  }
};

export const Loading: Story = {
  args: {
    comment: undefined,
    isLoading: true
  }
};