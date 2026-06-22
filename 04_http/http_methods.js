//gpt chat link: https://chatgpt.com/s/t_6a37fc40d8488191b49bee9acd44900b

/*##### HTTP METHODS #####*/

// HTTP is a protocol used for communication between client and server.
// REST APIs mainly use 5 methods:

// ==================== GET ====================
// Used to retrieve/read data from the server.
// Safe and Idempotent.


// REST Example:
// GET /users
// GET /users/1

app.get("/users", (req, res) => {
    res.send("All Users");
});

app.get("/users/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});


// ==================== POST ====================
// Used to create a new resource on the server.
// Not Safe and Not Idempotent.


// REST Example:
// POST /users

app.post("/users", (req, res) => {
    res.send("New User Created");
});


// Request Body Example:
// {
//     "name": "Raza",
//     "email": "raza@gmail.com"
// }



// ==================== PUT ====================
// Used to completely replace/update an existing resource.
// Idempotent.


// REST Example:
// PUT /users/1

app.put("/users/:id", (req, res) => {
    res.send(`User ${req.params.id} Updated`);
});


// Request Body Example:
// {
//     "name": "Raza",
//     "email": "new@gmail.com"
// }



// ==================== PATCH ====================
// Used to partially update a resource.
// Only updates the specified fields.


// REST Example:
// PATCH /users/1

app.patch("/users/:id", (req, res) => {
    res.send(`User ${req.params.id} Partially Updated`);
});


// Request Body Example:
// {
//     "email": "new@gmail.com"
// }



// ==================== DELETE ====================
// Used to delete a resource from the server.
// Idempotent.


// REST Example:
// DELETE /users/1

app.delete("/users/:id", (req, res) => {
    res.send(`User ${req.params.id} Deleted`);
});