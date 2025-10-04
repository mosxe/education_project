import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CommentList } from './CommentList';

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Тестовый коммент',
        user: {
          id: '1',
          username: 'Test'
        }
      },
      {
        id: '2',
        text: 'Тестовый коммент 2',
        user: {
          id: '1',
          username: 'Test'
        }
      }
    ],
    isLoading: false
  }
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true
  }
};