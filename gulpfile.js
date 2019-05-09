var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

gulp.task('default', function () {
    return gulp.src('svg/src/*.svg')
	    .pipe(svgmin({
	    	plugins: [
	    	{	// Remove doctype
	    	    removeDoctype: true
	    	}, 
	    	{	// Remove comments
	    	    removeComments: true
	    	}, 
	    	{	// Precision
	    	    cleanupNumericValues: {
	    	        floatPrecision: 3
	    	    }
	    	}, 
	    	{	// Remove <metadata>
	    	    removeMetadata: true
	    	}, 
	    	{	// Remove XML instructions
	    	    removeXMLProcInst: true
	    	}, 
	    	{	// Remove editor data
	    	    removeEditorsNSData: true
	    	}, 
	    	{	// Cleanup attribute whitespace
	    	    cleanupAttrs: true
	    	}, 
	    	{
	    	    convertColors: {
	    	        names2hex: false,
	    	        rgb2hex: false
	    	    }
	    	},
	    	{
	    		inlineStyles: true
	    	},
	    	{
	    		minifyStyles: true
	    	},
	    	{
	    		convertStyleToAttrs: true
	    	},
	    	{
	    		cleanupIDs: true
	    	},
	    	{
	    		removeUselessDefs: true
	    	},
	    	{
	    		cleanupNumericValues: true
	    	},
	    	{
	    		removeUnknownsAndDefaults: true
	    	},
	    	{
	    		removeNonInheritableGroupAttrs: true
	    	},
	    	{
	    		removeUselessStrokeAndFill: true
	    	},
	    	{
	    		removeViewBox: true
	    	},
	    	{
	    		cleanupEnableBackground: true
	    	},
	    	{
	    		removeHiddenElems: true
	    	},
	    	{
	    		removeEmptyText: true
	    	},
	    	{
	    		convertShapeToPath: true
	    	},
	    	{
	    		moveElemsAttrsToGroup: true
	    	},
	    	{
	    		collapseGroups: true
	    	},
	    	{
	    		convertPathData: true
	    	},
	    	{
	    		convertTransform: true
	    	},
	    	{
	    		removeEmptyAttrs: true
	    	},
	    	{
	    		removeEmptyContainers: true
	    	},
	    	{
	    		mergePaths: true
	    	},
	    	{
	    		removeUnusedNS: true
	    	},
	    	{
	    		removeTitle: true
	    	},
	    	{
	    		removeDesc: true
	    	}]
	    }))
	    .pipe(gulp.dest('svg/dist'));
});
