"use strict";
//path:/api/v2/cliente  esta es la ruta del path
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// cliente.route.ts
const express_1 = __importDefault(require("express"));
const cliente_controllers_1 = require("../controllers/cliente.controllers");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
const validate_jwt_1 = __importDefault(require("../middlewares/validate-jwt"));
const router = express_1.default.Router();
router.post('/', validate_jwt_1.default, [
    (0, express_validator_1.check)("nombre", "El Nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "El email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("telefono", "El telefono es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("tipoDocumento", "El tipo de documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "El numero de documento es obligatorio").not().isEmpty(), validate_fields_1.validateFields,
], cliente_controllers_1.crearClientes); // Asegúrate de que sea POST
router.get("/", cliente_controllers_1.getClientes, validate_jwt_1.default);
router.get("/:id", cliente_controllers_1.getunClientes);
router.put("/:id", cliente_controllers_1.updateCliente);
router.delete("/:id", cliente_controllers_1.DeleteCliente);
router.put("/:id", cliente_controllers_1.UpdateEstadocliente);
exports.default = router;
//# sourceMappingURL=cliente.route.js.map