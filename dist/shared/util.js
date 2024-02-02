"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataFromCsv = exports.toNumber = exports.toTrimString = void 0;
const common_1 = require("@nestjs/common");
const csv = require("csvtojson");
const toTrimString = ({ value }) => {
    return value ? value.trim() : value;
};
exports.toTrimString = toTrimString;
const toNumber = (key, value) => {
    const newValue = Number.parseFloat(value);
    if (Number.isNaN(newValue)) {
        throw new common_1.BadRequestException(`${key} must be a number`);
    }
    return newValue;
};
exports.toNumber = toNumber;
async function getDataFromCsv(path) {
    return csv().fromFile(path);
}
exports.getDataFromCsv = getDataFromCsv;
//# sourceMappingURL=util.js.map