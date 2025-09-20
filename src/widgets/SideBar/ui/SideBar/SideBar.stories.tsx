import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { SideBar } from './SideBar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widgets/SideBar',
  component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    user: { authData: {} }
  })
  ],
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: {} }
  })
  ],
};

export const NoAuth: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    user: {}
  })
  ],
};