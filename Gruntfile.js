module.exports=function(grunt){
	//1.引入模块
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');

	//2.编写任务
	grunt.initConfig({
		uglify:{
			compress1:{
				src:'js/screensaver.js',
				dest:'dest/screensaver.min.js'
			}
		},
		cssmin:{
			compress1:{
				src:'css/base.css',
				dest:'dest/base.css.min.css'
			}
		}
	});

	//3.注册默认任务
	grunt.registerTask('default',['uglify','cssmin']);
}