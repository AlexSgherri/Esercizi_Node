import app from "./Esercizio13app"

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})