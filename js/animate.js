function rotateCogs() {
   	TweenMax.to("#cog-large", 2, {
    rotation:"+=270", 
    transformOrigin:"center"
	});

	TweenMax.to("#cog-medium", 2, {
    rotation: "-=270", 
    transformOrigin:"center"
	});

	TweenMax.to("#cog-small", 2, {
    rotation: "-=270", 
    transformOrigin:"center"
	});
};