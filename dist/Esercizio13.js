"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Esercizio13app_1 = __importDefault(require("./Esercizio13app"));
const PORT = 3000;
Esercizio13app_1.default.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
//# sourceMappingURL=Esercizio13.js.map