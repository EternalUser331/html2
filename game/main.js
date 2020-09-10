let game = {
	ctx: null,
	platform: null,
	ball: null,
	blocks: [],
	rows: 4,
	cows: 8,
	sprites: {
		background: null,
		ball: null,
		platform: null,
		block: null
	},
	init: function(){
		this.ctx = document.getElementById("mycanvas").getContext("2d");
	},
	preload(callback) {
		let loaded = 0;
		let required = Object.keys(this.sprites).length;
		let onImageLoad = () => {
			++loaded;
			if (loaded >= required) {
				callback();
			}
		};

		for (let key in this.sprites) {
			this.sprites[key] = new Image();
			this.sprites[key].src = "img/" + key + ".png";
			this.sprites[key].addEventListener("load", onImageLoad);
			
		}
	},
	create() {
		for (let row = 0; row < this.rows; row++) {
			for (let col = 0; col < this.cols; col++) {
				this.blocks.push({
					x: 64 * col + 65,
					y: 24 * row + 35
				});
			}	
		}
	},
	run() {
		window.requestAnimationFrame(() => {
			this.render();
		});
	},
	render(){
		this.ctx.drawImage(this.sprites.background, 0, 0);
		this.ctx.drawImage(this.sprites.ball, 0, 0, this.ball.width, this.ball.height,
		this.ball.x, this.ball.y, this.ball.width, this.ball.height);
		this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
		this.renderBlocks();
	},
	renderBlocks() {
		for (let block of this.blocks) {
			this.ctx.drawImage(this.sprites.block, block.x, block.y);
		}
	},
	start: function(){
		this.init();
		this.preload(() => {
			this.create();
			this.run();
		});
	}
};

	game.ball = {
		x: 320,
		y: 280,
		width: 20,
		height: 20
	};


	game.platform = {
		valocity:6,
		dx: 0,
		x: 280,
		y: 300
		// move() {
		// 	if (this.dx) {
		// 		this.x += this.dx;
		// 	}
		// }
	};



	// start: function(){
	// 	this.ctx = document.getElementById("mycanvas").getContext("2d");
	// 	let background = new Image();
	// 	background.src = "images.png";
	// 	window.requestAnimationFrame(() => {
	// 		this.ctx.drawImage(background, 0, 0);
	// 	});
	// }


window.addEventListener("load", () => {
	game.start();
})