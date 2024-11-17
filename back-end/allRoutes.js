import { useExpress } from "./configs.js";
import { Register, Login } from "./controler/auth.js";
import { AllProducts } from "./controler/products.js";
// -------------------------------------

const { route } = useExpress();

// Authe routse

route.post("/register", Register);
route.post("/login", Login);
route.get("/getProducts", AllProducts);

export default route;