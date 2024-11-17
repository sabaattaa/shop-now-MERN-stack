console.log("Welcom In Shop Now Backend");

import { useExpress, useDotenv } from "./configs.js";
const { app } = useExpress();
const { port } = useDotenv();
import route from "./allRoutes.js"

app.use('/api', route);
app.get("/", (req, res) => {
    
    return (
        res.status(200).send({
            name: "Saba",
            F_name:"Atta Muhammad"
        })
    )
})


app.listen(port, () => {
    console.log("backend is runing on port 4000")
})