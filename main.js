document.addEventListener('DOMContentLoaded', () => {
    // Pub/Sub system
    const pubsub = {
        events: {}, // Object to store event names and their subscribers

        // Method to subscribe to an event
        subscribe: function (eventName, fn) {
            // If the event doesn't exist yet, create an array for it
            if (!this.events[eventName]) {
                console.log(`Someone subscribed to the ${eventName}`);
                this.events[eventName] = [];
            }
            // Add the subscriber function to the event's array
            this.events[eventName].push(fn);
        },

        // Method to publish an event
        publish: function (eventName, data) {
            console.log(`Someone has published ${eventName}`);
            // If there are subscribers for the event, call each subscriber function
            if (this.events[eventName]) {
                this.events[eventName].forEach(fn => {
                    fn(data); // Call the subscriber function with the provided data
                });
            }
        },
        //Method to unsubscribe from an event
        unsubscribe: function (eventName, fn) {
            if (this.events[eventName]) {
                this.events[eventName] = [];
                console.log(`Unsubscribed from ${eventName}`);
            }
        }


    }

    // Subscribe to the 'Click1' event
    pubsub.subscribe('Click1', () => {
        console.log("Counter1 was updated");
        let counter2 = document.getElementById("count2").innerHTML;
        let counter1 = document.getElementById("count1").innerHTML;
        counter1++; // Increment counter1
        document.getElementById("count1").innerHTML = counter1; // Update the displayed counter1 value
        // Publish the 'countUpdated' event with the sum of counter1 and counter2
        pubsub.publish("countUpdated", Number(counter1) + Number(counter2));
    });

    // Subscribe to the 'Click2' event
    pubsub.subscribe('Click2', () => {
        console.log("Counter2 was updated");
        let counter1 = document.getElementById("count1").innerHTML;
        let counter2 = document.getElementById("count2").innerHTML;
        counter2++; // Increment counter2
        document.getElementById("count2").innerHTML = counter2; // Update the displayed counter2 value
        // Publish the 'countUpdated' event with the sum of counter1 and counter2
        pubsub.publish("countUpdated", Number(counter1) + Number(counter2));
    });

    // Subscribe to the 'countUpdated' event
    pubsub.subscribe('countUpdated', (data) => {
        console.log("Total count was updated");
        document.getElementById("t_count").innerHTML = data; // Update the displayed total count
    });
    // Function to handle clicks on the first button
    function handleClick1() {
        pubsub.publish("Click1"); // Publish the 'Click1' event
    }

    // Function to handle clicks on the second button
    function handleClick2() {
        pubsub.publish("Click2"); // Publish the 'Click2' event
        console.log("Click2 has been published");
    }

    // Attach click event listeners to the buttons
    document.getElementById("click1").addEventListener('click', handleClick1);
    document.getElementById("click2").addEventListener('click', handleClick2);
    document.getElementById("unsubscribe").addEventListener('click', () => {
        pubsub.unsubscribe("countUpdated", (data) => {
            console.log("Total count was updated");
            document.getElementById("t_count").innerHTML = data; // Update the displayed total count
        })
    });
});
