import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';

import { CardComponent } from './card.component';

export default {  
  title: 'Card',
  component: CardComponent, 
  excludeStories: /.*Data$/,
} as Meta;

// export const actionsData = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

const Template: Story<CardComponent> = args => ({
  component: CardComponent,
  props: {
    ...args,
  //   onPinTask: actionsData.onPinTask,
  //   onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  card: {
    id: '1',
    title: 'Test Card',
    state: 'Card-Design',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

// export const Pinned = Template.bind({});
// Pinned.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_PINNED',
//   },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_ARCHIVED',
//   },
// };