var Beverage = function() {};

Beverage.prototype.boilWater = function() {
	console.log('把水煮沸');
};
Beverage.prototype.brew = function() {
	throw new Error('子类必须重写该方法！');
};
Beverage.prototype.pourInCup = function() {
	throw new Error('子类必须重写该方法！');
};
Beverage.prototype.addCondiments = function() {
	throw new Error('子类必须重写该方法！');
};
Beverage.prototype.customerWantsCondiments = function() {
	return true;
};
Beverage.prototype.init = function() {
	this.boilWater();
	this.brew();
	this.pourInCup();
	if(this.customerWantsCondiments()){
		this.addCondiments();
	}
}



var Coffee = function() {};

Coffee.prototype.brew = function() {
	console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourInCup = function() {
	console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondiments = function() {
	console.log('加糖和牛奶');
}

var Tea = function() {};

Tea.prototype.brew = function() {
	console.log('用沸水浸泡茶叶');
}
Tea.prototype.pourInCup = function() {
	console.log('把茶水倒进杯子');
}
Tea.prototype.addCondiments = function() {
	console.log('加柠檬');
}
// 泡一杯不加调料的茶
Tea.prototype.customerWantsCondiments = function() {
	// return false;
	// 确定：返回true，否则返回false
	return window.confirm('请问需要加调料吗？');   
};


// 继承：通过原型链
Coffee.prototype = new Beverage();
Tea.prototype = new Beverage();

var coffee = new Coffee();
coffee.init();

var tea = new Tea();
tea.init();