"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExecuteFile = void 0;
const fs = require("fs");
function getExecuteFile(folderPath) {
    const allFiles = fs.readdirSync(folderPath);
    const sortedFiles = allFiles.sort((name1, name2) => {
        return name1 < name2 ? 1 : -1;
    });
    const executeFile = sortedFiles[0] || '';
    return executeFile;
}
exports.getExecuteFile = getExecuteFile;
//# sourceMappingURL=schedule-task.util.js.map