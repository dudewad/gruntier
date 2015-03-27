module.exports.register = function(Handlebars, options) {
	Handlebars.registerHelper("logicalIf", function(left, operator, right, options) {
		switch(operator){
			case "<":
				return left < right ? options.fn(this) : options.inverse(this);
			case ">":
				return left > right ? options.fn(this) : options.inverse(this);
			case "==":
				return left == right ? options.fn(this) : options.inverse(this);
			case "===":
				return left === right ? options.fn(this) : options.inverse(this);
			case "!=":
				return left != right ? options.fn(this) : options.inverse(this);
			default:
				return;
		}
	});
};
