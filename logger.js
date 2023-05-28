const chalk = require('chalk');
module.exports = (str, end) => {
console.log(chalk.hex(global.fca.ObjFcaConfig.mainColor || "#00FFFF").bold(`${global.fca.ObjFcaConfig.mainName || '[ Fca - Trankhuong ]'} > `) + str);
};
module.exports.onLogger = (str,end,ctscolor) => { 
	var checkbutdak = ctscolor.replace("#",'');
	if (ctscolor.indexOf('#') != 1) {
    
console.log(chalk.hex(global.fca.ObjFcaConfig.mainColor || "#00FFFF").bold(`${global.fca.ObjFcaConfig.mainName || '[ Fca - Trankhuong ]'} > `) + str);
	}
	else if (!isNaN(checkbutdak)) {
		console.log(chalk.hex(ctscolor).bold(`${global.fca.ObjFcaConfig.mainName || '[ FCA - KAISER ]'} > `) + str);
	} 
	else console.log(chalk.hex(global.fca.ObjFcaConfig.mainColor || "#00FFFF").bold(`${global.fca.ObjFcaConfig.mainName || '[ Fca - Trankhuong ]'} > `) + str);
}
