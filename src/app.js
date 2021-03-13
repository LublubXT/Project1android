import { Button, contentView } from 'tabris';

new Button({ text: 'Button' })
  .onSelect(() => console.log('Button tapped'))
  .appendTo(contentView);