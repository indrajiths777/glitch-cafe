// 1. Import necessary packages
const express = require('express');
const cors = require('cors');

// 2. Create an Express application
const app = express();
const PORT = 3000; // The port our server will run on

// 3. Use CORS middleware
// This allows your frontend to make requests to this backend
app.use(cors());

// 4. Store all possible menu items on the server
const allDishes = [
    {
        name: "Chrono-Coffee",
        description: "A dark brew that lets you taste tomorrow's regrets today.",
        sideEffect: "May cause minor temporal displacement (yesterday's memories may seem fuzzy)."
    },
    {
        name: "Singularity Sandwich",
        description: "All flavors compressed into a single, reality-bending bite.",
        sideEffect: "Temporary loss of depth perception; walls may appear closer than they are."
    },
    {
        name: "Poltergeist Pastry",
        description: "So light, it occasionally floats a few inches off the plate.",
        sideEffect: "Attracts unseen observers. You may feel a faint chill."
    },
    {
        name: "404-Noodles",
        description: "Error: Flavor not found. Please reboot your taste buds.",
        sideEffect: "You forget what you were just thinking about."
    },
    {
        name: "Quantum Quiche",
        description: "Exists in a superposition of savory and sweet until consumed.",
        sideEffect: "A 50% chance of experiencing the opposite of your intended emotion."
    },
    {
        name: "Glitch Gazpacho",
        description: "A cold soup that visually flickers between tomato red and television static.",
        sideEffect: "Brief auditory hallucinations of dial-up modems."
    },
    {
        name: "Déjà Vu Donuts",
        description: "Tastes strangely familiar, as if you've eaten this exact donut in a dream.",
        sideEffect: "You will vividly re-experience the next 10 seconds of your life."
    },
    {
        name: "Eldritch Espresso",
        description: "A dark, bitter roast with unsettling hints of existential dread.",
        sideEffect: "You gain fleeting insight into a language you cannot speak."
    },
    {
        name: "Cipher Cake",
        description: "The ingredients are encrypted. The flavor is a puzzle.",
        sideEffect: "For the next hour, you can only think in riddles."
    },
    {
        name: "Recursive Ramen",
        description: "A bowl of noodles within a bowl of noodles within...",
        sideEffect: "A nagging feeling that you're forgetting something very, very important."
    },
    {
        name: "Shadow Smoothie",
        description: "Made from fruits grown in perpetual twilight. Tastes like secrets.",
        sideEffect: "Your shadow moves independently for 5 minutes. Do not watch it."
    },
    {
        name: "Vaporwave Vindaloo",
        description: "A spicy curry that glows with aesthetic perfection.",
        sideEffect: "The world appears tinted in pink and cyan for an hour."
    }
];

// 5. Create an API endpoint for the menu
// When the frontend requests '/api/menu', this code will run
app.get('/api/menu', (req, res) => {
    console.log("Request received for a new menu!");
    
    // Shuffle the array and pick 5 random dishes, just like before
    const shuffledDishes = allDishes.sort(() => 0.5 - Math.random());
    const selectedDishes = shuffledDishes.slice(0, 5);

    // Send the selected dishes back to the frontend as JSON data
    res.json(selectedDishes);
});

// 6. Start the server
app.listen(PORT, () => {
    console.log(`💀 Glitch Café backend is listening on http://localhost:${PORT}`);
});