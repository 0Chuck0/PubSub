This project demonstrates a simple Pub/Sub (Publish/Subscribe) system in JavaScript. It consists of two buttons, each associated with a counter. When a button is clicked, an event is published, and the corresponding counter is incremented. The total of the two counters is then updated and displayed.

## Features

- **Pub/Sub System**: Implements a basic publish/subscribe pattern.
- **Event Handling**: Handles click events on two buttons.
- **Counters**: Maintains separate counters for each button click.
- **Total Count Update**: Updates the total count after each button click.

## Flow

1. **Initialization**: The Pub/Sub system and event listeners are set up when the DOM is fully loaded.
2. **Button Click**: When a button is clicked:
   - The click event is published.
   - The corresponding counter is incremented.
   - The updated counter value is displayed.
   - The total count is calculated and published.
3. **Total Count Update**: The total count is updated and displayed whenever the total count event is published.

## Pub/Sub System

### Methods

- **`subscribe(eventName, fn)`**: Subscribes a function to an event.
- **`publish(eventName, data)`**: Publishes an event and calls all subscribed functions with the provided data.

### Events

- **`Click1`**: Published when the first button is clicked.
- **`Click2`**: Published when the second button is clicked.
- **`countUpdated`**: Published after updating the counters, with the total count as data.
