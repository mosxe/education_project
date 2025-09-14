import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Avatar } from './Avatar';
import AvatarImg from './avatar_storybook.jpg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 100,
    src: AvatarImg
  }
};

export const Large: Story = {
  args: {
    size: 300,
    src: AvatarImg
  }
};
